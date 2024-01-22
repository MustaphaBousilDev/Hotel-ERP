import { AbstractEntity } from '@app/shared';
import { Column, Entity } from 'typeorm';

@Entity()
export class Reservation extends AbstractEntity<Reservation> {
  @Column()
  timestamp: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: string;

  @Column()
  invoiceId: string;
}
