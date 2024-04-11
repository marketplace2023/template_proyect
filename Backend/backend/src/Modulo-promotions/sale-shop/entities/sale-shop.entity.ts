import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_shop' })
export class SaleShop {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'street', type: 'varchar' })
  public street: string;

  @Column({ name: 'city', type: 'varchar' })
  public city: string;

  @Column({ name: 'zip', type: 'int' })
  public zip: number;

  @Column({ name: 'country_id', type: 'int' })
  public country_id: number;

  @Column({ name: 'state_id', type: 'int' })
  public state_id: number;

  @Column({ name: 'phone', type: 'varchar' })
  public phone: string;

  @Column({ name: 'website', type: 'varchar' })
  public website: string;

  @Column({ name: 'email', type: 'varchar' })
  public email: string;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'state', type: 'int' })
  public state: number;

  @Column({ name: 'channel_id', type: 'int' })
  public channel_id: number;

  @Column({ name: 'is_active', type: 'tinyint' })
  public is_active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleShop>) {
    Object.assign(this, data);
  }
}
