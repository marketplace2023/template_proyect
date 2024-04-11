import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockPickingTracking } from 'src/Modulo-Envio/stock-picking-tracking/entities/stock-picking-tracking.entity';
import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
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

@Entity({ name: 'choose_delivery_package' })
export class ChooseDeliveryPackage {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'delivery_package_type_id', type: 'int' })
  public delivery_package_type_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'shipping_weight', type: 'varchar' })
  public shipping_weight: string;

  //Uno a Mucho chooseDeliveryCarrier
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (ChooseDeliveryCarrier) => ChooseDeliveryCarrier.chooseDeliveryPackage,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier[];

  //uno a uno deliveryPackage
  @OneToOne(
    () => DeliveryPackage,
    (deliveryPackage) => deliveryPackage.chooseDeliveryPackage,
  )
  public deliveryPackages: DeliveryPackage;

  //uno a mucho deliveryShipment
  @OneToMany(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.chooseDeliveryPackage,
  )
  public deliveryShipments: DeliveryShipment[];

  //uno a mucho stockPickingLine
  @OneToMany(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.chooseDeliveryPackage,
  )
  public stockPickingLines: StockPickingLine[];

  //uno a mucho stockShipmentWeight
  @OneToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.chooseDeliveryPackage,
  )
  public stockShipmentWeights: StockShipmentWeight;

  //uno a mucho stockShipmentvolume
  @OneToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.chooseDeliveryPackage,
  )
  public stockShipmentVolumes: StockShipmentVolume;

  //uno a mucho stockShipmentTracking
  @OneToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.chooseDeliveryPackage,
  )
  public stockShipmentTrackings: StockShipmentTracking;

  //uno a mucho stockPickingTracking
  @OneToOne(
    () => StockPickingTracking,
    (stockPickingTracking) => stockPickingTracking.chooseDeliveryPackage,
  )
  public stockPickingTrackings: StockPickingTracking;

  //-----------order-line-----------
  // Mucho a uno con orderline
  @Column({ name: 'chooseDeliveryPackage_id', type: 'int' })
  public chooseDeliveryPackage_id: number;

  //Muchos a Uno
  @ManyToOne(() => OrderLine, (orderLine) => orderLine.chooseDeliveryPackages)
  @JoinColumn({ name: 'chooseDeliveryPackage_id' })
  public orderLine: OrderLine;

  //--------------choose-delivery-package-----------------
  @Column({ name: 'stock_shipment_weight_id', type: 'int' })
  public stock_shipment_weight_id: number;

  //Muchos a Uno StockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'stock_shipment_weight_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Mucho a Uno choosedeliverypackage - stock.shipment.return
  @Column({ name: 'stock_return_id', type: 'int' })
  public stock_return_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.chooseDeliveryPackages,
  )
  @JoinColumn({ name: 'stock_return_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno chooseDeliveryPackage - stock.shipment.tracking
  @Column({ name: 'chooseDpackage_tranking_id', type: 'int' })
  public chooseDpackage_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.chooseDeliveryPackage,
  )
  @JoinColumn({ name: 'chooseDpackage_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ChooseDeliveryPackage>) {
    Object.assign(this, data);
  }
}
