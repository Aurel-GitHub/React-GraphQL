import React, { useState } from "react";
import { CREATE_USER } from "../../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import "./CreateUser.css";

export default function CreateUser() {
  const [firstname, setFirstname] = useState<String>("");
  const [lastname, setLastname] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const [createUser, {error}] = useMutation(CREATE_USER);

  return (
    <div>
      <div className="createUser">
        <h2 className="formTitle">Formulaire d'inscription</h2>
        <input
          className="inputCreateAccount"
          type="text"
          placeholder="firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <input
          className="inputCreateAccount"
          type="text"
          placeholder="lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <input
          className="inputCreateAccount"
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="inputCreateAccount"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
              },
            });
          }}
          className="buttonCreateAccount"
        >
          Create account
        </button>
      </div>
    </div>
  );
}
