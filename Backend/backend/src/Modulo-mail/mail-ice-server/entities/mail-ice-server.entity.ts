import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_ice_server' })
export class MailIceServer {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'server_type', type: 'varchar', length: 255 })
  public server_type: string;

  @Column({ name: 'uri', type: 'varchar', length: 255 })
  public uri: string;

  @Column({ name: 'username', type: 'varchar', length: 255 })
  public username: string;

  @Column({ name: 'credential', type: 'varchar', length: 255 })
  public credential: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailIceServer>) {
    Object.assign(this, data);
  }
}
