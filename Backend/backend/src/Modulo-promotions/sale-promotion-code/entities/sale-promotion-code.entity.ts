import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'sale_promotion_code' })
export class SalePromotionCode {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'promotion_template_id', type: 'int' })
  public promotion_template_id: number;

  @Column({ name: 'use_limit', type: 'int' })
  public use_limit: number;

  @Column({ name: 'used_count', type: 'int' })
  public used_count: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SalePromotionCode>) {
    Object.assign(this, data);
  }
}
