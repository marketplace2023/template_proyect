import { Payment } from 'src/Modulo-pagos/payment/entities/payment.entity';
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

@Entity({ name: 'delivery_order' })
export class DeliveryOrder {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'date_order', type: 'date' })
  public date_order: Date;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'picking_ids', type: 'int' })
  public picking_ids: number;

  @Column({ name: 'carrier_id', type: 'int' })
  public carrier_id: number;

  @Column({ name: 'tracking_number', type: 'varchar' })
  public tracking_number: string;

  @Column({ name: 'amount_total', type: 'float' })
  public amount_total: number;

  @Column({ name: 'amount_tax', type: 'float' })
  public amount_tax: number;

  @Column({ name: 'amount_untaxed', type: 'float' })
  public amount_untaxed: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  //Mucho a Uno deliveryOrder - payment
  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @ManyToOne(() => Payment, (payment) => payment.deliveryOrders)
  @JoinColumn({ name: 'payment_id' })
  public payment: Payment;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryOrder>) {
    Object.assign(this, data);
  }
}
