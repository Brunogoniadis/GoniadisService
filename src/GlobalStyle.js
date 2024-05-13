import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root
    {
        --color-primary: #00A2FF;

        --color-secondary:#01BF71;

        --color-white:#fff;
        --color-dark:#010606;

        --color-error:#EA524F;
        
        --color-backgroundMain: #ffffff;
  
        --color-background-dark: #0B1139;
    }


    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Encode Sans Expanded', sans-serif;
    }
`;
