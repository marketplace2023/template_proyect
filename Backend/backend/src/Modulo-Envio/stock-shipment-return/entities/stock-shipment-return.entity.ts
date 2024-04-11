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
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { StockWarehouse } from 'src/Modulo-Envio/stock-warehouse/entities/stock-warehouse.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { DeliveryTrackingEvent } from 'src/Modulo-Pedidos/delivery-tracking-event/entities/delivery-tracking-event.entity';
import { DeliveryTrackingHistory } from 'src/Modulo-Pedidos/delivery-tracking-history/entities/delivery-tracking-history.entity';
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

@Entity({ name: 'stock_shipment_return' })
export class StockShipmentReturn {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'shipment_id', type: 'int' })
  public shipment_id: number;

  @Column({ name: 'reason', type: 'varchar' })
  public reason: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'stock_shipment_return_id', type: 'int' })
  public stock_shipment_return_id: number;

  //Uno a Uno orderLine
  @OneToOne(() => OrderLine, (orderLine) => orderLine.stockShipmentReturns)
  @JoinColumn({ name: 'stock_shipment_return_id' })
  public orderLine: OrderLine;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_shipment_returns_id', type: 'int' })
  public stock_shipment_returns_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.StockShipmentReturnss,
  )
  @JoinColumn({ name: 'stock_shipment_returns_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockShipmentReturns,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Muchos a Muchos OrderLine
  @ManyToMany(() => OrderLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_order_line',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'order_line_id' },
  })
  public orderL: OrderLine[];

  //Muchos a Muchos ProductTemplate
  @ManyToMany(() => ProductsTemplate, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_product_template',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'product_template_id' },
  })
  public productsTemplate: ProductsTemplate[];

  //Muchos a Muchos ResPartner
  @ManyToMany(() => ResPartner, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_res_partner',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'res_partner_id' },
  })
  public resPartner: ResPartner[];

  //Muchos a Muchos StockPickingLine
  @ManyToMany(() => StockPickingLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_stock_picking_line',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'stock_picking_line_id' },
  })
  public stockPickingLine: StockPickingLine[];

  //Muchos a Muchos StockMove
  @ManyToMany(() => StockMove, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_stock_move',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'stock_move_id' },
  })
  public stockMove: StockMove[];

  //Muchos a Muchos StockPicking
  @ManyToMany(() => StockPicking, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_stock_picking',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'stock_picking_id' },
  })
  public stockPicking: StockPicking[];

  //Muchos a Muchos StockPickingType
  @ManyToMany(() => StockPickingType, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_stock_picking_type',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'stock_picking_type_id' },
  })
  public stockPickingType: StockPickingType[];

  //Muchos a Muchos StockPickingPackage
  @ManyToMany(() => StockPickingPackage, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_stock_picking_package',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'stock_picking_package_id' },
  })
  public stockPickingPackage: StockPickingPackage[];

  //Muchos a Muchos StockPickingPackageLine
  @ManyToMany(() => StockPickingPackageLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_return_stock_picking_package_Line',
    joinColumn: { name: 'stock_shipment_return_id' },
    inverseJoinColumn: { name: 'stock_picking_package_Line_id' },
  })
  public stockPickingPackageLine: StockPickingPackageLine[];

  //uno a uno DeliveryShipment - stockShipmentReturn
  @OneToOne(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.stockShipmentReturn,
  )
  public deliveryShipments: DeliveryShipment;

  //Uno a Mucho choose-delivery-package - - stockShipmentReturn
  @OneToMany(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.stockShipmentReturn,
  )
  public chooseDeliveryPackages: ChooseDeliveryPackage;

  //Uno a Mucho choose-delivery-Carrier - stockShipmentReturn
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.stockShipmentReturn,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier;

  //Uno a Mucho delivery-Carrier - stockShipmentReturn
  @OneToMany(
    () => DeliveryCarrier,
    (DeliveryCarrier) => DeliveryCarrier.stockShipmentReturn,
  )
  public DeliveryCarriers: DeliveryCarrier;

  //Uno a Mucho delivery-Package - stockShipmentReturn
  @OneToMany(
    () => DeliveryPackage,
    (DeliveryPackage) => DeliveryPackage.stockShipmentReturn,
  )
  public DeliveryPackages: DeliveryPackage;

  //Uno a Mucho delivery-Tracking - stockShipmentReturn
  @OneToMany(
    () => DeliveryTracking,
    (DeliveryTracking) => DeliveryTracking.stockShipmentReturn,
  )
  public DeliveryTrackings: DeliveryTracking;

  //Uno a Mucho delivery-TrackingHistory - stockShipmentReturn
  @OneToMany(
    () => DeliveryTrackingHistory,
    (DeliveryTrackingHistory) => DeliveryTrackingHistory.stockShipmentReturn,
  )
  public DeliveryTrackingHistorys: DeliveryTrackingHistory;

  //Uno a Mucho delivery-TrackingEvent - stockShipmentReturn
  @OneToMany(
    () => DeliveryTrackingEvent,
    (DeliveryTrackingEvent) => DeliveryTrackingEvent.stockShipmentReturn,
  )
  public DeliveryTrackingEvents: DeliveryTrackingEvent;

  //Uno a Mucho stockShipmentWeight - stockShipmentReturn
  @OneToMany(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockShipmentReturn,
  )
  public stockShipmentWeights: StockShipmentWeight;

  //Uno a Mucho stockShipmentVolume - stockShipmentReturn
  @OneToMany(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockShipmentReturn,
  )
  public stockShipmentVolumes: StockShipmentVolume;

  //Uno a Mucho stockShipmentTracking - stockShipmentReturn
  @OneToMany(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockShipmentReturn,
  )
  public stockShipmentTrackings: StockShipmentTracking;

  //Uno a Mucho stockLocation - stockShipmentReturn
  @OneToMany(
    () => StockLocation,
    (stockLocation) => stockLocation.stockShipmentReturn,
  )
  public stockLocations: StockLocation;

  //Uno a Mucho stockCarrier - stockShipmentReturn
  @OneToMany(
    () => StockCarrier,
    (stockCarrier) => stockCarrier.stockShipmentReturn,
  )
  public stockcarriers: StockCarrier;

  //Uno a Mucho stockWarehouse - stockShipmentReturn
  @OneToMany(
    () => StockWarehouse,
    (stockWarehouse) => stockWarehouse.stockShipmentReturn,
  )
  public stockWarehouses: StockWarehouse;

  //Uno a Mucho stockPickingNote - stockShipmentReturn
  @OneToMany(
    () => StockPickingNote,
    (stockPickingNote) => stockPickingNote.stockShipmentReturn,
  )
  public stockPickingNotes: StockPickingNote;

  //Uno a Mucho stockPickingBatch - stockShipmentReturn
  @OneToMany(
    () => StockPickingBatch,
    (stockPickingBatch) => stockPickingBatch.stockShipmentReturn,
  )
  public stockPickingBatchs: StockPickingBatch;

  //Uno a Mucho stockPickingTracking - stockShipmentReturn
  @OneToMany(
    () => StockPickingTracking,
    (stockPickingTracking) => stockPickingTracking.stockShipmentReturn,
  )
  public stockPickingTrackings: StockPickingTracking;

  //Uno a Mucho stockPickingStatus - stockShipmentReturn
  @OneToMany(
    () => StockPickingStatus,
    (stockPickingStatus) => stockPickingStatus.stockShipmentReturn,
  )
  public stockPickingStatus: StockPickingStatus;

  //Mucho a Uno StockShipmentReturn - stock.shipment.tracking
  @Column({ name: 's_s_return_id', type: 'int' })
  public s_s_return_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockShipmentReturns,
  )
  @JoinColumn({ name: 's_s_return_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockShipmentReturn>) {
    Object.assign(this, data);
  }
}
