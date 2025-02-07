import RenderComment from "./RenderReview.tsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {commentCreate } from "../../store/actions.ts";
import { IComment } from "../../store/commentsReducer.ts";
import { RootState } from '../../store/store.ts';
import { useAppDispatch } from "../../store/store.ts";

const Feedback = () => {
    const [comment, setComment] = useState("");
    const dispatch = useAppDispatch();

    const comments: IComment[] = useSelector((state: RootState) => state.comments);

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
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
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

            {comments.length > 0 &&
                comments.map((el: IComment) => (
                    <div key={el.id}>
                        <p>{el.text}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Feedback;