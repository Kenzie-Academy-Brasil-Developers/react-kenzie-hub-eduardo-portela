import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const DivLogin = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  Form h3 {
    color: #fff;
    text-align: center;
  }

  Form {
    gap: 16px;
  }

  Form button {
    background-color: var(--brand-1);
  }
  Form aside p {
    color: var(--color-grey-100);
    font-size: var(--text-5);
    text-align: center;
  }
`;

export const Link = styled(LinkRouter)`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-grey-100);
  border-radius: 4px;
  color: #fff;
  width: 100%;
  background-color: var(--color-grey-100);
  height: 48px;
  text-decoration: none;
  margin: 16px 0;
`;
