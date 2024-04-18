import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { DeliveryTracking } from 'src/Modulo-Pedidos/delivery-tracking/entities/delivery-tracking.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'stock_move' })
export class StockMove {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'product_qty', type: 'float' })
  public product_qty: number;

  @Column({ name: 'location_id_from', type: 'int' })
  public location_id_from: number;

  @Column({ name: 'location_id_to', type: 'int' })
  public location_id_to: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'picking_type_id', type: 'int' })
  public picking_type_id: number;

  @Column({ name: 'shipment_id', type: 'int' })
  public shipment_id: number;

  @Column({ name: 'stock_move_id', type: 'int' })
  public stock_move_id: number;

  //Uno a Uno Products
  @OneToOne(() => OrderLine, (orderLine) => orderLine.stockMoves)
  @JoinColumn({ name: 'stock_move_id' })
  public orderLine: OrderLine;

  //Uno a Mucho resPartner - stockMove
  @OneToMany(() => ResPartner, (resPartner) => resPartner.stockMoves)
  public resPartners: ResPartner;

  //Uno a Mucho deliveryTracking - stockMove
  @OneToMany(
    () => DeliveryTracking,
    (deliveryTracking) => deliveryTracking.stockMoves,
  )
  public deliveryTrackings: DeliveryTracking;

  //Uno a Mucho orderLine - stockMove
  @OneToMany(() => OrderLine, (orderLine) => orderLine.stockMoves)
  public orderLines: OrderLine;

  //Uno a Mucho ProductTemplate - stockMove
  @OneToMany(
    () => ProductsTemplate,
    (productsTemplate) => productsTemplate.stockMove,
  )
  public templates: ProductsTemplate;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockMove>) {
    Object.assign(this, data);
  }
}
