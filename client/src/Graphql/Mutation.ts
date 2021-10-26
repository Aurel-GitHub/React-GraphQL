import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
    ) {
      id
      firstname
      lastname
      email
      password
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $email: String!
    $oldPassword: String!
    $newPassword: String!
  ) {
    updatePassword(
      email: $email
      oldPassword: $oldPassword
      newPassword: $newPassword
    ) {
      message
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
