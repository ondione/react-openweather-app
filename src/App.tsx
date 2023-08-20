import React, { Suspense } from "react";
import { BrowserRouter  } from "react-router-dom";
import { RoutesConfig } from "./configs/routesConfig";
import './App.css';

function App() {
  return (
    <>
      <Suspense fallback={<div >loading ...</div>} >
        <BrowserRouter>
          <RoutesConfig />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
