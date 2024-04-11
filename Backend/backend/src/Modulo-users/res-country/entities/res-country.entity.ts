import { ResCountryState } from 'src/Modulo-users/res-country-state/entities/res-country-state.entity';
import { ResCurrency } from 'src/Modulo-users/res-currency/entities/res-currency.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_country' })
export class ResCountry {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'phone_code', type: 'varchar' })
  public phone_code: string;

  @Column({ name: 'capital', type: 'varchar' })
  public capital: string;

  @Column({ name: 'population', type: 'int' })
  public population: number;

  @Column({ name: 'surface_area', type: 'float' })
  public surface_area: number;

  @Column({ name: 'latitude', type: 'float' })
  public latitude: number;

  @Column({ name: 'longitude', type: 'float' })
  public longitude: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  //----------------------------------------------------------
  //Uno a Uno ResUsers
  @OneToOne(() => ResUsers, (user) => user.country)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  //Muchos a Uno ResCurrency
  @ManyToOne(() => ResCurrency, (currency) => currency.country)
  @JoinColumn({ name: 'currency_id' })
  public currency: ResCurrency;

  //Uno a Mucho RescountryState
  @OneToMany(() => ResCountryState, (countryState) => countryState.country)
  public countryStates: ResCountryState;

  //Uno a Mucho ResPartner
  @OneToMany(() => ResPartner, (partner) => partner.country)
  public partner: ResPartner;
  //----------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResCountry>) {
    Object.assign(this, data);
  }
}
