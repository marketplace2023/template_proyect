import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_activity_type' })
export class MailActivityType {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'delay_count', type: 'int' })
  public delay_count: number;

  @Column({ name: 'triggered_next_type_id', type: 'int' })
  public triggered_next_type_id: number;

  @Column({ name: 'default_user_id', type: 'int' })
  public default_user_id: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'delay_unit', type: 'varchar' })
  public delay_unit: string;

  @Column({ name: 'delay_from', type: 'varchar' })
  public delay_from: string;

  @Column({ name: 'icon', type: 'varchar' })
  public icon: string;

  @Column({ name: 'decoration_type', type: 'varchar' })
  public decoration_type: string;

  @Column({ name: 'res_model', type: 'varchar' })
  public res_model: string;

  @Column({ name: 'chaining_type', type: 'varchar' })
  public chaining_type: string;

  @Column({ name: 'category', type: 'varchar' })
  public category: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'summary', type: 'varchar' })
  public summary: string;

  @Column({ name: 'default_note', type: 'varchar' })
  public default_note: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailActivityType>) {
    Object.assign(this, data);
  }
}
