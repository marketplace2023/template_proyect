import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'stock_picking_package_line' })
export class StockPickingPackageLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_id', type: 'int' })
  public picking_id: number;

  @Column({ name: 'package_id', type: 'int' })
  public package_id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'product_uom_qty', type: 'int' })
  public product_uom_qty: number;

  @Column({ name: 'product_uom', type: 'varchar' })
  public product_uom: string;

  @Column({ name: 'product_description', type: 'varchar' })
  public product_description: string;

  @Column({ name: 'product_barcode', type: 'varchar' })
  public product_barcode: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<StockPickingPackageLine>) {
    Object.assign(this, data);
  }
}
