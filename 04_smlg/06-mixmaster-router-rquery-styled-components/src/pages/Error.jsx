import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const ErrorStatus = {
  NOT_FOUND: 404,
};

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === ErrorStatus.NOT_FOUND) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not found" />
          <h3>Ups!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/">Back to HOMEPAGE</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
