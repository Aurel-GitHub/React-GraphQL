import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../Graphql/Queries";
import { DELETE_USER } from "../../Graphql/Mutation";
import "./ListOfUser.css";

export default function ListOfUser() {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser, {error}] = useMutation(DELETE_USER);
  if (data) console.warn("=== DATA LOADED ===", data);
  if (error) return <h1>{error}</h1>
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div className="listOfUser" key={user.id}>
              {user.firstname} - {user.lastname}
              <button
                className="btnDelete"
                onClick={() => deleteUser({ variables: { id: user.id } })}
              >
                X
              </button>
            </div>
          );
        })}
    </div>
  );
}
