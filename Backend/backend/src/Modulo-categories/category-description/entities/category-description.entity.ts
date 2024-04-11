import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'category_description' })
export class CategoryDescription {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @Column({ name: 'language_id', type: 'int' })
  public language_id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<CategoryDescription>) {
    Object.assign(this, data);
  }
}
