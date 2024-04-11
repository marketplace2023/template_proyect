import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail_guest' })
export class MailGuest {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'country_id', type: 'int' })
  public country_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'access_token', type: 'varchar', length: 255 })
  public access_token: string;

  @Column({ name: 'lang', type: 'varchar', length: 255 })
  public lang: string;

  @Column({ name: 'timezone', type: 'varchar', length: 255 })
  public timezone: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<MailGuest>) {
    Object.assign(this, data);
  }
}
