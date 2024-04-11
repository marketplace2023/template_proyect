import { ResGroups } from 'src/Modulo-users/res-groups/entities/res-groups.entity';
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

@Entity({ name: 'res_groups_implied_ids' })
export class ResGroupsImpliedIds {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'group_id', type: 'int' })
  public group_id: number;

  @Column({ name: 'implied_id', type: 'int' })
  public implied_id: number;

  //----------------------------------------------------------------
  //Muchos a Uno ResPatner
  @ManyToOne(() => ResGroups, (group) => group.groupsImplieds)
  @JoinColumn({ name: 'group_id' })
  public group: ResGroups;
  //----------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResGroupsImpliedIds>) {
    Object.assign(this, data);
  }
}
