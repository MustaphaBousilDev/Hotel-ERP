import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/shared';
import { Field, ObjectType } from '@nestjs/graphql';
import { Organization } from './organization.entity';
import { Departement } from './departement.entity';
import { Hotel } from './hotel.entity';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Field(() => [Organization], { nullable: true })
  @OneToMany(() => Organization, (organization) => organization.user, {
    cascade: true,
    eager: true,
  })
  organization: Organization[];

  @Field(() => [Departement], { nullable: true })
  @OneToMany(() => Departement, (departement) => departement.user, {
    cascade: true,
    eager: true,
  })
  departement: Departement[];

  @Field(() => [Hotel], { nullable: true })
  @OneToMany(() => Hotel, (hotel) => hotel.user, {
    cascade: true,
    eager: true,
  })
  hotel: Hotel[];
}
