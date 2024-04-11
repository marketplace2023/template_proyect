import { ResCountry } from 'src/Modulo-users/res-country/entities/res-country.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_country_state' })
export class ResCountryState {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 225 })
  public readonly name: string;

  @Column({ name: 'code', type: 'varchar', length: 225 })
  public readonly code: string;

  @Column({ name: 'country_id', type: 'int' })
  public readonly country_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;
  //--------------------------------------------------------
  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.countryStates)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  //Muchos a Uno ResCurrency
  @ManyToOne(() => ResCountry, (country) => country.countryStates)
  @JoinColumn({ name: 'country_id' })
  public country: ResCountry;
  //--------------------------------------------------------
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResCountryState>) {
    Object.assign(this, data);
  }
}
