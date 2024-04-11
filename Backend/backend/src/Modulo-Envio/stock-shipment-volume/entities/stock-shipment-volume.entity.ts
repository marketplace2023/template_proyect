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
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { StockWarehouse } from 'src/Modulo-Envio/stock-warehouse/entities/stock-warehouse.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { DeliveryTrackingEvent } from 'src/Modulo-Pedidos/delivery-tracking-event/entities/delivery-tracking-event.entity';
import { DeliveryTrackingHistoryService } from 'src/Modulo-Pedidos/delivery-tracking-history/delivery-tracking-history.service';
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

@Entity({ name: 'stock_shipment_volume' })
export class StockShipmentVolume {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'shipment_id', type: 'int' })
  public shipment_id: number;

  @Column({ name: 'volume', type: 'float' })
  public volume: number;

  @Column({ name: 'unit', type: 'varchar' })
  public units: string;

  //mucho a uno chooseDeliveryPackage
  @OneToOne(
    () => ChooseDeliveryPackage,
    (ChooseDeliveryPackage) => ChooseDeliveryPackage.stockShipmentVolumes,
  )
  @JoinColumn({ name: 'shipment_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_shipment_Volume_id', type: 'int' })
  public stock_shipment_Volume_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.StockShipmentVolumes,
  )
  @JoinColumn({ name: 'stock_shipment_Volume_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Muchos orderLine
  @ManyToMany(() => OrderLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_order_line',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'order_line_id' },
  })
  public orderLine: OrderLine[];

  //Muchos a Muchos ProductTemplate
  @ManyToMany(() => ProductsTemplate, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_product_template',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'product_template_id' },
  })
  public productTemplate: ProductsTemplate[];

  //Muchos a Muchos resPartner
  @ManyToMany(() => ResPartner, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_res_partner',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'res_partner_id' },
  })
  public resPartner: ResPartner[];

  //Muchos a Muchos StockPickingLine
  @ManyToMany(() => StockPickingLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_stock_picking_line',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'stock_picking_line_id' },
  })
  public stockPickingLine: StockPickingLine[];

  //Muchos a Muchos StockMove
  @ManyToMany(() => StockMove, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_stock_move',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'stock_move_id' },
  })
  public stockMove: StockMove[];

  //Muchos a Muchos StockPicking
  @ManyToMany(() => StockPicking, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_stock_picking',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'stock_picking_id' },
  })
  public stockPicking: StockPicking[];

  //Muchos a Muchos StockPickingType
  @ManyToMany(() => StockPickingType, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_stock_picking_type',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'stock_picking_type_id' },
  })
  public stockPickingType: StockPickingType[];

  //Muchos a Muchos StockPickingPackage
  @ManyToMany(() => StockPickingPackage, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_stock_picking_package',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'stock_picking_package_id' },
  })
  public stockPickingPackage: StockPickingPackage[];

  //Muchos a Muchos StockPickingPackageLine
  @ManyToMany(() => StockPickingPackageLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_volume_stock_picking_package_line',
    joinColumn: { name: 'stock_shipment_volume_id' },
    inverseJoinColumn: { name: 'stock_picking_package_line_id' },
  })
  public stockPickingPackageLine: StockPickingPackageLine[];

  //uno a uno deliveryPackage
  @OneToOne(
    () => DeliveryPackage,
    (deliveryPackage) => deliveryPackage.StockShipmentVolume,
  )
  public deliveryPackages: DeliveryPackage;

  //uno a uno deliveryShipment
  @OneToOne(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.StockShipmentVolume,
  )
  public deliveryShipments: DeliveryShipment;

  //uno a uno StockShipmentVolume
  @OneToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockShipmentWeight,
  )
  public stockShipmentVolumes: StockShipmentVolume;

  //uno a mucho ChooseDeliveryCarrier
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (ChooseDeliveryCarrier) => ChooseDeliveryCarrier.stockShipmentVolume,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier[];

  //uno a mucho DeliveryCarrier
  @OneToMany(
    () => DeliveryCarrier,
    (deliveryCarrier) => deliveryCarrier.stockShipmentVolume,
  )
  public deliveryCarriers: DeliveryCarrier[];

  //uno a mucho DeliveryTracking
  @OneToMany(
    () => DeliveryTracking,
    (deliveryTracking) => deliveryTracking.stockShipmentVolume,
  )
  public deliveryTrackings: DeliveryTracking[];

  //uno a mucho DeliveryTrackingHistory
  @OneToMany(
    () => DeliveryTrackingHistory,
    (deliveryTrackingHistory) => deliveryTrackingHistory.stockShipmentVolume,
  )
  public deliveryTrackingHistorys: DeliveryTrackingHistory[];

  //uno a mucho DeliveryTrackingEvent
  @OneToMany(
    () => DeliveryTrackingEvent,
    (deliveryTrackingEvent) => deliveryTrackingEvent.stockShipmentVolume,
  )
  public deliveryTrackingEvents: DeliveryTrackingEvent[];

  //uno a mucho StockShipmentWeight
  @OneToMany(
    () => StockShipmentWeight,
    (StockShipmentWeight) => StockShipmentWeight.stockShipmentVolume,
  )
  public StockShipmentWeights: StockShipmentWeight[];

  //uno a mucho StockShipmentReturn
  @OneToMany(
    () => StockShipmentReturn,
    (StockShipmentReturn) => StockShipmentReturn.stockShipmentVolume,
  )
  public stockShipmentReturns: StockShipmentReturn[];

  //uno a mucho StockShipmentTracking
  @OneToMany(
    () => StockShipmentTracking,
    (StockShipmentTracking) => StockShipmentTracking.stockShipmentVolume,
  )
  public stockShipmentTrackings: StockShipmentTracking[];

  //uno a mucho StockLocation
  @OneToMany(
    () => StockLocation,
    (stockLocation) => stockLocation.stockShipmentVolume,
  )
  public stockLocations: StockLocation[];

  //uno a mucho StockCarrier
  @OneToMany(
    () => StockCarrier,
    (stockCarrier) => stockCarrier.stockShipmentVolume,
  )
  public stockCarriers: StockCarrier[];

  //uno a mucho StockWarehouse
  @OneToMany(
    () => StockWarehouse,
    (stockWarehouse) => stockWarehouse.stockShipmentVolume,
  )
  public stockWarehouses: StockWarehouse[];

  //uno a mucho StockPickingNote
  @OneToMany(
    () => StockPickingNote,
    (stockPickingNote) => stockPickingNote.stockShipmentVolume,
  )
  public stockPickingNotes: StockPickingNote[];

  //uno a mucho StockPickingBatch
  @OneToMany(
    () => StockPickingBatch,
    (stockPickingBatch) => stockPickingBatch.stockShipmentVolume,
  )
  public stockPickingBatchs: StockPickingBatch[];

  //uno a mucho StockPickingTracking
  @OneToMany(
    () => StockPickingTracking,
    (stockPickingTracking) => stockPickingTracking.stockShipmentVolume,
  )
  public stockPickingTrackings: StockPickingTracking[];

  //uno a mucho StockPickingStatus
  @OneToMany(
    () => StockPickingStatus,
    (stockPickingStatus) => stockPickingStatus.stockShipmentVolume,
  )
  public stockPickingStatus: StockPickingStatus[];

  //Mucho a Uno stockShipmentVolume - stock.shipment.return
  @Column({ name: 'shipmentVolume_id', type: 'int' })
  public shipmentVolume_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockShipmentVolumes,
  )
  @JoinColumn({ name: 'shipmentVolume_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno StockShipmentVolume - stock.shipment.tracking
  @Column({ name: 's_s_volume_id', type: 'int' })
  public s_s_volume_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockShipmentVolumes,
  )
  @JoinColumn({ name: 's_s_volume_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockShipmentVolume>) {
    Object.assign(this, data);
  }
}
