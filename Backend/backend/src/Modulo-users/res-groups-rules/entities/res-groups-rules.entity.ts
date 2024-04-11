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

@Entity({ name: 'res_groups_rules' })
export class ResGroupsRules {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'group_id', type: 'int' })
  public readonly group_id: number;

  @Column({ name: 'model_id', type: 'int' })
  public readonly model_id: number;

  @Column({ name: 'domain', type: 'varchar', length: 225 })
  public readonly domain: string;

  @Column({ name: 'groups', type: 'int' })
  public readonly groups: number;

  @Column({ name: 'users', type: 'int' })
  public readonly users: number;

  @Column({ name: 'conditions', type: 'varchar', length: 225 })
  public readonly conditions: string;

  @Column({ name: 'effect', type: 'varchar', length: 225 })
  public readonly effect: string;

  //------------------------------------------------------------------
  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.groupsRules)
  @JoinColumn({ name: 'users' })
  public user: ResUsers;

  //Muchos a Uno ResGroups
  @ManyToOne(() => ResGroups, (group) => group.groupsRules)
  @JoinColumn({ name: 'group_id' })
  public group: ResGroups;

  //------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResGroupsRules>) {
    Object.assign(this, data);
  }
}
