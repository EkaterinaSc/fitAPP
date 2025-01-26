import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {GetTrainers} from "./components/getTrainers/GetTrainers.tsx";
import { Header } from "./components/header/Header.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header />
        <GetTrainers/>
    </StrictMode>,
)