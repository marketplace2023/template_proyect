import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_bank' })
export class ResBank {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'state', type: 'int' })
  public state: number;

  @Column({ name: 'country', type: 'int' })
  public country: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'street', type: 'varchar', length: 255 })
  public street: string;

  @Column({ name: 'street2', type: 'varchar', length: 255 })
  public street2: string;

  @Column({ name: 'zip', type: 'varchar', length: 255 })
  public zip: string;

  @Column({ name: 'city', type: 'varchar', length: 255 })
  public city: string;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  public email: string;

  @Column({ name: 'phone', type: 'varchar', length: 255 })
  public phone: string;

  @Column({ name: 'bic', type: 'varchar', length: 255 })
  public bic: string;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  //--------------------------------------------------------------
  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.banks)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;
  //--------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResBank>) {
    Object.assign(this, data);
  }
}
