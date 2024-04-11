import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
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

@Entity({ name: 'payment_transaction' })
export class PaymentTransaction {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'provider_id', type: 'int' })
  public provider_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'token_id', type: 'int' })
  public token_id: number;

  @Column({ name: 'source_transaction_id', type: 'int' })
  public source_transaction_id: number;

  @Column({ name: 'callback_model_id', type: 'int' })
  public callback_model_id: number;

  @Column({ name: 'callback_res_id', type: 'int' })
  public callback_res_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'partner_state_id', type: 'int' })
  public partner_state_id: number;

  @Column({ name: 'partner_country_id', type: 'int' })
  public partner_country_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'reference', type: 'varchar' })
  public reference: string;

  @Column({ name: 'provider_reference', type: 'varchar' })
  public provider_reference: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'operation', type: 'varchar' })
  public operation: string;

  @Column({ name: 'landing_route', type: 'varchar' })
  public landing_route: string;

  @Column({ name: 'callback_method', type: 'varchar' })
  public callback_method: string;

  @Column({ name: 'callback_hash', type: 'varchar' })
  public callback_hash: string;

  @Column({ name: 'partner_name', type: 'varchar' })
  public partner_name: string;

  @Column({ name: 'partner_lang', type: 'varchar' })
  public partner_lang: string;

  @Column({ name: 'partner_email', type: 'varchar' })
  public partner_email: string;

  @Column({ name: 'partner_address', type: 'varchar' })
  public partner_address: string;

  @Column({ name: 'partner_zip', type: 'varchar' })
  public partner_zip: string;

  @Column({ name: 'partner_city', type: 'varchar' })
  public partner_city: string;

  @Column({ name: 'partner_phone', type: 'varchar' })
  public partner_phone: string;

  @Column({ name: 'state_message', type: 'varchar' })
  public state_message: string;

  @Column({ name: 'amount', type: 'decimal' })
  public amount: number;

  @Column({ name: 'fees', type: 'decimal' })
  public fees: number;

  @Column({ name: 'is_post_processed', type: 'tinyint' })
  public is_post_processed: boolean;

  @Column({ name: 'tokenize', type: 'tinyint' })
  public tokenize: boolean;

  @Column({ name: 'callback_is_done', type: 'tinyint' })
  public callback_is_done: boolean;

  @Column({ name: 'last_state_change', type: 'date' })
  public last_state_change: Date;

  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @Column({ name: 'is_donation', type: 'tinyint' })
  public is_donation: boolean;

  //--------------------------------------------------------------------
  @Column({ name: 'paymentTransaction_id', type: 'int' })
  public paymentTransaction_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.paymentTransactions)
  @JoinColumn({ name: 'paymentTransaction_id' })
  public saleOrder: SaleOrder;

  @Column({ name: 'stockpline_id', type: 'int' })
  public stockpline_id: number;

  @ManyToOne(
    () => StockPickingType,
    (stockPickingType) => stockPickingType.paymentTransactions,
  )
  @JoinColumn({ name: 'stockpline_id' })
  public stockPickingTypes: StockPickingType;

  //---------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentTransaction>) {
    Object.assign(this, data);
  }
}
