import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { commentDelete } from '../../store/actions.ts';
import {IComment} from "../../store/commentsReducer.ts";
import {RootState} from "../../store/store.ts";

function RenderComment({ data }: { data: IComment }) {

    /*const comments = useSelector((state: RootState) => state.comments || []);
    const [commentText, setCommentText] = useState('');
    const { text, id } = comments;
    */
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(commentDelete(data.id));
    }

    /* useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

     */

    if (data) {
        return (
            <div key={data.id}>
                <button onClick={handleDelete}>Удалить</button>
                <p>{data.text}</p>
            </div>
        )
    }


}

export default RenderComment;