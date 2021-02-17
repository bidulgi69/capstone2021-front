import { Category } from "../types";

const MODIFY_CATEGORY = 'modify/category' as const

type CategoryState = {
    categories: Category[],
}

type CategoryActions = ReturnType<typeof modifyCategories>;

const initialState: CategoryState = {
    categories: []
}

export const modifyCategories = (modified: Category[]) => ({
    type: MODIFY_CATEGORY,
    payload: modified
})

const CategoryReducer = (state: CategoryState = initialState, { type, payload }: CategoryActions) => {
    switch (type) {
        case MODIFY_CATEGORY:
            return {
                ...initialState,
                categories: [ ...payload ]
            }
        default:
            return {
                ...state
            }
    }
}

export default CategoryReducer;