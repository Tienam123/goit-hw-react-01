import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { GlobalStyled } from './Global.styled';
import { Footer, Header, Main } from './pages';


ReactDOM.createRoot(document.getElementById('wrapper'))
  .render(
    <React.StrictMode>
      <Header/>
      <Main/>
      <Footer />
      <GlobalStyled/>
    </React.StrictMode>,
  );
