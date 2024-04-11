import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'crm_tag_category' })
export class CrmTagCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'color', type: 'varchar' })
  public color: string;

  @Column({ name: 'icon', type: 'varchar' })
  public icon: string;

  @Column({ name: 'website_published', type: 'tinyint' })
  public website_published: boolean;

  @Column({ name: 'description', type: 'varchar' })
  public description: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<CrmTagCategory>) {
    Object.assign(this, data);
  }
}
