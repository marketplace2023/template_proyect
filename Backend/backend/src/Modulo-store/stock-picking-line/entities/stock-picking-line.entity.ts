import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockLocation } from 'src/Modulo-Envio/stock-location/entities/stock-location.entity';
import { StockWarehouse } from 'src/Modulo-Envio/stock-warehouse/entities/stock-warehouse.entity';
import { AccountMove } from 'src/Modulo-store/account-move/entities/account-move.entity';
import { SaleOrderLine } from 'src/Modulo-store/sale-order-line/entities/sale-order-line.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
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

@Entity({ name: 'stock_picking_line' })
export class StockPickingLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'location_id', type: 'int' })
  public location_id: number;

  @Column({ name: 'product_uom_qty', type: 'int' })
  public product_uom_qty: number;

  @Column({ name: 'location_dest_id', type: 'int' })
  public location_dest_id: number;

  @Column({ name: 'lot_id', type: 'int' })
  public lot_id: number;

  @Column({ name: 'serial_number', type: 'varchar' })
  public serial_number: string;

  @Column({ name: 'state', type: 'tinyint' })
  public state: boolean;

  @Column({ name: 'move_id', type: 'int' })
  public move_id: number;

  @Column({ name: 'picking_type_id', type: 'int' })
  public picking_type_id: number;

  @Column({ name: 'notes', type: 'tinyint' })
  public notes: boolean;

  @Column({ name: 'package_id', type: 'int' })
  public package_id: number[];

  //MUCHO A UNO CON CHOOSEDELIVERYPACKAGE
  @ManyToOne(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.stockPickingLines,
  )
  @JoinColumn({ name: 'package_id' })
  public chooseDeliveryPackage: ChooseDeliveryPackage;

  @Column({ name: 'stock_picking_line_id', type: 'int' })
  public stock_picking_line_id: number;

  //Uno a Uno Products
  @OneToOne(() => OrderLine, (orderLine) => orderLine.stockPickingLines)
  @JoinColumn({ name: 'stock_picking_line_id' })
  public orderLine: OrderLine;

  //Uno a Mucho StockLocation - stockPickingLines
  @OneToMany(
    () => StockLocation,
    (stockLocation) => stockLocation.stockPickingLines,
  )
  public stockLocations: StockLocation;

  //Uno a Mucho StockWarehouse - stockPickingLines
  @OneToMany(
    () => StockWarehouse,
    (stockWarehouse) => stockWarehouse.stockPickingLines,
  )
  public stockWarehouses: StockWarehouse;

  //--------------------------------------------------------------------
  @Column({ name: 'sale_picking_line_id', type: 'int' })
  public sale_picking_line_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.stockPickingTypes)
  @JoinColumn({ name: 'sale_picking_line_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------

  //------------------tienda-----------------------
  //Uno a Mucho accountMove --  stockPicking
  @OneToMany(() => AccountMove, (accountMove) => accountMove.stockPickingLines)
  public accountMoves: AccountMove;

  //mucho a uno con saleorderline
  @Column({ name: 'saleOrder_id', type: 'int' })
  public saleOrder_id: number;

  @ManyToOne(
    () => SaleOrderLine,
    (saleOrderLine) => saleOrderLine.stockPickingLines,
  )
  @JoinColumn({ name: 'saleOrder_id' })
  public saleOrderLines: SaleOrderLine;

  @Column({ name: 'stockpline_id', type: 'int' })
  public stockpline_id: number;

  @ManyToOne(
    () => StockPickingType,
    (stockPickingType) => stockPickingType.stockPickingLines,
  )
  @JoinColumn({ name: 'stockpline_id' })
  public stockPickingTypes: StockPickingType;

  //-------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingLine>) {
    Object.assign(this, data);
  }
}
