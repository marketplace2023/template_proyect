import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
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

@Entity({ name: 'stock_picking_tracking' })
export class StockPickingTracking {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'carrier_id', type: 'int' })
  public carrier_id: number;

  @Column({ name: 'tracking_number', type: 'varchar' })
  public tracking_number: string;

  //mucho a uno chooseDeliveryPackage
  @OneToOne(
    () => ChooseDeliveryPackage,
    (ChooseDeliveryPackage) => ChooseDeliveryPackage.stockPickingTrackings,
  )
  @JoinColumn({ name: 'picking_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockPickingTrackings,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  @Column({ name: 'stock_picking_id', type: 'int' })
  public stock_picking_id: number;

  //Uno a Uno orderLine
  @OneToOne(() => OrderLine, (orderLine) => orderLine.stockPickingTrackings)
  @JoinColumn({ name: 'stock_picking_id' })
  public orderLine: OrderLine;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_picking_tracking_id', type: 'int' })
  public stock_picking_tracking_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockPickingTrackings,
  )
  @JoinColumn({ name: 'stock_picking_tracking_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Mucho a Uno stockPickingTracking - stock.shipment.return
  @Column({ name: 'stockShTracking_id', type: 'int' })
  public stockShTracking_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockPickingTrackings,
  )
  @JoinColumn({ name: 'stockShTracking_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockPickingTracking - stock.shipment.tracking
  @Column({ name: 'stock_tranking_id', type: 'int' })
  public stock_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockPickingTrackings,
  )
  @JoinColumn({ name: 'stock_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingTracking>) {
    Object.assign(this, data);
  }
}
