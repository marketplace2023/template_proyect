import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { AccountMove } from 'src/Modulo-store/account-move/entities/account-move.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_invoice' })
export class AccountInvoice {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'number', type: 'varchar' })
  public number: string;

  @Column({ name: 'date_invoice', type: 'date' })
  public date_invoice: Date;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'invoice_line_ids', type: 'int' })
  public invoice_line_ids: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'move_id', type: 'int' })
  public move_id: number;

  @Column({ name: 'payment_term_id', type: 'int' })
  public payment_term_id: number;

  @Column({ name: 'journal_id', type: 'int' })
  public journal_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'amount_total', type: 'int' })
  public amount_total: number;

  @Column({ name: 'residual', type: 'int' })
  public residual: number;

  //--------------------------------------------------------------------
  @Column({ name: 'account_invoice_id', type: 'int' })
  public account_invoice_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.accountInvoices)
  @JoinColumn({ name: 'account_invoice_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------

  //--------------------Relaciones de Tienda-----------------------------
  //mucho a uno con res partner
  @ManyToOne(() => ResPartner, (resPartner) => resPartner.accountInvoices)
  @JoinColumn({ name: 'partner_id' })
  public resPartners: ResPartner;

  //mucho a uno con saleOrder
  @Column({ name: 'sale_id', type: 'int' })
  public sale_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.accountInvoices)
  @JoinColumn({ name: 'sale_id' })
  public saleOrders: SaleOrder;

  //mucho a uno con stockPicking
  @Column({ name: 'stockP_id', type: 'int' })
  public stockP_id: number;

  @ManyToOne(() => StockPicking, (stockPicking) => stockPicking.accountInvoices)
  @JoinColumn({ name: 'stockP_id' })
  public stockPickings: StockPicking;

  //mucho a uno con OrderLine
  @Column({ name: 'orderL_id', type: 'int' })
  public orderL_id: number;

  @ManyToOne(() => OrderLine, (orderLine) => orderLine.accountInvoices)
  @JoinColumn({ name: 'orderL_id' })
  public orderLines: OrderLine;
  //--------------------------------------------------------------------------------------
  //uno a uno con account move
  @OneToOne(() => AccountMove, (accountMove) => accountMove.accountInvoices)
  @JoinColumn({ name: 'move_id' })
  public accountMoves: AccountMove;

  //Muchos a Muchos productTemplate
  @ManyToMany(() => ProductsTemplate, { cascade: true })
  @JoinTable({
    name: 'account_invoice_product_template',
    joinColumn: { name: 'account_invoice_id' },
    inverseJoinColumn: { name: 'product_template_id' },
  })
  public productsTemplate: ProductsTemplate[];

  @Column({ name: 'stockpline_id', type: 'int' })
  public stockpline_id: number;

  @ManyToOne(
    () => StockPickingType,
    (stockPickingType) => stockPickingType.accountInvoices,
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

  constructor(data: Partial<AccountInvoice>) {
    Object.assign(this, data);
  }
}
