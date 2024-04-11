import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { SaleCommission } from 'src/Modulo-promotions/sale-commission/entities/sale-commission.entity';
import { SaleCoupon } from 'src/Modulo-promotions/sale-coupon/entities/sale-coupon.entity';
import { SaleRating } from 'src/Modulo-promotions/sale-rating/entities/sale-rating.entity';
import { SaleWish } from 'src/Modulo-promotions/sale-wish/entities/sale-wish.entity';
import { AccountInvoice } from 'src/Modulo-store/account-invoice/entities/account-invoice.entity';
import { AccountMove } from 'src/Modulo-store/account-move/entities/account-move.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
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

@Entity({ name: 'stock_picking' })
export class StockPicking {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'backorder_id', type: 'int' })
  public backorder_id: number;

  @Column({ name: 'group_id', type: 'int' })
  public group_id: number;

  @Column({ name: 'location_id', type: 'int' })
  public location_id: number;

  @Column({ name: 'location_dest_id', type: 'int' })
  public location_dest_id: number;

  @Column({ name: 'picking_type_id', type: 'int' })
  public picking_type_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'owner_id', type: 'int' })
  public owner_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'origin', type: 'varchar' })
  public origin: string;

  @Column({ name: 'move_type', type: 'varchar' })
  public move_type: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'priority', type: 'varchar' })
  public priority: string;

  @Column({ name: 'note', type: 'varchar' })
  public note: string;

  @Column({ name: 'has_deadline_issue', type: 'tinyint' })
  public has_deadline_issue: boolean;

  @Column({ name: 'printed', type: 'tinyint' })
  public printed: boolean;

  @Column({ name: 'is_locked', type: 'tinyint' })
  public is_locked: boolean;

  @Column({ name: 'immediate_transfer', type: 'tinyint' })
  public immediate_transfer: boolean;

  @Column({ name: 'scheduled_date', type: 'date' })
  public scheduled_date: Date;

  @Column({ name: 'date_deadline', type: 'date' })
  public date_deadline: Date;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'date_done', type: 'date' })
  public date_done: Date;

  //--------------------------------------------------------------------
  @Column({ name: 'sale_id', type: 'int' })
  public sale_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.stockPickings)
  @JoinColumn({ name: 'sale_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------
  //-----------------------Relaciones de tienda ---------------------------
  //Uno a Mucho res.partner - stockPicking
  @OneToMany(() => ResPartner, (resPartner) => resPartner.stockPicking)
  public resPartners: ResPartner;
  //-----------------------------------------------------------------------

  @Column({ name: 'pos_order_id', type: 'int' })
  public pos_order_id: number;

  @Column({ name: 'website_id', type: 'int' })
  public website_id: number;

  @Column({ name: 'stock_picking_id', type: 'int' })
  public stock_picking_id: number;

  //Uno a Uno orderLine
  @OneToOne(() => OrderLine, (orderLine) => orderLine.stockPickings)
  @JoinColumn({ name: 'stock_picking_id' })
  public orderLine: OrderLine;

  //Uno a Mucho accountInvoice --  stockPicking
  @OneToMany(
    () => AccountInvoice,
    (accountInvoice) => accountInvoice.stockPickings,
  )
  public accountInvoices: AccountInvoice;

  //------------------tienda-----------------------
  //Uno a Mucho accountMove --  stockPicking
  @OneToMany(() => AccountMove, (accountMove) => accountMove.stockPickings)
  public accountMoves: AccountMove;

  //Uno a Mucho sale.commission --  stockPicking
  @OneToMany(
    () => SaleCommission,
    (saleCommission) => saleCommission.stockPickings,
  )
  public saleCommissions: SaleCommission;

  //Uno a Mucho sale.coupon --  stockPickingTypes
  @OneToMany(() => SaleCoupon, (saleCoupon) => saleCoupon.stockPickings)
  public saleCoupons: SaleCoupon;

  //Uno a Mucho sale.rating --  stockPickings
  @OneToMany(() => SaleRating, (saleRating) => saleRating.stockPickings)
  public saleRatings: SaleRating;

  //Uno a Mucho sale.wish --  stockPickingTypes
  @OneToMany(() => SaleWish, (saleWish) => saleWish.stockPickings)
  public saleWishs: SaleWish;
  //-------------------------------------------------
  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPicking>) {
    Object.assign(this, data);
  }
}
