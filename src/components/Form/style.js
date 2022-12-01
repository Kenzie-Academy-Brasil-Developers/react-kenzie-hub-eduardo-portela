import styled from "styled-components";

export const Forms = styled.form`
  background-color: var(--color-grey-300);
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  p {
    color: red;
    font-size: var(--text-5);
  }

  label {
    color: #f8f9fa;
    font-size: var(--text-6);
  }

  input,
  select {
    height: 38px;
    border-radius: 4px;
    border: 1px solid var(--color-grey-0);
    background-color: var(--color-grey-200);
    padding-left: 16px;
    color: #fff;
  }

  input::placeholder {
    color: var(--color-grey-100);
  }

  select {
    color: var(--color-grey-100);
  }

  button {
    margin-top: 16px;
    height: 38px;
    border-radius: 4px;
    border: 1px solid var(--color-grey-0);
    background-color: var(--brand-3);
    padding-left: 16px;
    color: #fff;
  }

  @media (min-width: 800px) {
    label {
      font-size: var(--text-4);
    }
  }
`;
