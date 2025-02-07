import { COMMENT_CREATE, COMMENT_DELETE } from "./types.ts";

export interface IComment {
    id: number;
    text: string;
}

const initialState: { comments: IComment[] } = {
    comments: [],
}

export const commentsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            };

        case COMMENT_DELETE:
            const visComments = state.comments.filter(comment => comment.id !== action.data.id);
            return {
                ...state,
                comments: visComments // Просто фильтруем
            };

        default:
            return state;

    }
}