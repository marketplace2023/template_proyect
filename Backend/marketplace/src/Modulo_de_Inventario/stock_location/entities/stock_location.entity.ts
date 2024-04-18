import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { StockShipmentTracking } from 'src/Modulo-Envio/stock-shipment-tracking/entities/stock-shipment-tracking.entity';
import { StockShipmentVolume } from 'src/Modulo-Envio/stock-shipment-volume/entities/stock-shipment-volume.entity';
import { StockShipmentWeight } from 'src/Modulo-Envio/stock-shipment-weight/entities/stock-shipment-weight.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
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

@Entity({ name: 'stock_location' })
export class StockLocation {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'location_type', type: 'varchar' })
  public location_type: string;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_location_id', type: 'int' })
  public stock_location_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockLocations,
  )
  @JoinColumn({ name: 'stock_location_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockLocations,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno stockLocation - stock.shipment.return
  @Column({ name: 'stockLocation_id', type: 'int' })
  public stockLocation_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockLocations,
  )
  @JoinColumn({ name: 'stockLocation_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockLocation - stock.shipment.tracking
  @Column({ name: 'stock_trancking_id', type: 'int' })
  public stock_trancking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockLocations,
  )
  @JoinColumn({ name: 'stock_trancking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  //Mucho a Uno stockLocation - stockPickingLine
  @Column({ name: 'stock_picking_line_id', type: 'int' })
  public stock_picking_line_id: number;

  @ManyToOne(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.stockLocations,
  )
  @JoinColumn({ name: 'stock_picking_line_id' })
  public stockPickingLines: StockPickingLine;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'active', type: 'varchar' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockLocation>) {
    Object.assign(this, data);
  }
}
