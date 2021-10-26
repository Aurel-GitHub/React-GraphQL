import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($firstname: String!, $lastname: String!, $email: String!, $password: String!) {
    createUser(firstname: $firstname, lastname: $lastname, email: $email, password: $password) {
      id
      firstname
      lastname
      email
      password
    }
  }
`;
