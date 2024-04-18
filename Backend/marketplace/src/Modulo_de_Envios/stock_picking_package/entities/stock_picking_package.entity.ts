import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'stock_picking_package' })
  export class StockPickingPackage {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'picking_id', type: 'int' })
    public picking_id: number;
  
    @Column({ name: 'package_type', type: 'int' })
    public package_type: number;
  
    @Column({ name: 'weight', type: 'float' })
    public weight: number;
  
    @Column({ name: 'volume', type: 'float' })
    public volume: number;
  
    @Column({ name: 'barcode', type: 'varchar' })
    public barcode: string;
  
    @Column({ name: 'tracking_number', type: 'varchar' })
    public tracking_number: string;
  
    @Column({ name: 'state', type: 'varchar' })
    public state: string;
  
    @Column({ name: 'shipment_id', type: 'int' })
    public shipment_id: number;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<StockPickingPackage>) {
      Object.assign(this, data);
    }
  }
  