import { RatingRating } from 'src/Modulo-rating/rating-rating/entities/rating-rating.entity';
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

@Entity({ name: 'rating_scale' })
export class RatingScale {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'ratingValues', type: 'int' })
  public ratingValues: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'company', type: 'varchar' })
  public company: string;

  @Column({ name: 'rating_id', type: 'int' })
  public rating_id: number;

  @ManyToOne(() => RatingRating, (ratingRating) => ratingRating.ratingScales)
  @JoinColumn({ name: 'rating_id' })
  public ratingRating: RatingRating;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<RatingScale>) {
    Object.assign(this, data);
  }
}
