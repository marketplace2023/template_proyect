import { PaymentTransaction } from 'src/Modulo-pagos/payment-transaction/entities/payment-transaction.entity';
import { AccountInvoice } from 'src/Modulo-store/account-invoice/entities/account-invoice.entity';
import { AccountMove } from 'src/Modulo-store/account-move/entities/account-move.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
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

@Entity({ name: 'stock_picking_type' })
export class StockPickingType {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'sequence_id', type: 'int' })
  public sequence_id: number;

  @Column({ name: 'default_location_src_id', type: 'int' })
  public default_location_src_id: number;

  @Column({ name: 'default_location_dest_id', type: 'int' })
  public default_location_dest_id: number;

  @Column({ name: 'return_picking_type_id', type: 'int' })
  public return_picking_type_id: number;

  @Column({ name: 'warehouse_id', type: 'int' })
  public warehouse_id: number;

  @Column({ name: 'reservation_days_before', type: 'int' })
  public reservation_days_before: number;

  @Column({ name: 'reservation_days_before_priority', type: 'int' })
  public reservation_days_before_priority: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'sequence_code', type: 'varchar' })
  public sequence_code: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'reservation_method', type: 'varchar' })
  public reservation_method: string;

  @Column({ name: 'barcode', type: 'varchar' })
  public barcode: string;

  @Column({ name: 'create_backorder', type: 'varchar' })
  public create_backorder: string;

  @Column({ name: 'name', type: 'int' })
  public name: number;

  @Column({ name: 'show_entire_packs', type: 'int' })
  public show_entire_packs: number;

  @Column({ name: 'active', type: 'int' })
  public active: number;

  @Column({ name: 'use_create_lots', type: 'int' })
  public use_create_lots: number;

  @Column({ name: 'use_existing_lots', type: 'int' })
  public use_existing_lots: number;

  @Column({ name: 'print_label', type: 'int' })
  public print_label: number;

  @Column({ name: 'show_operations', type: 'int' })
  public show_operations: number;

  @Column({ name: 'show_reserved', type: 'int' })
  public show_reserved: number;

  @Column({ name: 'auto_show_reception_report', type: 'int' })
  public auto_show_reception_report: number;

  //--------------------------------------------------------------------
  @Column({ name: 'sale_type_id', type: 'int' })
  public sale_type_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.stockPickingTypes)
  @JoinColumn({ name: 'sale_type_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------

  //------------------tienda-----------------------
  //Uno a Mucho accountMove --  stockPicking
  @OneToMany(() => AccountMove, (accountMove) => accountMove.stockPickingTypes)
  public accountMoves: AccountMove;

  //Uno a Mucho stockPickingLine --  stockPickingTypes
  @OneToMany(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.stockPickingTypes,
  )
  public stockPickingLines: StockPickingLine;

  //Uno a Mucho accountInvoice --  stockPickingTypes
  @OneToMany(
    () => AccountInvoice,
    (accountInvoice) => accountInvoice.stockPickingTypes,
  )
  public accountInvoices: AccountInvoice;

  //Uno a Mucho paymentTransaction --  stockPickingTypes
  @OneToMany(
    () => PaymentTransaction,
    (paymentTransaction) => paymentTransaction.stockPickingTypes,
  )
  public paymentTransactions: PaymentTransaction;
  //-------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingType>) {
    Object.assign(this, data);
  }
}
