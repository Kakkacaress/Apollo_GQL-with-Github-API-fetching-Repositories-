import { gql } from "apollo-boost";

export const LOGIN_USER = gql`
  mutation onLogin(
      $username: String!
      $password: String!) {
    loginUser(data: {username: $username })
        user(login: "$username") {
          repositories(last:50){
            nodes {
              name
            }
          }
        }
  }
`;

export const SIGNUP_USER = gql`
mutation onSignUp(
    $email: String!
    $phone: String!
    $username: String!
    $password: String!
  ){createUser(
    data: {
      email:$email
      phone: $phone
      username:$username
      password: $password
    })}
`;

export const GET_USER_REPO = gql`
query MyQuery ($username: String!) {
  user(login: "$username") {
    repositories(last:50){
      nodes {
        name
      }
    }
  }
}

` 
