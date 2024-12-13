import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import {DialogProvider} from "@/contexts/dialog";
import {HomePage} from "@/pages/home.tsx";
import {InputPage} from "@/pages/input.tsx";
import {SolverPage} from "@/pages/solver.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DialogProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={"/sudoku"} element={<InputPage />} />
          <Route path={"/sudoku/:sudokuId"} element={<SolverPage />} />
        </Routes>
      </BrowserRouter>
    </DialogProvider>
  </StrictMode>,
)
