import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {GetTrainers} from "./components/getTrainers/GetTrainers.tsx";
import { Header } from "./components/header/Header.tsx";
import {store} from "./store/store.ts";
import { Provider } from "react-redux";
import  Feedback from './components/feedback/Feedback.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Header />
            <GetTrainers/>
            <Feedback />
        </Provider>
    </StrictMode>,
)