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

@Entity({ name: 'rating_vote' })
export class RatingVote {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'vote_date', type: 'date' })
  public vote_date: Date;

  @Column({ name: 'rated_object', type: 'varchar' })
  public rated_object: string;

  @Column({ name: 'rating_scale', type: 'int' })
  public rating_scale: number;

  @Column({ name: 'user', type: 'int' })
  public user: number;

  @Column({ name: 'rating_value', type: 'int' })
  public rating_value: number;

  @Column({ name: 'feedback', type: 'varchar' })
  public feedback: string;

  @Column({ name: 'rating_id', type: 'int' })
  public rating_id: number;

  @ManyToOne(() => RatingRating, (ratingRating) => ratingRating.ratingVotes)
  @JoinColumn({ name: 'rating_id' })
  public ratingRating: RatingRating;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<RatingVote>) {
    Object.assign(this, data);
  }
}
