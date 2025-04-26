import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column()
  telephone: string;

  @Column()
  address: string;

  @Column()
  gender: string;

  @Column()
  role: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  emailVerified: boolean;

  @Column()
  passwordChangedAt: Date;

  @Column()
  resetPasswordToken: string;

  @Column()
  token_expiry: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
