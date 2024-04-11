import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_wizard_invite' })
export class MailWizardInvite {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'res_model', type: 'varchar' })
  public res_model: string;

  @Column({ name: 'message', type: 'varchar' })
  public message: string;

  @Column({ name: 'send_mail', type: 'tinyint' })
  public send_mail: Boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailWizardInvite>) {
    Object.assign(this, data);
  }
}
