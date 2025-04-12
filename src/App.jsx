import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ModulesPage,
  QuizPage,
  ResultsPage,
  NotFoundPage
} from './pages';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/asignaturas/:asignaturaId" element={<ModulesPage />} />
        <Route path="/quiz/:asignaturaId/:moduloId" element={<QuizPage />} />
        <Route path="/resultados/:asignaturaId/:moduloId" element={<ResultsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}