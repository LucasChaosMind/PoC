import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'unium_weight' })
export class UniumWeight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar',  length: 17 })
  mac: string;

  @Column()
  age: number;

  @Column()
  pps_id: number;

  @Column()
  w: number;
  
  @Column({ type: 'varchar', length: 19 })
  rec_at: string;

  @Column({ type: 'timestamp' })
  rec_at_timestamp_wtz: Date;
 
  @Column({type: 'varchar', length: 40, unique: true })
  hash: string;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  meuTimestamp: Date;
}