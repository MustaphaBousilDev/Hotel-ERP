import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column('varchar', { unique: true })
  username: string;

  @Column('text')
  password: string;

  @Column('text')
  email: string;

  @CreateDateColumn({ name: 'createdate', nullable: true })
  createdate: Date;

  @UpdateDateColumn({ name: 'updateddate', nullable: true })
  updateddate: Date;

  @Column({ nullable: true })
  last_login?: Date;

  @Column('varchar', { nullable: true })
  hach_refresh_token: string;
}
