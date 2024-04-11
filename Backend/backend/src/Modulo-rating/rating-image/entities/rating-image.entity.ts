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

@Entity({ name: 'rating_image' })
export class RatingImage {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'rating_id', type: 'int' })
  public rating_id: number;

  @Column({ name: 'image', type: 'varchar' })
  public image: string;

  @ManyToOne(() => RatingRating, (ratingRating) => ratingRating.ratingImages)
  @JoinColumn({ name: 'rating_id' })
  public ratingRating: RatingRating;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<RatingImage>) {
    Object.assign(this, data);
  }
}
