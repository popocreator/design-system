import React, { ReactElement } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const repository = "/template-react";

const Home = () => <>Home</>;
const Login = () => <>Login</>;

export default function App(): ReactElement {
  return (
    <BrowserRouter basename={repository}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
