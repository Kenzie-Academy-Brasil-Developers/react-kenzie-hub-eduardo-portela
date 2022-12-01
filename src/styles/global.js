import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

/* @media (min-width: 910px) {
  .media {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
} */

body{
    background-color: var(--color-grey-400);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
    border-radius: 8px;
}

.container{
    padding: .6rem;
    max-width: 1440px;
}

.containerMobile{
    padding: .6rem;
    max-width: 1440px;
    margin: 0 auto;
}

:root{
    --brand-1: #FF577F;
    --brand-2: #FF427F;
    --brand-3: #59323F;

    --color-error:##E83F5B;
    --color-warning:#FFCD07;
    --color-sucess:##3FE864;

    --white: #ffffff
    --color-black: #000

    --color-grey-0: #F8F9FA;
    --color-grey-100: #868E96;
    --color-grey-200: #343B41;
    --color-grey-300: #212529;
    --color-grey-400: #121214;


    --color-grey-500: #828282;
    --color-grey-600: #aaa;
    --color-grey-700: #E0E0E0;
    --color-grey-800: #F5F5F5;

    --text-1: 26px;
    --text-2: 22px;
    --text-3: 18px;
    --text-4: 14px;
    --text-5: 12px;
    --text-6: 10px;
}

`;

export default GlobalStyles;
