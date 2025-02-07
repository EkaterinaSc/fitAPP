import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_LOAD} from "./types.ts";

export interface IComment {
    id: number;
    text: string;
}

const initialState: { comments: IComment[] } = {
    comments: [],
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            };

        case COMMENT_DELETE:
            return (() => {
                const { id } = action;
                const { comments } = state;
                const itemIndex = comments.findIndex(res  => res.id === id);

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ];

                return {
                    ...state,
                    comments: nextComments
                }
            })();

        /*case COMMENT_LOAD:
            const commentsNew = action.data.map((res: { text: any; id: any; }) => {
                return {
                    text: res.text,
                    id: res.id,
                }
            })

            return {
                ...state,
                comments: commentsNew
            }
*/
        default:
            return state;

    }
}