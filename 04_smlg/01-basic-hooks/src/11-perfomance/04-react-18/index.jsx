import { lazy, Suspense, useState, useTransition } from "react";

const SlowComponent = lazy(() => import("./SlowComponent"));

const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // heavy function does not slow dow text input
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src="/vite.svg" alt="" />
          </div>
        );
      });
      setItems(newItems);
    });
  };
  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <section>
        <form className="form">
          <input
            type="text"
            className="form-input"
            value={text}
            onChange={handleChange}
          />
        </form>
        <h4>Items Below</h4>
        {isPending ? (
          "Loading..."
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "2rem",
            }}
          >
            {items}
          </div>
        )}
        <button onClick={() => setShow(!show)} className="btn">
          toggle slow component
        </button>
        {/* SlowComponent loads only when user clicks the button */}
        {show && <SlowComponent />}
      </section>
    </Suspense>
  );
};
export default LatestReact;
