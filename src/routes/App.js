import React from "react";
import { Routes, Route } from "react-router-dom";
//Routes
import { HomePage } from "./homePage";
import { NewPage } from "./newPage";
import { EditPage } from "./editPage";
import { NotFound } from './notFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


