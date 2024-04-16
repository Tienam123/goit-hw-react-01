import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  :root {
    //-----------------------------------/ Root main Colors /---------------------------------------

    --mainColor: #fff; // Цвет шрифта по умолчанию
    --mainBgColor: #000000;

    //-----------------------------------/ Color-Palette /---------------------------------------

    --mainCardColor: #a5afba;

    //-----------------------------------/Animation/---------------------------------------

    --animation-hover: 300ms ease-in;

  }

body {
  background-color:var(--mainBgColor);
  color: var(--mainColor);
}

`
