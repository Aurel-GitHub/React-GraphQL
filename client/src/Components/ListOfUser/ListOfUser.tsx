import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_USERS } from "../../Graphql/Queries";
import { User } from "../../models/User";

export default function ListOfUser() {
  const { data } = useQuery(GET_ALL_USERS);
  if (data) console.warn("=== DATA LOADED ===", data);
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: User) => {
          return (
            <div 
            className="listOfUser"
            key={user.id}>
              {user.firstname} - {user.lastname}
            </div>
          );
        })}
    </div>
  );
}
