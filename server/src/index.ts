import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { User } from "./Entities/User";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "GraphQLCrud",
    username: "root",
    password: "root",
    logging: true,
    synchronize: false,
    entities: [User],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphiql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3003, () => {
    console.log("SERVER RUNNING");
  });
};

main().catch((err) => {
  console.log(err);
});
