import {gql} from "@apollo/client";

export const GET_DATA = gql`
    query allCities {
        allCities {
            id
            name
            population
        }
    }
`;

export const GET_USERS = gql`
    query allUsers {
        allUsers {
            id
            email
            name
        }
    }  
`;