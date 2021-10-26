import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import { useState } from "react";
import { User } from './models/User';

function App() {
  const [firstname, setFirstname] = useState<String>('');
  const [lastname, setLastname] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const client = new ApolloClient({
    uri: "http://localhost:3003/graphql",
    cache: new InMemoryCache(),
  });


  return (
    <ApolloProvider client={client}>
      <div className="createUser">
        <h2 className="formTitle">Formulaire d'inscription</h2>
        <input className="inputCreateAccount"type="text" placeholder="firstname" onChange={(e) => {setFirstname(e.target.value)}}/>
        <input className="inputCreateAccount"type="text" placeholder="lastname" onChange={(e) => {setLastname(e.target.value)}}/>
        <input className="inputCreateAccount"type="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
        <input className="inputCreateAccount"type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <button className="buttonCreateAccount" >Create account</button>
      </div>
    </ApolloProvider>
  );
}

export default App;
