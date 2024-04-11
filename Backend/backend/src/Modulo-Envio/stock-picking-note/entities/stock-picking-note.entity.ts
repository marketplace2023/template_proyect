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

@Entity({ name: 'stock_picking_note' })
export class StockPickingNote {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'note', type: 'varchar' })
  public note: string;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_picking_note_id', type: 'int' })
  public stock_picking_note_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockPickingNotes,
  )
  @JoinColumn({ name: 'stock_picking_note_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockPickingNotes,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno stockPickingNote - stock.shipment.return
  @Column({ name: 'stockShNote_id', type: 'int' })
  public stockShNote_id_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockPickingNotes,
  )
  @JoinColumn({ name: 'stockShNote_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockPickingNote - stock.shipment.tracking
  @Column({ name: 'stock_tranking_id', type: 'int' })
  public stock_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockPickingNotes,
  )
  @JoinColumn({ name: 'stock_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingNote>) {
    Object.assign(this, data);
  }
}
