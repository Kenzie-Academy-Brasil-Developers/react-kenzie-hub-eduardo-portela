import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const DivFormTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;
  gap: 16px;

  span {
    color: #fff;
    font-size: var(--text-4);
  }

  h3 {
    font-size: var(--text-3);
    color: #fff;
  }
  p {
    font-size: var(--text-5);
    color: var(--color-grey-100);
  }
`;

export const Link = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  background-color: var(--color-grey-300);
  padding: 8px 16px;
  border-radius: 4px;
`;
