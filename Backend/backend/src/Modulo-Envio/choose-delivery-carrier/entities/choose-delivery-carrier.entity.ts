import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockPickingTracking } from 'src/Modulo-Envio/stock-picking-tracking/entities/stock-picking-tracking.entity';
import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
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

@Entity({ name: 'choose_delivery_carrier' })
export class ChooseDeliveryCarrier {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'carrier_id', type: 'int' })
  public carrier_id: number;

  //Uno a Uno deliveryCarrier
  @OneToOne(
    () => DeliveryCarrier,
    (deliveryCarrier) => deliveryCarrier.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'carrier_id' })
  public deliveryCarrier: DeliveryCarrier;

  @Column({ name: 'deliveryPackage_id', type: 'int' })
  public deliveryPackage_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(
    () => DeliveryPackage,
    (deliveryPackage) => deliveryPackage.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'deliveryPackage_id' })
  public deliveryPackage: DeliveryPackage;

  //Uno a Mucho DeliveryShipment
  @OneToMany(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.chooseDeliveryCarrier,
  )
  public deliveryShipments: DeliveryShipment[];

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'delivery_message', type: 'varchar' })
  public delivery_message: string;

  @Column({ name: 'choose_id', type: 'int' })
  public choose_id: number;

  //Muchos a Uno ProductsTemplate
  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'choose_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @Column({ name: 'package_id', type: 'int' })
  public package_id: number;

  //Muchos a Uno ChooseDeliverCarrier
  @ManyToOne(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'package_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  //-----------order-line-----------
  // Mucho a uno con orderline
  @Column({ name: 'dcarrier_id', type: 'int' })
  public dcarrier_id: number;

  //Muchos a Uno
  @ManyToOne(() => OrderLine, (orderLine) => orderLine.chooseDeliveryCarriers)
  @JoinColumn({ name: 'dcarrier_id' })
  public orderLine: OrderLine;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_shipment_carrier_id', type: 'int' })
  public stock_shipment_carrier_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'stock_shipment_carrier_id' })
  public stockShipmentWeight: StockShipmentWeight;
  //----------------------------------------------------------------------------------
  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno choosedeliveryCarrier - stock.shipment.return
  @Column({ name: 'stock_return_id', type: 'int' })
  public stock_return_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'stock_return_id' })
  public stockShipmentReturn: StockShipmentReturn;

  @Column({ name: 'delivery_price', type: 'int' })
  public delivery_price: number;

  @Column({ name: 'display_price', type: 'int' })
  public display_price: number;

  //Mucho a Uno chooseDeliveryCarrier - stock.shipment.tracking
  @Column({ name: 'chooseDpackage_carrier_id', type: 'int' })
  public chooseDpackage_carrier_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'chooseDpackage_carrier_id' })
  public stockShipmentTrackings: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ChooseDeliveryCarrier>) {
    Object.assign(this, data);
  }
}
