import styles from './feedback.module.scss'
import {useDispatch } from 'react-redux';
import { commentDelete } from '../../store/actions.ts';
import {IComment} from "../../store/commentsReducer.ts";

function RenderComment({ data }: any) {

    const dispatch = useDispatch();

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const id = Number(e.currentTarget.getAttribute("data-id"));
        console.log(id);
        dispatch(commentDelete(id));
        console.log('comments:', data);
    };

    const mappedComments = data?.comments.map((comment: IComment) => (
        <div className={styles.comm} key={comment.id}>
            <button data-id={comment.id} onClick={(e) => handleDelete(e)}>Удалить</button>
            <p>{comment.text}</p>
        </div>
        )
    )
       return (
           <>
               {!mappedComments && (
                   <div>
                       <p>No comments yet</p>
                   </div>
               )}
               {mappedComments && (mappedComments)}
           </>
       )
}

export default RenderComment