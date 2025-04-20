import { useState } from "react";

const ShortCircuitOverview = () => {
  const [hollow, setHollow] = useState("");
  const [full, setFull] = useState("full");
  return (
    <>
      <h2>short circuit overview</h2>
      hollow && full - {hollow && full}
      <br />
      hollow || full - {hollow || full}
      <br />
      full && hollow - {full && hollow}
      <br />
      full || hollow - {full || hollow}
    </>
  );
};
export default ShortCircuitOverview;
