import styled from "styled-components";

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    width: 120px;
    font-weight: 100;
  }

  button {
    width: 25px;
    height: 25px;
    right: 0;
    background-color: var(--color-grey-300);
    color: #fff;
    font-weight: 600;
    font-size: 15px;
  }
`;

export const ListCardTech = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-300);
  padding: 16px;
  border-radius: 4px;
  gap: 16px;
`;

export const TechCard = styled.li`
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-400);
  border-radius: 4px;
  padding: 0 16px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
    margin: 0;
  }

  & p {
    cursor: pointer;
  }

  div button {
    background-color: transparent;
    color: #fff;
  }
`;
