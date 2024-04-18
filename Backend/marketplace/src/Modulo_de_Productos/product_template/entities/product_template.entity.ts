import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { ProductAccessoryRel } from 'src/Modulo-products/product-accessory-rel/entities/product-accessory-rel.entity';
import { ProductAlternativeRel } from 'src/Modulo-products/product-alternative-rel/entities/product-alternative-rel.entity';
import { ProductImage } from 'src/Modulo-products/product-image/entities/product-image.entity';
import { ProductProduct } from 'src/Modulo-products/product-product/entities/product-product.entity';
import { ProductsAttributeValue } from 'src/Modulo-products/products-attribute-value/entities/products-attribute-value.entity';
import { ProductsSupplier } from 'src/Modulo-products/products-supplier/entities/products-supplier.entity';
import { Products } from 'src/Modulo-products/products/entities/products.entity';
import { SaleOrderLine } from 'src/Modulo-store/sale-order-line/entities/sale-order-line.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
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
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products-template' })
export class ProductsTemplate {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'categ_id', type: 'int' })
  public categ_id: number;

  @Column({ name: 'uom_id', type: 'int' })
  public uom_id: number;

  @Column({ name: 'uom_po_id', type: 'int' })
  public uom_po_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'detailed_type', type: 'varchar' })
  public detailed_type: string;

  @Column({ name: 'type', type: 'varchar' })
  public type: string;

  @Column({ name: 'default_code', type: 'varchar' })
  public default_code: string;

  @Column({ name: 'priority', type: 'varchar' })
  public priority: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'description_purchase', type: 'varchar' })
  public description_purchase: string;

  @Column({ name: 'description_sale', type: 'varchar' })
  public description_sale: string;

  @Column({ name: 'list_price', type: 'decimal' })
  public list_price: number;

  @Column({ name: 'volume', type: 'decimal' })
  public volume: number;

  @Column({ name: 'weight', type: 'decimal' })
  public weight: number;

  @Column({ name: 'sale_ok', type: 'tinyint' })
  public sale_ok: boolean;

  @Column({ name: 'purchase_ok', type: 'tinyint' })
  public purchase_ok: boolean;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'can_image_1024_be_zoomed', type: 'tinyint' })
  public can_image_1024_be_zoomed: boolean;

  @Column({ name: 'has_configurable_attributes', type: 'tinyint' })
  public has_configurable_attributes: boolean;

  @Column({ name: 'tracking', type: 'varchar' })
  public tracking: string;

  @Column({ name: 'description_picking', type: 'varchar' })
  public description_picking: string;

  @Column({ name: 'description_pickingout', type: 'varchar' })
  public description_pickingout: string;

  @Column({ name: 'description_pickingin', type: 'varchar' })
  public description_pickingin: string;

  @Column({ name: 'sale_delay', type: 'varchar' })
  public sale_delay: string;

  @Column({ name: 'purchase_method', type: 'varchar' })
  public purchase_method: string;

  @Column({ name: 'purchase_line_warn', type: 'varchar' })
  public purchase_line_warn: string;

  @Column({ name: 'purchase_line_warn_msg', type: 'varchar' })
  public purchase_line_warn_msg: string;

  @Column({ name: 'service_type', type: 'varchar' })
  public service_type: string;

  @Column({ name: 'sale_line_warn', type: 'varchar' })
  public sale_line_warn: string;

  @Column({ name: 'expense_policy', type: 'varchar' })
  public expense_policy: string;

  @Column({ name: 'invoice_policy', type: 'varchar' })
  public invoice_policy: string;

  @Column({ name: 'sale_line_warn_msg', type: 'varchar' })
  public sale_line_warn_msg: string;

  @Column({ name: 'service_tracking', type: 'varchar' })
  public service_tracking: string;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  //Muchos a Uno
  @ManyToOne(() => Products, (product) => product.templates)
  @JoinColumn({ name: 'product_id' })
  public product: Products;

  //Uno a Mucho ProductsAttributeValue
  @OneToMany(
    () => ProductsAttributeValue,
    (attributeValue) => attributeValue.template,
  )
  public attributeValues: ProductsAttributeValue[];

  //Uno a Mucho ProductsSupplier
  @OneToMany(() => ProductsSupplier, (supplier) => supplier.template)
  public suppliers: ProductsSupplier[];

  //Uno a Mucho ProductsSupplier
  @OneToMany(() => ProductAccessoryRel, (accessoryRel) => accessoryRel.template)
  public accessoryRels: ProductAccessoryRel[];

  //Uno a Mucho ProductAlternativeRel
  @OneToMany(
    () => ProductAlternativeRel,
    (alternativeRel) => alternativeRel.template,
  )
  public alternativeRels: ProductAlternativeRel[];

  //Uno a Mucho ProductImage
  @OneToMany(() => ProductImage, (image) => image.template)
  public images: ProductImage[];

  //Uno a Mucho ProductProduct
  @OneToMany(() => ProductProduct, (producto) => producto.template)
  public productos: ProductProduct[];

  //---------------------------------------------------------------------
  //Muchos a Muchos choose-delivery-package
  @ManyToMany(() => ChooseDeliveryPackage, { cascade: true })
  @JoinTable({
    name: 'product_template_choose_delivery_package',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'choose_delivery_package_id' },
  })
  public chooseDeliveryPackage: ChooseDeliveryPackage[];

  //Muchos a Muchos choose-delivery-carrier
  @ManyToMany(() => ChooseDeliveryCarrier, { cascade: true })
  @JoinTable({
    name: 'product_template_choose_delivery_carrier',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'choose_delivery_carrier_id' },
  })
  public chooseDeliveryCarrier: ChooseDeliveryCarrier[];

  //Muchos a Muchos delivery-carrier
  @ManyToMany(() => DeliveryCarrier, { cascade: true })
  @JoinTable({
    name: 'product_template_delivery_carrier',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'delivery_carrier_id' },
  })
  public deliveryCarrier: DeliveryCarrier[];

  //Muchos a Muchos delivery-package
  @ManyToMany(() => DeliveryPackage, { cascade: true })
  @JoinTable({
    name: 'product_template_delivery_package',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'delivery_package_id' },
  })
  public deliveryPackage: DeliveryPackage[];

  //Muchos a Muchos delivery-shipment
  @ManyToMany(() => DeliveryShipment, { cascade: true })
  @JoinTable({
    name: 'product_template_delivery_shipment',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'delivery_shipment_id' },
  })
  public deliveryShipment: DeliveryShipment[];

  //Muchos a Muchos orderLine
  @ManyToMany(() => OrderLine, { cascade: true })
  @JoinTable({
    name: 'product_template_order_line',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'order_line_id' },
  })
  public orderLine: OrderLine[];

  //Muchos a Muchos resPartner
  @ManyToMany(() => ResPartner, { cascade: true })
  @JoinTable({
    name: 'product_template_res_Partner',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'res_Partner_id' },
  })
  public resPartner: ResPartner[];

  //Muchos a Muchos stockPickingLine
  @ManyToMany(() => StockPickingLine, { cascade: true })
  @JoinTable({
    name: 'product_template_stock_picking_line',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'stock_picking_line_id' },
  })
  public stockPickingLine: StockPickingLine[];

  //Muchos a Muchos stockMove
  @ManyToMany(() => StockMove, { cascade: true })
  @JoinTable({
    name: 'product_template_stock_Move',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'stock_Move_id' },
  })
  public stockMove: StockMove[];

  //Muchos a Muchos StockPicking
  @ManyToMany(() => StockPicking, { cascade: true })
  @JoinTable({
    name: 'product_template_stock_picking',
    joinColumn: { name: 'product_template_id' },
    inverseJoinColumn: { name: 'stock_picking_id' },
  })
  public stockPicking: StockPicking[];

  //Mucho a Uno productsTemplate - stockMove
  @Column({ name: 'stock_move_productsTemplate_id', type: 'int' })
  public stock_move_productsTemplate_id: number;

  @ManyToOne(() => StockMove, (stockMove) => stockMove.templates)
  @JoinColumn({ name: 'stock_move_productsTemplate_id' })
  public productsTemplate: StockMove;

  @Column({ name: 'sale_order_template_id', type: 'int' })
  public readonly sale_order_template_id: number;

  //Muchos a Uno
  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.productTemplates)
  @JoinColumn({ name: 'sale_order_template_id' })
  public saleOrder: SaleOrder;

  //--------------------tienda-----------------------------------
  //Uno a Mucho saleOrderLine --  productTemplate
  @OneToMany(
    () => SaleOrderLine,
    (saleOrderLine) => saleOrderLine.productTemplates,
  )
  public saleOrderLines: SaleOrderLine;
  //----------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductsTemplate>) {
    Object.assign(this, data);
  }
}
