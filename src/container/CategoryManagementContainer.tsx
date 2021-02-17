import React from 'react';
import { GET_CATEGORIES, POST_CREATE_CATEGORY } from "../graphQL/quries";
import { useMutation, useQuery } from "@apollo/client";
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { Loading, Error, CategoryTabs } from '../components';
import { RootState } from "../modules";
import { CrudCategoriesContainer } from "./belongings";
import {modifyCategories} from "../reducers/CategoryReducer";

type Props = {
}

const CategoryManagementContainer = ({  }: Props) => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state: RootState) => state.CategoryReducer)

    const [ currentIdx, setCurrentIdx ] = React.useState<number>(0);
    const [ createCategory ] = useMutation(POST_CREATE_CATEGORY, { awaitRefetchQueries: true });

    const { loading, error, refetch } = useQuery(GET_CATEGORIES,
        { onCompleted: response => dispatch(modifyCategories(response.categories)), fetchPolicy: 'network-only' });
    if (loading) return <Loading />
    else if (error) return <Error msg={error.message} />

    const CALL_CREATE_CATEGORY_API = async (title: string) => {
        if (!title || title.length < 1) return;
        else {
            Notiflix.Loading.Hourglass('카테고리 생성중...');
            await createCategory({ variables: { title } })
                .then((res) => {
                    if (res?.data.createCategory === 200) {
                        refetch()
                            .then(refetchResponse => {
                                if (refetchResponse)
                                    dispatch(modifyCategories(refetchResponse.data.categories));
                            });
                    }
                })
                .finally(() => Notiflix.Loading.Remove(300));
        }
    }

    const modifyTab = (modify: number) => {
        if (modify >= 0 && modify <= categories.length && currentIdx !== modify) setCurrentIdx(modify);
    }

    return (
        <React.Fragment>
            <CategoryTabs categories={categories} currentIdx={currentIdx} modifyTab={modifyTab} />
            <br />
            {
                currentIdx === 0 &&
                    <CrudCategoriesContainer create={CALL_CREATE_CATEGORY_API} />
            }
            {
                (currentIdx >= 1 && categories.length > 0) &&
                    <div>
                        CATEGORY DETAILS
                    </div>
            }

        </React.Fragment>
    )
}

export default CategoryManagementContainer;