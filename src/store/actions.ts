import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_LOAD} from "./types.ts";
import { Dispatch } from "@reduxjs/toolkit";

export const commentCreate = (id: number, text: string) => {
    return {
        type: COMMENT_CREATE,
        data: { id, text }
    }
}

export const commentDelete = (id: number) => {
    return {
        type: COMMENT_DELETE,
        data: { id }
    }
}
/* export const commentsLoad = () => async (dispatch: Dispatch) => {
    try {
        const response = await fetch("https://mockapi.io/projects/67953174aad755a134eb74e3");
        const jsonData = await response.json();

        dispatch({
            type: COMMENT_LOAD,
            payload: jsonData,
        });
    } catch (error) {
        console.error("Ошибка при загрузке комментариев:", error);
    }
};
*/

