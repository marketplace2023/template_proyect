import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { SaleRating } from 'src/Modulo-promotions/sale-rating/entities/sale-rating.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { SellerRating } from 'src/Modulo-valoracion-seller/seller-ratings/entities/seller-ratings.entity';
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

@Entity({ name: 'sale_order_line' })
export class SaleOrderLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'order_partner_id', type: 'int' })
  public order_partner_id: number;

  @Column({ name: 'salesman_id', type: 'int' })
  public salesman_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'product_uom', type: 'int' })
  public product_uom: number;

  @Column({ name: 'product_packaging_id', type: 'int' })
  public product_packaging_id: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'display_type', type: 'varchar' })
  public display_type: string;

  @Column({ name: 'qty_delivered_method', type: 'varchar' })
  public qty_delivered_method: string;

  @Column({ name: 'invoice_status', type: 'varchar' })
  public invoice_status: string;

  @Column({ name: 'analytic_distribution', type: 'varchar' })
  public analytic_distribution: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'product_uom_qty', type: 'int' })
  public product_uom_qty: number;

  @Column({ name: 'price_unit', type: 'int' })
  public price_unit: number;

  @Column({ name: 'discount', type: 'int' })
  public discount: number;

  @Column({ name: 'price_reduce', type: 'int' })
  public price_reduce: number;

  @Column({ name: 'price_subtotal', type: 'int' })
  public price_subtotal: number;

  @Column({ name: 'price_total', type: 'int' })
  public price_total: number;

  @Column({ name: 'price_reduce_taxexcl', type: 'int' })
  public price_reduce_taxexcl: number;

  @Column({ name: 'price_reduce_taxinc', type: 'int' })
  public price_reduce_taxinc: number;

  @Column({ name: 'qty_delivered', type: 'int' })
  public qty_delivered: number;

  @Column({ name: 'qty_invoiced', type: 'int' })
  public qty_invoiced: number;

  @Column({ name: 'qty_to_invoice', type: 'int' })
  public qty_to_invoice: number;

  @Column({ name: 'untaxed_amount_invoiced', type: 'int' })
  public untaxed_amount_invoiced: number;

  @Column({ name: 'untaxed_amount_to_invoice', type: 'int' })
  public untaxed_amount_to_invoice: number;

  @Column({ name: 'is_downpayment', type: 'tinyint' })
  public is_downpayment: boolean;

  @Column({ name: 'is_expense', type: 'tinyint' })
  public is_expense: boolean;

  @Column({ name: 'price_tax', type: 'int' })
  public price_tax: number;

  @Column({ name: 'product_packaging_qty', type: 'int' })
  public product_packaging_qty: number;

  @Column({ name: 'customer_lead', type: 'tinyint' })
  public customer_lead: boolean;

  @Column({ name: 'route_id', type: 'int' })
  public route_id: number;

  @Column({ name: 'linked_line_id', type: 'int' })
  public linked_line_id: number;

  @Column({ name: 'shop_warning', type: 'varchar' })
  public shop_warning: string;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  //Muchos a Uno saleOrder - salOrderLine
  @Column({ name: 'sale_order_line_id', type: 'int' })
  public sale_order_line_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.saleOrderLines)
  @JoinColumn({ name: 'sale_order_line_id' })
  public saleOrder: SaleOrder;

  //-------------------------tienda-------------------
  //mucho a uno con ResPartner
  @Column({ name: 'res_partner_id', type: 'int' })
  public res_partner_id: number;

  @ManyToOne(() => ResPartner, (resPartner) => resPartner.saleOrderLines)
  @JoinColumn({ name: 'res_partner_id' })
  public resPartners: ResPartner;

  //mucho a uno con ProductoTemplates
  @Column({ name: 'product_template_id', type: 'int' })
  public product_template_id: number;

  @ManyToOne(
    () => ProductsTemplate,
    (productTemplate) => productTemplate.saleOrderLines,
  )
  @JoinColumn({ name: 'product_template_id' })
  public productTemplates: ResPartner;

  //Uno a Mucho saleOrderLine --  stockPickingLine
  @OneToMany(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.saleOrderLines,
  )
  public stockPickingLines: StockPickingLine;

  @ManyToOne(() => SellerRating, (sellerRating) => sellerRating.saleOrderLines)
  @JoinColumn({ name: 'route_id' })
  public sellerRatings: SellerRating;
  //------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SaleOrderLine>) {
    Object.assign(this, data);
  }
}
