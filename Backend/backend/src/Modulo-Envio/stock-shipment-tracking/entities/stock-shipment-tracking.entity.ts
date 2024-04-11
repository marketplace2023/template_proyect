import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockCarrier } from 'src/Modulo-Envio/stock-carrier/entities/stock-carrier.entity';
import { StockLocation } from 'src/Modulo-Envio/stock-location/entities/stock-location.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { StockPickingBatch } from 'src/Modulo-Envio/stock-picking-batch/entities/stock-picking-batch.entity';
import { StockPickingNote } from 'src/Modulo-Envio/stock-picking-note/entities/stock-picking-note.entity';
import { StockPickingPackageLine } from 'src/Modulo-Envio/stock-picking-package-line/entities/stock-picking-package-line.entity';
import { StockPickingPackage } from 'src/Modulo-Envio/stock-picking-package/entities/stock-picking-package.entity';
import { StockPickingStatus } from 'src/Modulo-Envio/stock-picking-status/entities/stock-picking-status.entity';
import { StockPickingTracking } from 'src/Modulo-Envio/stock-picking-tracking/entities/stock-picking-tracking.entity';
import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { StockWarehouse } from 'src/Modulo-Envio/stock-warehouse/entities/stock-warehouse.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { DeliveryTracking } from 'src/Modulo-Pedidos/delivery-tracking/entities/delivery-tracking.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
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
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'stock_shipment_tracking' })
export class StockShipmentTracking {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'shipment_id', type: 'int' })
  public shipment_id: number;

  @Column({ name: 'status', type: 'varchar' })
  public status: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'location', type: 'varchar' })
  public location: string;

  @Column({ name: 'details', type: 'varchar' })
  public details: string;

  //Uno a Mucho DeliveryShipment
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.stockShipmentTracking,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier[];

  //mucho a uno chooseDeliveryPackage
  @OneToOne(
    () => ChooseDeliveryPackage,
    (ChooseDeliveryPackage) => ChooseDeliveryPackage.stockShipmentVolumes,
  )
  @JoinColumn({ name: 'shipment_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_shipment_tracking_id', type: 'int' })
  public stock_shipment_tracking_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.StockShipmentTrackings,
  )
  @JoinColumn({ name: 'stock_shipment_tracking_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockShipmentTrackings,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Muchos a Muchos OrderLine
  @ManyToMany(() => OrderLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_order_line',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'order_line_id' },
  })
  public orderLine: OrderLine[];

  //Muchos a Muchos ProductTemplate
  @ManyToMany(() => ProductsTemplate, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_product_template',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'product_template_id' },
  })
  public productsTemplate: ProductsTemplate[];

  //Muchos a Muchos ResPartner
  @ManyToMany(() => ResPartner, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_res_partner',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'res_partner_id' },
  })
  public resPartner: ResPartner[];

  //Muchos a Muchos StockPickingLine
  @ManyToMany(() => StockPickingLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_stock_picking_line',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'stock_picking_line_id' },
  })
  public stockPickingLine: StockPickingLine[];

  //Muchos a Muchos StockMove
  @ManyToMany(() => StockMove, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_stock_move',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'stock_move_id' },
  })
  public stockMove: StockMove[];

  //Muchos a Muchos StockPicking
  @ManyToMany(() => StockPicking, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_stock_picking',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'stock_picking_id' },
  })
  public stockPicking: StockPicking[];

  //Muchos a Muchos StockPickingType
  @ManyToMany(() => StockPickingType, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_stock_picking_type',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'stock_picking_type_id' },
  })
  public stockPickingType: StockPickingType[];

  //Muchos a Muchos StockPickingPackage
  @ManyToMany(() => StockPickingPackage, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_stock_picking_package',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'stock_picking_package_id' },
  })
  public stockPickingPackage: StockPickingPackage[];

  //Muchos a Muchos StockPickingPackageLine
  @ManyToMany(() => StockPickingPackageLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_tracking_stock_picking_package_Line',
    joinColumn: { name: 'stock_shipment_tracking_id' },
    inverseJoinColumn: { name: 'stock_picking_package_Line_id' },
  })
  public stockPickingPackageLine: StockPickingPackageLine[];

  @OneToOne(
    () => DeliveryPackage,
    (deliveryPackage) => deliveryPackage.stockShipmentTracking,
  )
  public deliveryPackages: DeliveryPackage;

  @OneToOne(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.stockShipmentTracking,
  )
  public deliveryShipments: DeliveryShipment;

  @OneToOne(
    () => DeliveryTracking,
    (deliveryTracking) => deliveryTracking.stockShipmentTracking,
  )
  public deliveryTrackings: DeliveryTracking;

  //Mucho a Uno stockShipmentTracking - stock.shipment.return
  @Column({ name: 'shipmentTracking_id', type: 'int' })
  public shipmentTracking_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockShipmentTrackings,
  )
  @JoinColumn({ name: 'shipmentTracking_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Uno a Mucho ChooseDeliveryPackage - stockShipmentTrackings
  @OneToMany(
    () => ChooseDeliveryPackage,
    (chooseDeliveryTracking) => chooseDeliveryTracking.stockShipmentTrackings,
  )
  public chooseDeliverypackage: ChooseDeliveryPackage;

  //Uno a Mucho ChooseDeliveryCarrier - stockShipmentTrackings
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.stockShipmentTrackings,
  )
  public chooseDeliveryCarrier: ChooseDeliveryCarrier;

  //Uno a Mucho deliveryCarrier - stockShipmentTrackings
  @OneToMany(
    () => DeliveryCarrier,
    (deliveryCarrier) => deliveryCarrier.stockShipmentTrackings,
  )
  public deliveryCarrier: DeliveryCarrier;

  //Uno a Mucho stockShipmentWeight - stockShipmentTrackings
  @OneToMany(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockShipmentTracking,
  )
  public stockShipmentWeights: StockShipmentWeight;

  //Uno a Mucho stockShipmentVolume - stockShipmentTrackings
  @OneToMany(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockShipmentTracking,
  )
  public stockShipmentVolumes: StockShipmentVolume;

  //Uno a Mucho stockShipmentReturn - stockShipmentTrackings
  @OneToMany(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockShipmentTracking,
  )
  public stockShipmentReturns: StockShipmentReturn;

  //Uno a Mucho stockLocation - stockShipmentTrackings
  @OneToMany(
    () => StockLocation,
    (stockLocation) => stockLocation.stockShipmentTracking,
  )
  public stockLocations: StockLocation;

  //Uno a Mucho stockCarrier - stockShipmentTrackings
  @OneToMany(
    () => StockCarrier,
    (stockCarrier) => stockCarrier.stockShipmentTracking,
  )
  public stockCarriers: StockCarrier;

  //Uno a Mucho stockWarehouse - stockShipmentTrackings
  @OneToMany(
    () => StockWarehouse,
    (stockWarehouse) => stockWarehouse.stockShipmentTracking,
  )
  public stockWarehouses: StockWarehouse;

  //Uno a Mucho stockPickingNote - stockShipmentTrackings
  @OneToMany(
    () => StockPickingNote,
    (stockPickingNote) => stockPickingNote.stockShipmentTracking,
  )
  public stockPickingNotes: StockPickingNote;

  //Uno a Mucho stockPickingBatch - stockShipmentTrackings
  @OneToMany(
    () => StockPickingBatch,
    (stockPickingBatch) => stockPickingBatch.stockShipmentTracking,
  )
  public stockPickingBatchs: StockPickingBatch;

  //Uno a Mucho stockpickingTracking - stockShipmentTrackings
  @OneToMany(
    () => StockPickingTracking,
    (stockpickingTracking) => stockpickingTracking.stockShipmentTracking,
  )
  public stockPickingTrackings: StockPickingTracking;

  //Uno a Mucho stockPickingStatus - stockShipmentTrackings
  @OneToMany(
    () => StockPickingStatus,
    (stockPickingStatus) => stockPickingStatus.stockShipmentTracking,
  )
  public stockPickingStatus: StockPickingStatus;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockShipmentTracking>) {
    Object.assign(this, data);
  }
}
