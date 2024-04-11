import { ResCompany } from 'src/Modulo-users/res-company/entities/res-company.entity';
import { ResCurrency } from 'src/Modulo-users/res-currency/entities/res-currency.entity';
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

@Entity({ name: 'res_currency_rate' })
export class ResCurrencyRate {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public readonly currency_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public readonly company_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public readonly create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public readonly write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public readonly name: string;

  @Column({ name: 'rate', type: 'decimal' })
  public readonly rate: number;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  //--------------------------------------------------------------
  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.currencyRates)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  //Muchos a Uno ResUsers
  @ManyToOne(() => ResCurrency, (currency) => currency.currencyRate)
  @JoinColumn({ name: 'currency_id' })
  public currency: ResCurrency;

  //Muchos a Uno ResUsers
  @ManyToOne(() => ResCompany, (company) => company.currencyRate)
  @JoinColumn({ name: 'company_id' })
  public company: ResCompany;
  //--------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResCurrencyRate>) {
    Object.assign(this, data);
  }
}
