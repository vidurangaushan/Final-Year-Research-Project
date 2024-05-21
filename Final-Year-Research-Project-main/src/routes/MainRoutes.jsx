import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SelectionPage_KQ from "../pages/Selection/SelectionPage_KQ";
import MathsForm from "../pages/forms/Maths/MathsForm";
import HomePage from "../pages/Home/Home";
import EnglishForm from "../pages/forms/English/EnglishForm";
import ScienceForm from "../pages/forms/Science/ScienceForm";
import { Reports } from "../pages/Reports";
import { Maths } from "../pages/Maths";
import { Science } from "../pages/Science";
import { English } from "../pages/English";
import { StudentReport } from "../pages/Assesment/QuizReport.jsx";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Quizselection" element={<SelectionPage_KQ /> }/>
        <Route path="/MathsQuiz" element={<MathsForm /> }/>
        <Route path="/EnglishQuiz" element={<EnglishForm /> }/>
        <Route path="/ScienceQuiz" element={<ScienceForm /> }/>
        
        <Route path="/maths" element={<Maths />}/>
        <Route path="/science" element={<Science />}/>
        <Route path="/english" element={<English />}/>
        
        <Route path="/" element={<HomePage /> }/>
        <Route path="/quizprofile" element={<StudentReport /> }/>
        <Route path="/QuizReports" element={<Reports /> }/>
      </Routes>
    </BrowserRouter>
  );
}
