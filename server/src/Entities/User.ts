import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  firstname!: string;
  @Column()
  lastname!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;
}
