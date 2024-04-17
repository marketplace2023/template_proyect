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

@Entity({ name: 'ir_model_access' })
export class IrModelAccess {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'model_id', type: 'int' })
  public model_id: number;

  @Column({ name: 'group_id', type: 'int' })
  public group_id: number;

  @Column({ name: 'perm_read', type: 'tinyint' })
  public perm_read: boolean;

  @Column({ name: 'perm_write', type: 'tinyint' })
  public perm_write: boolean;

  @Column({ name: 'perm_create', type: 'tinyint' })
  public perm_create: boolean;

  @Column({ name: 'perm_unlink', type: 'tinyint' })
  public perm_unlink: boolean;

  @Column({ name: 'perm_admin', type: 'tinyint' })
  public perm_admin: boolean;

  //------------------------------------------------------------
  //Muchos a Uno ResGroups
  @ManyToOne(() => ResGroups, (group) => group.irModelAccess)
  @JoinColumn({ name: 'group_id' })
  public group: ResGroups;
  //------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<IrModelAccess>) {
    Object.assign(this, data);
  }
}
