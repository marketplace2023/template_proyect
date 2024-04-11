import { ResCompany } from 'src/Modulo-users/res-company/entities/res-company.entity';
import { ResCountry } from 'src/Modulo-users/res-country/entities/res-country.entity';
import { ResCurrencyRate } from 'src/Modulo-users/res-currency-rate/entities/res-currency-rate.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_currency' })
export class ResCurrency {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 225 })
  public readonly name: string;

  @Column({ name: 'symbol', type: 'varchar', length: 225 })
  public readonly symbol: string;

  @Column({ name: 'code', type: 'varchar', length: 225 })
  public readonly code: string;

  @Column({ name: 'rate', type: 'float' })
  public readonly rate: number;

  @Column({ name: 'rounding', type: 'int' })
  public readonly rounding: number;

  @Column({ name: 'decimals', type: 'int' })
  public readonly decimals: number;

  @Column({ name: 'active', type: 'tinyint' })
  public readonly active: boolean;

  //------------------------------------------------------
  //Uno a Mucho Rescurrency
  @OneToMany(() => ResCountry, (country) => country.currency)
  public country: ResCountry;

  //Uno a Mucho RescurrencyRate
  @OneToMany(() => ResCurrencyRate, (currencyRate) => currencyRate.currency)
  public currencyRate: ResCurrencyRate;

  //Uno a Mucho ResCompany
  @OneToMany(() => ResCompany, (company) => company.currency)
  public company: ResCompany;

  //------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResCurrency>) {
    Object.assign(this, data);
  }
}
