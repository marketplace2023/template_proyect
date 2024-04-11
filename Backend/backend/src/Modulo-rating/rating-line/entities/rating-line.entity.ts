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

@Entity({ name: 'rating_line' })
export class RatingLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'rated_object', type: 'int' })
  public rated_object: number;

  @Column({ name: 'rating_scale', type: 'int' })
  public rating_scale: number;

  @Column({ name: 'rated_by', type: 'int' })
  public rated_by: number;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'rating_values', type: 'int' })
  public rating_values: number;

  @Column({ name: 'overall_rating', type: 'int' })
  public overall_rating: number;

  @Column({ name: 'rating_id', type: 'int' })
  public rating_id: number;

  @ManyToOne(() => RatingRating, (ratingRating) => ratingRating.ratingLines)
  @JoinColumn({ name: 'rating_id' })
  public ratingRating: RatingRating;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<RatingLine>) {
    Object.assign(this, data);
  }
}
