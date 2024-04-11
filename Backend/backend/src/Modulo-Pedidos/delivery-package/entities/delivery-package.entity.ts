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
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_package' })
export class DeliveryPackage {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'weight', type: 'float' })
  public weight: number;

  @Column({ name: 'dimensions', type: 'varchar' })
  public dimensions: string;

  @Column({ name: 'content', type: 'varchar' })
  public content: string;

  @Column({ name: 'value', type: 'float' })
  public value: number;

  @Column({ name: 'shipment_id', type: 'int' })
  public shipment_id: number;

  //Uno a Mucho ChooseDeliveryCarrier
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.deliveryPackage,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier[];

  //One a One chooseDeliveryPackage
  @Column({ name: 'chooseDeliveryPackage_id', type: 'int' })
  public chooseDeliveryPackage_id: number;

  @OneToOne(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.deliveryPackages,
  )
  @JoinColumn({ name: 'chooseDeliveryPackage_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  //-----------order-line-----------
  // Mucho a uno con orderline
  @Column({ name: 'dPackage_id', type: 'int' })
  public dPackage_id: number;

  //Muchos a Uno
  @ManyToOne(() => OrderLine, (orderLine) => orderLine.deliveryPackages)
  @JoinColumn({ name: 'dPackage_id' })
  public orderLine: OrderLine;

  //uno a uno DeliveryPackage
  @OneToOne(
    () => StockShipmentWeight,
    (StockShipmentWeight) => StockShipmentWeight.deliveryPackages,
  )
  @JoinColumn({ name: 'shipment_id' })
  public StockShipmentWeight: StockShipmentWeight;

  //uno a uno DeliveryPackage
  @Column({ name: 'shipmentVolume_id', type: 'int' })
  public shipmentVolume_id: number;
  @OneToOne(
    () => StockShipmentVolume,
    (StockShipmentVolume) => StockShipmentVolume.deliveryPackages,
  )
  @JoinColumn({ name: 'shipmentVolume_id' })
  public StockShipmentVolume: StockShipmentVolume;

  //uno a uno StockShipmentTracking - DeliveryPackage
  @Column({ name: 'Tracking_id', type: 'int' })
  public Tracking_id: number;

  @OneToOne(
    () => StockShipmentTracking,
    (StockShipmentTracking) => StockShipmentTracking.deliveryPackages,
  )
  @JoinColumn({ name: 'Tracking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  //Mucho a Uno choosedeliveryCarrier - stock.shipment.return
  @Column({ name: 'package_id', type: 'int' })
  public package_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.DeliveryPackages,
  )
  @JoinColumn({ name: 'package_id' })
  public stockShipmentReturn: StockShipmentReturn;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryPackage>) {
    Object.assign(this, data);
  }
}
