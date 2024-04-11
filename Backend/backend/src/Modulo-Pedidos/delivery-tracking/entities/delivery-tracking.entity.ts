import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
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

@Entity({ name: 'delivery_tracking' })
export class DeliveryTracking {
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
  @Column({ name: 'delivery_tracking_id', type: 'int' })
  public delivery_tracking_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.deliveryTrackings,
  )
  @JoinColumn({ name: 'delivery_tracking_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.deliveryTrackingHistorys,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //uno a uno StockShipmentTracking - DeliveryTracking
  @Column({ name: 'Tracking_id', type: 'int' })
  public Tracking_id: number;

  @OneToOne(
    () => StockShipmentTracking,
    (StockShipmentTracking) => StockShipmentTracking.deliveryTrackings,
  )
  @JoinColumn({ name: 'Tracking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  //Mucho a Uno deliveryTracking - stock.shipment.return
  @Column({ name: 'package_tranck_id', type: 'int' })
  public package_tranck_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.DeliveryTrackings,
  )
  @JoinColumn({ name: 'package_tranck_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno DELIVERYtRACKING - stockMove
  @Column({ name: 'stock_move_delivery_id', type: 'int' })
  public stock_move_delivery_id: number;

  @ManyToOne(() => StockMove, (stockMove) => stockMove.deliveryTrackings)
  @JoinColumn({ name: 'stock_move_delivery_id' })
  public stockMoves: StockMove;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryTracking>) {
    Object.assign(this, data);
  }
}
