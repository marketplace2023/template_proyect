import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product_label_layout_product_template_rel' })
export class ProductLabelLayoutProductTemplateRel {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'product_label_layout_id', type: 'int' })
  public product_label_layout_id: number;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ProductLabelLayoutProductTemplateRel>) {
    Object.assign(this, data);
  }
}
