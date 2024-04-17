import { ResGroups } from 'src/Modulo-users/res-groups/entities/res-groups.entity';
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

@Entity({ name: 'res_users_log' })
export class ResUsersLog {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public readonly create_uid: number;

  @Column({ name: 'model', type: 'varchar', length: 255 })
  public readonly model: string;

  @Column({ name: 'record_id', type: 'int' })
  public readonly record_id: number;

  @Column({ name: 'action', type: 'varchar', length: 255 })
  public readonly action: string;

  @Column({ name: 'field_name', type: 'varchar', length: 255 })
  public readonly field_name: string;

  @Column({ name: 'old_value', type: 'varchar', length: 255 })
  public readonly old_value: string;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.usersLogs)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResUsersLog>) {
    Object.assign(this, data);
  }
}
