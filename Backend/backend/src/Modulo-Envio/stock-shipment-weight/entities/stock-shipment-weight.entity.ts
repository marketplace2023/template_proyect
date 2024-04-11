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
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
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

@Entity({ name: 'stock_shipment_weight' })
export class StockShipmentWeight {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'shipment_id', type: 'int' })
  public shipment_id: number;

  @Column({ name: 'weight', type: 'varchar' })
  public weight: string;

  @Column({ name: 'unit', type: 'varchar' })
  public units: string;
  //-----------------------RELACIONES-------------------------------
  //uno a mucho ChooseDeliveryPackage
  @OneToMany(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.stockShipmentWeight,
  )
  public chooseDeliveryPackages: ChooseDeliveryPackage[];

  //uno a mucho ChooseDeliveryCarrier
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.stockShipmentWeight,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier[];

  //uno a mucho DeliveryCarrier
  @OneToMany(
    () => DeliveryCarrier,
    (deliveryCarrier) => deliveryCarrier.stockShipmentWeight,
  )
  public deliveryCarriers: DeliveryCarrier[];

  //uno a mucho DeliveryTracking
  @OneToMany(
    () => DeliveryTracking,
    (deliveryTracking) => deliveryTracking.stockShipmentWeight,
  )
  public deliveryTrackings: DeliveryTracking[];

  //uno a mucho DeliveryTrackingHistory
  @OneToMany(
    () => DeliveryTrackingHistory,
    (deliveryTrackingHistory) => deliveryTrackingHistory.stockShipmentWeight,
  )
  public deliveryTrackingHistorys: DeliveryTrackingHistory[];

  //uno a mucho DeliveryTrackingEvent
  @OneToMany(
    () => DeliveryTrackingEvent,
    (deliveryTrackingEvent) => deliveryTrackingEvent.stockShipmentWeight,
  )
  public deliveryTrackingEvents: DeliveryTrackingEvent[];

  //uno a mucho StockShipmentVolume
  @OneToMany(
    () => StockShipmentVolume,
    (StockShipmentVolume) => StockShipmentVolume.stockShipmentWeight,
  )
  public StockShipmentVolumes: StockShipmentVolume[];

  //uno a mucho StockShipmentReturn
  @OneToMany(
    () => StockShipmentReturn,
    (StockShipmentReturn) => StockShipmentReturn.stockShipmentWeight,
  )
  public StockShipmentReturnss: StockShipmentReturn[];

  //uno a mucho StockShipmentTracking
  @OneToMany(
    () => StockShipmentTracking,
    (StockShipmentTracking) => StockShipmentTracking.stockShipmentWeight,
  )
  public StockShipmentTrackings: StockShipmentTracking[];

  //uno a mucho StockLocation
  @OneToMany(
    () => StockLocation,
    (stockLocation) => stockLocation.stockShipmentWeight,
  )
  public stockLocations: StockLocation[];

  //uno a mucho StockCarrier
  @OneToMany(
    () => StockCarrier,
    (stockCarrier) => stockCarrier.stockShipmentWeight,
  )
  public stockCarriers: StockCarrier[];

  //uno a mucho StockWarehouse
  @OneToMany(
    () => StockWarehouse,
    (stockWarehouse) => stockWarehouse.stockShipmentWeight,
  )
  public stockWarehouses: StockWarehouse[];

  //uno a mucho StockPickingNote
  @OneToMany(
    () => StockPickingNote,
    (stockPickingNote) => stockPickingNote.stockShipmentWeight,
  )
  public stockPickingNotes: StockPickingNote[];

  //uno a mucho StockPickingBatch
  @OneToMany(
    () => StockPickingBatch,
    (stockPickingBatch) => stockPickingBatch.stockShipmentWeight,
  )
  public stockPickingBatchs: StockPickingBatch[];

  //uno a mucho StockPickingTracking
  @OneToMany(
    () => StockPickingTracking,
    (stockPickingTracking) => stockPickingTracking.stockShipmentWeight,
  )
  public stockPickingTrackings: StockPickingTracking[];

  //uno a mucho StockPickingStatus
  @OneToMany(
    () => StockPickingStatus,
    (stockPickingStatus) => stockPickingStatus.stockShipmentWeight,
  )
  public stockPickingStatuss: StockPickingStatus[];

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.StockShipmentWeights,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //-----------------------------------------------

  //mucho a uno chooseDeliveryPackage
  @OneToOne(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.stockShipmentWeights,
  )
  @JoinColumn({ name: 'shipment_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  //uno a uno deliveryPackage
  @OneToOne(
    () => DeliveryPackage,
    (deliveryPackage) => deliveryPackage.StockShipmentWeight,
  )
  public deliveryPackages: DeliveryPackage;

  //uno a uno deliverysHIPMENT
  @OneToOne(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.stockShipmentWeight,
  )
  public deliveryShipments: DeliveryShipment;

  //Muchos a Muchos orderLine
  @ManyToMany(() => OrderLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_order_line',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'order_line_id' },
  })
  public orderLine: OrderLine[];

  //Muchos a Muchos ProductTemplate
  @ManyToMany(() => ProductsTemplate, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_product_template',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'product_template_id' },
  })
  public productTemplate: ProductsTemplate[];

  //Muchos a Muchos resPartner
  @ManyToMany(() => ResPartner, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_res_partner',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'res_partner_id' },
  })
  public resPartner: ResPartner[];

  //Muchos a Muchos StockPickingLine
  @ManyToMany(() => StockPickingLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_stock_picking_line',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'stock_picking_line_id' },
  })
  public stockPickingLine: StockPickingLine[];

  //Muchos a Muchos StockMove
  @ManyToMany(() => StockMove, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_stock_move',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'stock_move_id' },
  })
  public stockMove: StockMove[];

  //Muchos a Muchos StockPicking
  @ManyToMany(() => StockPicking, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_stock_picking',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'stock_picking_id' },
  })
  public stockPicking: StockPicking[];

  //Muchos a Muchos StockPickingType
  @ManyToMany(() => StockPickingType, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_stock_picking_type',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'stock_picking_type_id' },
  })
  public stockPickingType: StockPickingType[];

  //Muchos a Muchos StockPickingPackage
  @ManyToMany(() => StockPickingPackage, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_stock_picking_package',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'stock_picking_package_id' },
  })
  public stockPickingPackage: StockPickingPackage[];

  //Muchos a Muchos StockPickingPackageLine
  @ManyToMany(() => StockPickingPackageLine, { cascade: true })
  @JoinTable({
    name: 'stock_shipment_weight_stock_picking_package_line',
    joinColumn: { name: 'stock_shipment_weight_id' },
    inverseJoinColumn: { name: 'stock_picking_package_line_id' },
  })
  public stockPickingPackageLine: StockPickingPackageLine[];

  //Mucho a Uno stockShipmentWeight - stock.shipment.return
  @Column({ name: 'shipmentWeight_id', type: 'int' })
  public shipmentWeight_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockShipmentWeights,
  )
  @JoinColumn({ name: 'shipmentWeight_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno StockShipmentWeight - stock.shipment.tracking
  @Column({ name: 's_s_weight_id', type: 'int' })
  public s_s_weight_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockShipmentWeights,
  )
  @JoinColumn({ name: 's_s_weight_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockShipmentWeight>) {
    Object.assign(this, data);
  }
}
