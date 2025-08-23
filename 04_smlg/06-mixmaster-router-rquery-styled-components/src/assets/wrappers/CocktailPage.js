import styled from "styled-components";

const Wrapper = styled.div`
  header {
    margin-bottom: 3rem;
    text-align: center;

    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--borderRadius);
  }

  .drink-info {
    padding-top: 2rem;
  }

  .drink p {
    margin-bottom: 1rem;
    line-height: 2;
    font-weight: 700;
    text-transform: capitalize;
  }

  .drink-data {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    letter-spacing: var(--letterSpacing);
    color: var(--primary-700);
    background: var(--primary-300);
    border-radius: var(--borderRadius);
  }

  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      align-items: center;
      gap: 3rem;
    }

    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
