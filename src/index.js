import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./app";
import Form2 from "./component/form2";
import Form from "./component/form";
import UserData from "./component/userdata";
import Form3 from "./component/form3";
import Home from "./component/home";
import NotFound from "./component/notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carddelete from "./component/carddelete";
import Cardauthor from "./component/cardauthor";
import Localdata from "./component/localdata";

import Table from "./component/table";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />

        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/userdata" element={<UserData />} />
        <Route path="/carddelete" element={<Carddelete />} />
        <Route path="/cardauthor" element={<Cardauthor />} />

        <Route path="/table" element={<Table />} />
        <Route path="/localdata" element={<Localdata />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);
