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

@Entity({ name: 'ir_rule' })
export class IrRule {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'model_id', type: 'int' })
  public model_id: number;

  @Column({ name: 'domain', type: 'varchar' })
  public domain: string;

  @Column({ name: 'groups', type: 'int' })
  public groups: number;

  @Column({ name: 'users', type: 'int' })
  public users: number;

  @Column({ name: 'conditions', type: 'varchar' })
  public conditions: string;

  @Column({ name: 'effect', type: 'varchar' })
  public effect: string;

  //------------------------------------------------------------
  //Muchos a Uno ResGroups
  @ManyToOne(() => ResGroups, (group) => group.IrRule)
  @JoinColumn({ name: 'groups' })
  public group: ResGroups;
  //------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<IrRule>) {
    Object.assign(this, data);
  }
}
