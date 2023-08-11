import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import FormPage from "./pages/FormPage/FormPage";
import PriorityPage from "./pages/PriorityPage.js/PriorityPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PriorityPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/prioritylist" element={<HomePage />} />
        <Route path="/daily" element={<PriorityPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
