import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-2);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-4);
  }

  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;

    h4,
    h5 {
      margin-bottom: 0.5rem;
    }

    h4 {
      font-weight: 700;
    }

    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

export default Wrapper;
