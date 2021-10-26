import { UserType } from "../TypeDefs/User";
import { GraphQLString } from 'graphql';
import { User } from '../../Entities/User';


export const CREATE_USER = {
  type: UserType,
  args: {
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(parent: any, args: any) {
    const { name, firstname, lastname, email, password } = args;
    await User.insert(args);
    return args;
  },
};
