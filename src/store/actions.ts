import { COMMENT_CREATE, COMMENT_DELETE } from "./types.ts";

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


