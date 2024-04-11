import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { StockPickingTracking } from 'src/Modulo-Envio/stock-picking-tracking/entities/stock-picking-tracking.entity';
import { StockShipmentReturn } from 'src/Modulo-Envio/stock-shipment-return/entities/stock-shipment-return.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { AccountInvoice } from 'src/Modulo-store/account-invoice/entities/account-invoice.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
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

@Entity({ name: 'order_line' })
export class OrderLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'order_id', type: 'int' })
  public order_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'product_uom_qty', type: 'float' })
  public product_uom_qty: number;

  @Column({ name: 'price_unit', type: 'float' })
  public price_unit: number;

  @Column({ name: 'discount', type: 'float' })
  public discount: number;

  @Column({ name: 'tax_ids', type: 'int' })
  public tax_ids: number;

  @Column({ name: 'shipment_ids', type: 'int' })
  public shipment_ids: number;
  //-----------------------RELACIONES-------------------------------
  //uno a mucho ChooseDeliveryPackage
  @OneToMany(
    () => ChooseDeliveryPackage,
    (chooseDeliveryPackage) => chooseDeliveryPackage.orderLine,
  )
  public chooseDeliveryPackages: ChooseDeliveryPackage[];

  //uno a mucho ChooseDeliveryCarrier
  @OneToMany(
    () => ChooseDeliveryCarrier,
    (chooseDeliveryCarrier) => chooseDeliveryCarrier.orderLine,
  )
  public chooseDeliveryCarriers: ChooseDeliveryCarrier[];

  //uno a mucho DeliveryCarrier
  @OneToMany(
    () => DeliveryCarrier,
    (deliveryCarrier) => deliveryCarrier.orderLine,
  )
  public deliveryCarriers: DeliveryCarrier[];

  //uno a mucho DeliveryPackage
  @OneToMany(
    () => DeliveryPackage,
    (deliveryPackage) => deliveryPackage.orderLine,
  )
  public deliveryPackages: DeliveryPackage[];

  //uno a mucho DeliveryShipment
  @OneToMany(
    () => DeliveryShipment,
    (deliveryShipment) => deliveryShipment.orderLine,
  )
  public deliveryShipments: DeliveryShipment[];

  //uno a UNO stock.picking.line
  @OneToOne(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.orderLine,
  )
  public stockPickingLines: StockPickingLine;

  //uno a UNO stock.move
  @OneToOne(
    () => StockMove,
    (stockMoveStockMove) => stockMoveStockMove.orderLine,
  )
  public stockMoves: StockMove;

  //uno a UNO stock.picking
  @OneToOne(() => StockPicking, (stockPicking) => stockPicking.orderLine)
  public stockPickings: StockPicking;

  //uno a UNO stockShipmentReturn
  @OneToOne(
    () => StockShipmentReturn,
    (stockShipmentReturn) => stockShipmentReturn.orderLine,
  )
  public stockShipmentReturns: StockShipmentReturn;

  //uno a UNO stock.picking.tracking
  @OneToOne(
    () => StockPickingTracking,
    (stockPickingTracking) => stockPickingTracking.orderLine,
  )
  public stockPickingTrackings: StockPickingTracking;

  //Mucho a Uno orderLine - stockMove
  @Column({ name: 'stock_move_orderLine_id', type: 'int' })
  public stock_move_orderLine_id: number;

  @ManyToOne(() => StockMove, (stockMove) => stockMove.orderLines)
  @JoinColumn({ name: 'stock_move_orderLine_id' })
  public orderLines: StockMove;

  //-------------tienda---------------
  //Uno a Mucho accountInvoice --  orderLine
  @OneToMany(
    () => AccountInvoice,
    (accountInvoice) => accountInvoice.orderLines,
  )
  public accountInvoices: AccountInvoice;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<OrderLine>) {
    Object.assign(this, data);
  }
}
