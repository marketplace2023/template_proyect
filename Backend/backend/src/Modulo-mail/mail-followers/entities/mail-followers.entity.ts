import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_followers' })
export class MailFollowers {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'res_model', type: 'varchar', length: 255 })
  public res_model: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailFollowers>) {
    Object.assign(this, data);
  }
}
