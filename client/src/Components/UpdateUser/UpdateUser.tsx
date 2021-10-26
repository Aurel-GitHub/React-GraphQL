import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../../Graphql/Mutation";
import { useMutation } from "@apollo/client";
import "./UpdateUser.css";

export default function UpdateUser() {
  const [email, setEmail] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const [updatePassword, {error}] = useMutation(UPDATE_PASSWORD);
    if (error) return <h1>{error}</h1>
  return (
    <div className="updateUser">
      <h2 className="formUpdateTitle">Modifier utilisateur</h2>
      <input
        className="updateUser"
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="updateUser"
        type="password"
        placeholder="Old password..."
        onChange={(e) => {
          setOldpassword(e.target.value);
        }}
      />
      <input
        className="updateUser"
        type="password"
        placeholder="New password..."
        onChange={(e) => {
          setNewpassword(e.target.value);
        }}
      />
      <button
        className="buttonUpdatePassword"
        onClick={() =>
          updatePassword({
            variables: {
              email: email,
              oldPassword: oldpassword,
              newPassword: newpassword,
            },
          })
        }
      >
        Update account
      </button>
    </div>
  );
}
