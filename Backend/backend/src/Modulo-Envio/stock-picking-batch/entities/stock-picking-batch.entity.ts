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

@Entity({ name: 'stock_picking_batch' })
export class StockPickingBatch {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'date_expected', type: 'int' })
  public date_expected: number;

  @Column({ name: 'location_id', type: 'int' })
  public location_id: number;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_picking_batch_id', type: 'int' })
  public stock_picking_batch_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockPickingBatchs,
  )
  @JoinColumn({ name: 'stock_picking_batch_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockPickingBatchs,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno stockPickingBatch - stock.shipment.return
  @Column({ name: 'stockShBatch_id', type: 'int' })
  public stockShBatch_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockPickingBatchs,
  )
  @JoinColumn({ name: 'stockShBatch_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockPickingBatch - stock.shipment.tracking
  @Column({ name: 'stock_tranking_id', type: 'int' })
  public stock_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockPickingBatchs,
  )
  @JoinColumn({ name: 'stock_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingBatch>) {
    Object.assign(this, data);
  }
}
