import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_price_rule' })
export class DeliveryPriceRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'carrier_id', type: 'int' })
  public carrier_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'variable', type: 'varchar' })
  public variable: string;

  @Column({ name: 'operator', type: 'varchar' })
  public operator: string;

  @Column({ name: 'variable_factor', type: 'varchar' })
  public variable_factor: string;

  @Column({ name: 'list_base_price', type: 'decimal' })
  public list_base_price: number;

  @Column({ name: 'list_price', type: 'decimal' })
  public list_price: number;

  @Column({ name: 'max_value', type: 'int' })
  public max_value: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryPriceRule>) {
    Object.assign(this, data);
  }
}
