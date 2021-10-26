import React from "react";
import "./App.css";
import CreateUser from "./Components/CreateUser/CreateUser";
import ListOfUser from "./Components/ListOfUser/ListOfUser";

export default function App() {
  return (
    <div className="app">
      <CreateUser />
      <ListOfUser />
    </div>
  );
}
