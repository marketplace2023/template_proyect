import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_shipment' })
export class DeliveryShipment {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'carrier_id', type: 'int' })
  public carrier_id: number;

  @Column({ name: 'shipping_method_id', type: 'int' })
  public shipping_method_id: number;

  @Column({ name: 'chooseDeliveryCarrier_id', type: 'int' })
  public chooseDeliveryCarrier_id: number[];

  //Muchos a Uno ChooseDeliveryCarrier
  @ManyToOne(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.deliveryShipments,
  )
  @JoinColumn({ name: 'chooseDeliveryCarrier_id' })
  public chooseDeliveryCarrier: ChooseDeliveryCarrier;

  //Mucho a Uno choose-delivery-package
  @ManyToOne(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.deliveryShipments,
  )
  @JoinColumn({ name: 'chooseDeliveryPackage_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  @Column({ name: 'tracking_number', type: 'varchar' })
  public tracking_number: string;

  @Column({ name: 'status', type: 'varchar' })
  public status: string;

  //-----------order-line-----------
  // Mucho a uno con orderline
  @Column({ name: 'dShipment_id', type: 'int' })
  public dShipment_id: number;

  //Muchos a Uno
  @ManyToOne(() => OrderLine, (orderLine) => orderLine.deliveryShipments)
  @JoinColumn({ name: 'dShipment_id' })
  public orderLine: OrderLine;

  @Column({ name: 'deliveryPack_id', type: 'int' })
  public deliveryPack_id: number;

  //mucho a uno chooseDeliveryPackage
  @OneToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.deliveryShipments,
  )
  @JoinColumn({ name: 'deliveryPack_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //uno a uno DeliveryShipment
  @Column({ name: 'shipmentVolumePack_id', type: 'int' })
  public shipmentVolumePack_id: number;
  @OneToOne(
    () => StockShipmentVolume,
    (StockShipmentVolume) => StockShipmentVolume.deliveryShipments,
  )
  @JoinColumn({ name: 'shipmentVolumePack_id' })
  public StockShipmentVolume: StockShipmentVolume;

  //uno a uno StockShipmentTracking - DeliveryShipment
  @Column({ name: 'Tracking_id', type: 'int' })
  public Tracking_id: number;

  @OneToOne(
    () => StockShipmentTracking,
    (StockShipmentTracking) => StockShipmentTracking.deliveryShipments,
  )
  @JoinColumn({ name: 'Tracking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  //uno a uno StockShipmentReturn - DeliveryShipment
  @Column({ name: 'Return_id', type: 'int' })
  public Return_id: number;

  @OneToOne(
    () => StockShipmentReturn,
    (StockShipmentReturn) => StockShipmentReturn.deliveryShipments,
  )
  @JoinColumn({ name: 'Return_id' })
  public stockShipmentReturn: StockShipmentReturn;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryShipment>) {
    Object.assign(this, data);
  }
}
