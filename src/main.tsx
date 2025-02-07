import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { GetTrainers } from "./components/getTrainers/GetTrainers.tsx";
import { Header } from "./components/header/Header.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import Feedback from './components/feedback/Feedback.tsx';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<GetTrainers />} />
                    <Route path="/Comments" element={<Feedback />} />
                </Routes>
            </Router>
        </Provider>
    </StrictMode>
);
