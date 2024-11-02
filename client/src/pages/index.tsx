import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Books } from "./books";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Books />} path="/books" />
      </Routes>
    </BrowserRouter>
  );
}
