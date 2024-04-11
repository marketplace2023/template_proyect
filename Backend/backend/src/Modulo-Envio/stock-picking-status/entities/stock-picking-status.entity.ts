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
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'stock_picking_status' })
export class StockPickingStatus {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_picking_status_id', type: 'int' })
  public stock_picking_status_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockPickingStatuss,
  )
  @JoinColumn({ name: 'stock_picking_status_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockPickingStatus,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno stockPickingStatus - stock.shipment.return
  @Column({ name: 'stockShStatus_id', type: 'int' })
  public stockShStatus_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockPickingStatus,
  )
  @JoinColumn({ name: 'stockShStatus_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockPickingTracking - stock.shipment.tracking
  @Column({ name: 'stock_tranking_id', type: 'int' })
  public stock_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockPickingStatus,
  )
  @JoinColumn({ name: 'stock_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingStatus>) {
    Object.assign(this, data);
  }
}
