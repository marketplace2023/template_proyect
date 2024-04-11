import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_users_settings_volumes' })
export class ResUsersSettingsVolumes {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'user_setting_id', type: 'int' })
  public readonly user_setting_id: number;

  @Column({ name: 'user_id', type: 'int' })
  public readonly user_id: number;

  //Uno a Uno ResUsers
  @OneToOne(() => ResUsers, (user) => user.usersSettingsVolume)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  @Column({ name: 'partner_id', type: 'int' })
  public readonly partner_id: number;

  @Column({ name: 'guest_id', type: 'int' })
  public readonly guest_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public readonly create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public readonly write_uid: number;

  @Column({ name: 'volume', type: 'double' })
  public readonly volume: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResUsersSettingsVolumes>) {
    Object.assign(this, data);
  }
}
