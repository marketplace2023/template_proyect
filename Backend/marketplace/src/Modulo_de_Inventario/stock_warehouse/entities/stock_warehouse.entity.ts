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

@Entity({ name: 'stock_warehouse' })
export class StockWarehouse {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'active', type: 'int' })
  public active: boolean;

  @Column({ name: 'street', type: 'varchar' })
  public street: string;

  @Column({ name: 'city', type: 'varchar' })
  public city: string;

  @Column({ name: 'state_id', type: 'int' })
  public state_id: number;

  @Column({ name: 'country_id', type: 'int' })
  public country_id: number;

  @Column({ name: 'zip', type: 'int' })
  public zip: string;

  @Column({ name: 'phone', type: 'varchar' })
  public phone: string;

  @Column({ name: 'fax', type: 'varchar' })
  public fax: string;

  @Column({ name: 'email', type: 'varchar' })
  public email: string;

  @Column({ name: 'website', type: 'varchar' })
  public website: string;

  @Column({ name: 'warehouse_type', type: 'varchar' })
  public warehouse_type: string;

  @Column({ name: 'account_picking_id', type: 'int' })
  public account_picking_id: number;

  @Column({ name: 'account_picking_out_id', type: 'int' })
  public account_picking_out_id: number;

  @Column({ name: 'account_picking_in_id', type: 'int' })
  public account_picking_in_id: number;

  //--------------stockShipmentWeight-----------------
  @Column({ name: 'stock_warehouse_id', type: 'int' })
  public stock_warehouse_id: number;

  //Muchos a Uno stockShipmentWeight
  @ManyToOne(
    () => StockShipmentWeight,
    (stockShipmentWeight) => stockShipmentWeight.stockWarehouses,
  )
  @JoinColumn({ name: 'stock_warehouse_id' })
  public stockShipmentWeight: StockShipmentWeight;

  //Muchos a Uno StockShipmentVolume
  @Column({ name: 'stock_volume_id', type: 'int' })
  public stock_volume_id: number;

  @ManyToOne(
    () => StockShipmentVolume,
    (stockShipmentVolume) => stockShipmentVolume.stockWarehouses,
  )
  @JoinColumn({ name: 'stock_volume_id' })
  public stockShipmentVolume: StockShipmentVolume;

  //Mucho a Uno stockWarehouse - stock.shipment.return
  @Column({ name: 'warehouse_id', type: 'int' })
  public warehouse_id: number;

  @ManyToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.stockWarehouses,
  )
  @JoinColumn({ name: 'warehouse_id' })
  public stockShipmentReturn: StockShipmentReturn;

  //Mucho a Uno stockWarehouse - stock.shipment.tracking
  @Column({ name: 'stock_tranking_id', type: 'int' })
  public stock_tranking_id: number;

  @ManyToOne(
    () => StockShipmentTracking,
    (stockShipmentTracking) => stockShipmentTracking.stockWarehouses,
  )
  @JoinColumn({ name: 'stock_tranking_id' })
  public stockShipmentTracking: StockShipmentTracking;

  //Mucho a Uno stockWarehouse - stockPickingLine
  @Column({ name: 'stock_picking_line_id', type: 'int' })
  public stock_picking_line_id: number;

  @ManyToOne(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.stockWarehouses,
  )
  @JoinColumn({ name: 'stock_picking_line_id' })
  public stockPickingLines: StockPickingLine;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockWarehouse>) {
    Object.assign(this, data);
  }
}
