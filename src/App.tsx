import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import { PageType } from "./types/page";
import AppRouter from './router/AppRouter';

type Props = {
  pages: Array<PageType>
}

function App({ pages }: Props) {
  return (
    <BrowserRouter>
      <AppRouter pages={pages}/>
    </BrowserRouter>
  );
}

export default App;
