import { PaymentTransaction } from 'src/Modulo-pagos/payment-transaction/entities/payment-transaction.entity';
import { ProductProduct } from 'src/Modulo-products/product-product/entities/product-product.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { ProductsPricelist } from 'src/Modulo-products/products-pricelist/entities/products-pricelist.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { AccountInvoice } from 'src/Modulo-store/account-invoice/entities/account-invoice.entity';
import { AccountMove } from 'src/Modulo-store/account-move/entities/account-move.entity';
import { SaleOrderLine } from 'src/Modulo-store/sale-order-line/entities/sale-order-line.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { SellerRating } from 'src/Modulo-valoracion-seller/seller-ratings/entities/seller-ratings.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_order' })
export class SaleOrder {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'campaign_id', type: 'int' })
  public campaign_id: number;

  @Column({ name: 'source_id', type: 'int' })
  public source_id: number;

  @Column({ name: 'medium_id', type: 'int' })
  public medium_id: number;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'partner_invoice_id', type: 'int' })
  public partner_invoice_id: number;

  @Column({ name: 'partner_shipping_id', type: 'int' })
  public partner_shipping_id: number;

  @Column({ name: 'fiscal_position_id', type: 'int' })
  public fiscal_position_id: number;

  @Column({ name: 'payment_term_id', type: 'int' })
  public payment_term_id: number;

  @Column({ name: 'pricelist_id', type: 'int' })
  public pricelist_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'team_id', type: 'int' })
  public team_id: number;

  @Column({ name: 'analytic_account_id', type: 'int' })
  public analytic_account_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'access_token', type: 'varchar' })
  public access_token: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'client_order_ref', type: 'varchar' })
  public client_order_ref: string;

  @Column({ name: 'origin', type: 'varchar' })
  public origin: string;

  @Column({ name: 'reference', type: 'varchar' })
  public reference: string;

  @Column({ name: 'signed_by', type: 'varchar' })
  public signed_by: string;

  @Column({ name: 'invoice_status', type: 'varchar' })
  public invoice_status: string;

  @Column({ name: 'validity_date', type: 'varchar' })
  public validity_date: string;

  @Column({ name: 'note', type: 'varchar' })
  public note: string;

  @Column({ name: 'currency_rate', type: 'int' })
  public currency_rate: number;

  @Column({ name: 'amount_untaxed', type: 'int' })
  public amount_untaxed: number;

  @Column({ name: 'amount_tax', type: 'int' })
  public amount_tax: number;

  @Column({ name: 'amount_total', type: 'int' })
  public amount_total: number;

  @Column({ name: 'require_signature', type: 'tinyint' })
  public require_signature: boolean;

  @Column({ name: 'require_payment', type: 'tinyint' })
  public require_payment: boolean;

  @Column({ name: 'commitment_date', type: 'date' })
  public commitment_date: Date;

  @Column({ name: 'date_order', type: 'date' })
  public date_order: Date;

  @Column({ name: 'signed_on', type: 'date' })
  public signed_on: Date;

  @Column({ name: 'sale_order_template_id', type: 'date' })
  public sale_order_template_id: Date;

  @Column({ name: 'opportunity_id', type: 'int' })
  public opportunity_id: number;

  @Column({ name: 'incoterm', type: 'int' })
  public incoterm: number;

  @Column({ name: 'warehouse_id', type: 'int' })
  public warehouse_id: number;

  @Column({ name: 'procurement_group_id', type: 'int' })
  public procurement_group_id: number;

  @Column({ name: 'incoterm_location', type: 'varchar' })
  public incoterm_location: string;

  @Column({ name: 'picking_policy', type: 'varchar' })
  public picking_policy: string;

  @Column({ name: 'delivery_status', type: 'varchar' })
  public delivery_status: string;

  @Column({ name: 'effective_date', type: 'int' })
  public effective_date: number;

  @Column({ name: 'amount_unpaid', type: 'int' })
  public amount_unpaid: number;

  @Column({ name: 'website_id', type: 'int' })
  public website_id: number;

  @Column({ name: 'shop_warning', type: 'varchar' })
  public shop_warning: string;

  @Column({ name: 'cart_recovery_email_sent', type: 'tinyint' })
  public cart_recovery_email_sent: boolean;
  //----------------------------------------------------------------------------------

  @OneToMany(() => SellerRating, (sellerRating) => sellerRating.saleOrders)
  public sellerRatings: SellerRating;

  //Uno a Mucho resPartner - saleOrder
  @OneToMany(() => ResPartner, (resPartner) => resPartner.saleOrder)
  public resPartners: ResPartner;

  //Uno a Mucho productTemplate - saleOrder
  @OneToMany(
    () => ProductsTemplate,
    (productTemplate) => productTemplate.saleOrder,
  )
  public productTemplates: ProductsTemplate;

  //Uno a Mucho saleOrderLine - saleOrder
  @OneToMany(() => SaleOrderLine, (saleOrderLine) => saleOrderLine.saleOrder)
  public saleOrderLines: SaleOrderLine;

  //Uno a Mucho stockPicking - saleOrder
  @OneToMany(() => StockPicking, (stockPicking) => stockPicking.saleOrder)
  public stockPickings: StockPicking;

  //Uno a Mucho stockPickingType - saleOrder
  @OneToMany(
    () => StockPickingType,
    (StockPickingType) => StockPickingType.saleOrder,
  )
  public stockPickingTypes: StockPickingType;

  //Uno a Mucho stockPickingLine - saleOrder
  @OneToMany(
    () => StockPickingLine,
    (StockPickingLine) => StockPickingLine.saleOrder,
  )
  public StockPickingLines: StockPickingLine;

  //Uno a Mucho accountMove - saleOrder
  @OneToMany(() => AccountMove, (accountMove) => accountMove.saleOrder)
  public accountMoves: AccountMove;

  //Uno a Mucho accountInvoice - saleOrder
  @OneToMany(() => AccountInvoice, (accountInvoice) => accountInvoice.saleOrder)
  public accountInvoices: AccountInvoice;

  //Uno a Mucho paymentTransaction - saleOrder
  @OneToMany(
    () => PaymentTransaction,
    (paymentTransaction) => paymentTransaction.saleOrder,
  )
  public paymentTransactions: PaymentTransaction;

  //Uno a Mucho productCategory - saleOrder
  @OneToMany(
    () => ProductsCategory,
    (productCategory) => productCategory.saleOrder,
  )
  public productCategorys: ProductsCategory;

  //Uno a Mucho productProduct - saleOrder
  @OneToMany(() => ProductProduct, (productProduct) => productProduct.saleOrder)
  public productProducts: ProductProduct;

  //Uno a Mucho productPricelist - saleOrder
  @OneToMany(
    () => ProductsPricelist,
    (productsPricelist) => productsPricelist.saleOrder,
  )
  public productsPricelists: ProductsPricelist;
  //--------------------------------------------------------------------------------------

  //--------tienda-----------
  //Uno a Mucho accountInvoice --  saleOrder
  @OneToMany(
    () => AccountInvoice,
    (accountInvoice) => accountInvoice.saleOrders,
  )
  public accountInvoice: AccountInvoice;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleOrder>) {
    Object.assign(this, data);
  }
}
