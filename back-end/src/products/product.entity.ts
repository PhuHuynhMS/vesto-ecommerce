import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('simple-array', { nullable: true, array: true })
  images: string[];

  @Column('text')
  name: string;

  @Column('float')
  price: number;

  @Column('int')
  stockQuantity: number;

  @Column('text', { nullable: true })
  slug: string;

  @Column('simple-array', { nullable: true, array: true })
  categories: string[];

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
