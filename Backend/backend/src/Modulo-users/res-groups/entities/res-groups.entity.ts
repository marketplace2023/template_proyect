import { IrModelAccessGroupsRel } from 'src/Modulo-users/ir-model-access-groups-rel/entities/ir-model-access-groups-rel.entity';
import { IrModelAccess } from 'src/Modulo-users/ir-model-access/entities/ir-model-access.entity';
import { IrRule } from 'src/Modulo-users/ir-rule/entities/ir-rule.entity';
import { ResGroupsImpliedIds } from 'src/Modulo-users/res-groups-implied-ids/entities/res-groups-implied-ids.entity';
import { ResGroupsRules } from 'src/Modulo-users/res-groups-rules/entities/res-groups-rules.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_groups' })
export class ResGroups {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 225 })
  public name: string;

  @Column({ name: 'category_id', type: 'int' })
  public category_id: number;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'create_uid', type: 'date' })
  public create_uid: Date;

  @Column({ name: 'write_uid', type: 'date' })
  public write_uid: Date;

  @Column({ name: 'comment', type: 'varchar', length: 225 })
  public comment: string;

  @Column({ name: 'share', type: 'int' })
  public share: number;

  //------------------------------------------------------------
  //Uno a Mucho ResGroupsRules
  @OneToMany(() => ResGroupsRules, (groupsRules) => groupsRules.groups)
  public groupsRules: ResGroupsRules;

  //Uno a Mucho Rescurrency
  @OneToMany(() => ResGroupsImpliedIds, (groupsImplied) => groupsImplied.group)
  public groupsImplieds: ResGroupsImpliedIds;

  //Uno a Mucho IrModelAccess
  @OneToMany(() => IrModelAccess, (irModelAccess) => irModelAccess.group)
  public irModelAccess: IrModelAccess;

  //Uno a Mucho IrModelAccessGroupsRel
  @OneToMany(
    () => IrModelAccessGroupsRel,
    (irModelAccessGroupsRel) => irModelAccessGroupsRel.group,
  )
  public IrModelAccessGroupsRel: IrModelAccessGroupsRel;

  //Uno a Mucho IrRule
  @OneToMany(() => IrRule, (irRule) => irRule.group)
  public IrRule: IrRule;
  //------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResGroups>) {
    Object.assign(this, data);
  }
}
