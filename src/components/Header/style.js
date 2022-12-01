import styled from "styled-components";

export const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  max-width: 450px;
  margin: 20px auto;

  h1 {
    color: var(--brand-1);
    font-size: var(--text-2);
  }

  button {
    width: 79px;
    height: 31px;
    background-color: var(--color-grey-300);
    color: #fff;
  }
`;
