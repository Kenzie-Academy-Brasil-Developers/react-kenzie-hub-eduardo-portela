import styled from "styled-components";

export const DivHeader = styled.div`
  border-bottom: 1px solid var(--color-grey-200);

  Header {
    max-width: 800px;
  }
`;

export const DivSubHeader = styled.div`
  border-bottom: 1px solid var(--color-grey-200);
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 131px;
    justify-content: center;
  }

  h3 {
    color: #fff;
  }

  p {
    color: var(--color-grey-100);
    font-size: var(--text-4);
  }

  @media (min-width: 800px) {
    & div {
      flex-direction: row;
      justify-content: space-between;
      max-width: 800px;
      padding: 0;
      height: 120px;
      align-items: center;
    }
  }
`;

export const DivMain = styled.main`
  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 131px;
    justify-content: center;
  }

  h3 {
    color: #fff;
  }

  p {
    color: var(--color-grey-100);
    font-size: var(--text-4);
  }

  @media (min-width: 800px) {
    & div {
      max-width: 800px;
      padding: 0;
      height: 120px;
    }
  }
`;
