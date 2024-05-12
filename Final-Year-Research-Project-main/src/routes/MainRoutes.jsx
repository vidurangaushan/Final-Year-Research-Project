import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SelectionPage from "../pages/Selection/SelectionPage";
import MathsForm from "../pages/forms/Maths/MathsForm";
import HomePage from "../pages/Home/Home";
import EnglishForm from "../pages/forms/English/EnglishForm";
import ScienceForm from "../pages/forms/Science/ScienceForm";
import { Reports } from "../pages/Reports";
import { Maths } from "../pages/Maths";
import { Science } from "../pages/Science";
import { English } from "../pages/English";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selection" element={<SelectionPage /> }/>
        <Route path="/MathsQuiz" element={<MathsForm /> }/>
        <Route path="/EnglishQuiz" element={<EnglishForm /> }/>
        <Route path="/ScienceQuiz" element={<ScienceForm /> }/>
        
        <Route path="/maths" element={<Maths />}/>
        <Route path="/science" element={<Science />}/>
        <Route path="/english" element={<English />}/>
        
        <Route path="/" element={<HomePage /> }/>
        <Route path="/Reports" element={<Reports /> }/>
      </Routes>
    </BrowserRouter>
  );
}
