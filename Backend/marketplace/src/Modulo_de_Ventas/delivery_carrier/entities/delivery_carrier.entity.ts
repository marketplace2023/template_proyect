import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
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
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_carrier' })
export class DeliveryCarrier {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  //Mucho a Uno choosedeliveryCarrier - stock.shipment.return
  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'sequence' })
  public stockShipmentReturn: StockShipmentReturn;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'product_ide', type: 'int' })
  public product_ide: number;

  @Column({ name: 'shipping_insurance', type: 'int' })
  public shipping_insurance: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'delivery_type', type: 'varchar' })
  public delivery_type: string;

  @Column({ name: 'integration_level', type: 'varchar' })
  public integration_level: string;

  @Column({ name: 'invoice_policy', type: 'varchar' })
  public invoice_policy: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'carrier_description', type: 'varchar' })
  public carrier_description: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'prod_environment', type: 'tinyint' })
  public prod_environment: boolean;

  @Column({ name: 'debug_logging', type: 'tinyint' })
  public debug_logging: boolean;

  @Column({ name: 'free_over', type: 'tinyint' })
  public free_over: boolean;

  @Column({ name: 'return_label_on_delivery', type: 'tinyint' })
  public return_label_on_delivery: boolean;

  @Column({ name: 'get_return_label_from_portal', type: 'tinyint' })
  public get_return_label_from_portal: boolean;

  @Column({ name: 'margin', type: 'varchar' })
  public margin: string;

  @Column({ name: 'amount', type: 'varchar' })
  public amount: string;

  @Column({ name: 'fixed_price', type: 'varchar' })
  public fixed_price: string;

  @Column({ name: 'website_id', type: 'int' })
  public website_id: number;

  @Column({ name: 'is_published', type: 'tinyint' })
  public is_published: boolean;

  @OneToOne(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.deliveryCarrier,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier;

  //-----------order-line-----------
  // Mucho a uno con orderline
  @Column({ name: 'dcarrier_id', type: 'int' })
  public dcarrier_id: number;

  //Muchos a Uno
  @ManyToOne(() => OrderLine, (orderLine) => orderLine.deliveryCarriers)
  @JoinColumn({ name: 'dcarrier_id' })
  public orderLine: OrderLine;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'delivery_carrier_id', type: 'int' })
  public delivery_carrier_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.deliveryCarriers,
  )
  @JoinColumn({ name: 'delivery_carrier_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.deliveryCarriers,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno DeliveryCarrier - stock.shipment.tracking
  @Column({ name: 'delivery_carrierTrack_id', type: 'int' })
  public delivery_carrierTrack_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.chooseDeliveryCarriers,
  )
  @JoinColumn({ name: 'delivery_carrierTrack_id' })
  public stockShipmentTrackings: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryCarrier>) {
    Object.assign(this, data);
  }
}
