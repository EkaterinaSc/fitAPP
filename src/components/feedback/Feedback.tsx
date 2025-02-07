import RenderComment from "./RenderReview.tsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {commentCreate } from "../../store/actions.ts";
import { RootState } from '../../store/store.ts';
import { useAppDispatch } from "../../store/store.ts";
import styles from './feedback.module.scss'

const getComments = (state: RootState) => state.comments;

const Feedback = () => {
    const [comment, setComment] = useState("");
    const dispatch = useAppDispatch();
    const comments = useSelector(getComments);

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            const id = Date.now();
            dispatch(commentCreate(id, comment));
            setComment("");
            console.log('comments:', comments);
        }
    };

    return (
        <div className={styles.cardComments}>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.commentsItemCreate}>
                <label htmlFor="textHere">Введите комментарий</label>
                <input
                    type="text"
                    name="textHere"
                    value={comment}
                    onChange={handleTextInput}
                />
                <input type="submit" hidden />
            </form>

            <RenderComment data={comments} />
        </div>
    );
};

export default Feedback;