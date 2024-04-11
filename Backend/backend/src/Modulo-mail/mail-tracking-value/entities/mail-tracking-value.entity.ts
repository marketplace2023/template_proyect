import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_tracking_value' })
export class MailTrackingValue {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'field', type: 'int' })
  public field: number;

  @Column({ name: 'old_value_integer', type: 'int' })
  public old_value_integer: number;

  @Column({ name: 'new_value_integer', type: 'int' })
  public new_value_integer: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'mail_message_id', type: 'int' })
  public mail_message_id: number;

  @Column({ name: 'tracking_sequence', type: 'int' })
  public tracking_sequence: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'field_desc', type: 'varchar' })
  public field_desc: string;

  @Column({ name: 'field_type', type: 'varchar' })
  public field_type: string;

  @Column({ name: 'old_value_char', type: 'varchar' })
  public old_value_char: string;

  @Column({ name: 'new_value_char', type: 'varchar' })
  public new_value_char: string;

  @Column({ name: 'old_value_text', type: 'varchar' })
  public old_value_text: string;

  @Column({ name: 'new_value_text', type: 'varchar' })
  public new_value_text: string;

  @Column({ name: 'old_value_datetime', type: 'date' })
  public old_value_datetime: Date;

  @Column({ name: 'new_value_datetime', type: 'date' })
  public new_value_datetime: Date;

  @Column({ name: 'old_value_float', type: 'decimal' })
  public old_value_float: number;

  @Column({ name: 'old_value_monetary', type: 'decimal' })
  public old_value_monetary: number;

  @Column({ name: 'new_value_float', type: 'decimal' })
  public new_value_float: number;

  @Column({ name: 'new_value_monetary', type: 'decimal' })
  public new_value_monetary: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailTrackingValue>) {
    Object.assign(this, data);
  }
}
