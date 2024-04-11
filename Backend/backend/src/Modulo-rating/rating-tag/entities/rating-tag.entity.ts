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

@Entity({ name: 'rating_tag' })
export class RatingTag {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'rating_id', type: 'int' })
  public rating_id: number;

  @ManyToOne(() => RatingRating, (ratingRating) => ratingRating.ratingTags)
  @JoinColumn({ name: 'rating_id' })
  public ratingRating: RatingRating;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<RatingTag>) {
    Object.assign(this, data);
  }
}
