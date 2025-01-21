import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {GetTrainers} from "./components/GetTrainers.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <h1>Welcome to FitApp</h1>
        <GetTrainers/>
    </StrictMode>,
)