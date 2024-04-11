import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'delivery_method' })
export class DeliveryMethod {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @Column({ name: 'price', type: 'float' })
  public price: number;

  @Column({ name: 'carrier_id', type: 'int' })
  public carrier_id: number;

  @Column({ name: 'active', type: 'int' })
  public active: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<DeliveryMethod>) {
    Object.assign(this, data);
  }
}
