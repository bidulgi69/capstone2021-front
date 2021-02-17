import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query allUsers {
        allUsers {
            id
            email
            name
        }
    }  
`;

export const GET_USER_DETAIL = gql`
    query user {
        user {
            id
            email
            name
            authority
        }
    }
`

export const GET_CATEGORIES = gql`
    query categories {
        categories {
            id
            name
        }
    }
`

export const POST_LOGIN = gql`
    query login($id: String!, $password: String!) {
        login(id: $id, password: $password) {
            status
            token
        }
    }
`

export const POST_SIGN = gql`
    mutation sign($id: String!, $password: String!, $name: String!) {
        sign(id: $id, password: $password, name: $name)
    }
`

export const POST_CREATE_CATEGORY = gql`
    mutation createCategory($title: String!) {
        createCategory(title: $title)
    }
`

export const PUT_UPDATE_CATEGORY = gql`
    mutation updateCategory($id: Int!, $title: String!) {
        updateCategory(id: $id, title: $title)
    }   
`

export const DELETE_REMOVE_CATEGORY = gql`
    mutation deleteCategory($id: Int!) {
        deleteCategory(id: $id)
    }   
`