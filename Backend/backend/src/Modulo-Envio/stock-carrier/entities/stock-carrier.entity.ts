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

@Entity({ name: 'stock_carrier' })
export class StockCarrier {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'website', type: 'varchar' })
  public website: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'pricelist_id', type: 'int' })
  public pricelist_id: number;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_carrier_id', type: 'int' })
  public stock_carrier_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockCarriers,
  )
  @JoinColumn({ name: 'stock_carrier_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockCarriers,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno stockcarrier - stock.shipment.return
  @Column({ name: 'stockcarrier_id', type: 'int' })
  public stockcarrier_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockcarriers,
  )
  @JoinColumn({ name: 'stockcarrier_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockCarrier - stock.shipment.tracking
  @Column({ name: 'stock_tranking_id', type: 'int' })
  public stock_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockCarriers,
  )
  @JoinColumn({ name: 'stock_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockCarrier>) {
    Object.assign(this, data);
  }
}
