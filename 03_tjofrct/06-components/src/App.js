import { GoBeaker, GoBell, GoCloudDownload } from "react-icons/go";
import Button from "./Button";

function App() {
  function handleClick() {
    console.log("Hi from Opanki button👋");
  }

  function handleMouseOver() {
    alert("Push me, not hover on me!!!");
  }

  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick} className="mb-3">
          <GoBell />
          Opanki
        </Button>
      </div>
      <div>
        <Button danger outline onMouseOver={handleMouseOver}>
          <GoCloudDownload />
          Push me
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBeaker />
          Touch me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hi I&apos;m button
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Zzzzzzzzz
        </Button>
      </div>
    </div>
  );
}

export default App;
