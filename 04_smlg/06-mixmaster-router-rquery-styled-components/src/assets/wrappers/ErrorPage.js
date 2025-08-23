import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;

  img {
    display: block;
    width: 90vw;
    max-width: 600px;
    margin-top: -3rem;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.5;
    color: var(--grey-500);
  }

  a {
    text-transform: capitalize;
    color: var(--primary-500);
  }
`;

export default Wrapper;
