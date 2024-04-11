import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_tracking_event' })
export class DeliveryTrackingEvent {
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

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'delivery_tracking_event_id', type: 'int' })
  public delivery_tracking_event_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.deliveryTrackingEvents,
  )
  @JoinColumn({ name: 'delivery_tracking_event_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.deliveryTrackingEvents,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno deliveryTrackingEvent - stock.shipment.return
  @Column({ name: 'tranck_event_id', type: 'int' })
  public tranck_event_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.DeliveryTrackingEvents,
  )
  @JoinColumn({ name: 'tranck_event_id' })
  public stockShipmentReturn: StockShipmentReturn;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryTrackingEvent>) {
    Object.assign(this, data);
  }
}
