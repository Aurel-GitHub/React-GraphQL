import { UserType } from "../TypeDefs/User";
import { GraphQLID, GraphQLString } from "graphql";
import { User } from "../../Entities/User";
import { MessageType } from "../TypeDefs/Messages";
export const CREATE_USER = {
  type: UserType,
  args: {
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { firstname, lastname, email, password } = args;
    await User.insert(args);
    return args;
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    email: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { email, oldPassword, newPassword } = args;
    const user = await User.findOne({ email: email });
    if (!user) {throw new Error("EMAIL DOESNT EXIST");}
    const userPassword = user?.password;
    if (oldPassword === userPassword) {
      await User.update({ email: email }, { password: newPassword });
      return { successful: true, message: "PASSWORD UPDATED" };
    } else {
      throw new Error("Passwords do not match !");
    }
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await User.delete(id);
    return { successful: true, message: "DELETE WORKED" };
  },
};
