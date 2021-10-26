import { GraphQLList } from "graphql";
import { UserType } from "../TypeDefs/User";
import { User } from '../../Entities/User';
import { IUser } from "../../Interfaces/IUser";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve(): Promise<IUser[]>{
    return User.find();
  },
};
