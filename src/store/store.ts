import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "./commentsReducer.ts";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
    },
});

export type RootState = ReturnType<typeof commentsReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();