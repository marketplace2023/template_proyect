import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product_product_stock_track_confirmation_rel' })
export class ProductProductStockTrackConfirmationRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_id', type: 'int' })
  public product_id: number;

  @Column({ name: 'stock_track_confirmation_id', type: 'int' })
  public stock_track_confirmation_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductProductStockTrackConfirmationRel>) {
    Object.assign(this, data);
  }
}
