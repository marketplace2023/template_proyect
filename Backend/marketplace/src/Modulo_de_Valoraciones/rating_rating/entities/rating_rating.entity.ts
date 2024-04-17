import { RatingImage } from 'src/Modulo-rating/rating-image/entities/rating-image.entity';
import { RatingLine } from 'src/Modulo-rating/rating-line/entities/rating-line.entity';
import { RatingScale } from 'src/Modulo-rating/rating-scale/entities/rating-scale.entity';
import { RatingTag } from 'src/Modulo-rating/rating-tag/entities/rating-tag.entity';
import { RatingVote } from 'src/Modulo-rating/rating-vote/entities/rating-vote.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'rating_rating' })
export class RatingRating {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'res_model_id', type: 'int' })
  public res_model_id: number;

  @Column({ name: 'res_id', type: 'int' })
  public res_id: number;

  @Column({ name: 'parent_res_model_id', type: 'int' })
  public parent_res_model_id: number;

  @Column({ name: 'parent_res_id', type: 'int' })
  public parent_res_id: number;

  @Column({ name: 'rated_partner_id', type: 'int' })
  public rated_partner_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'message_id', type: 'int' })
  public message_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'res_name', type: 'varchar' })
  public res_name: string;

  @Column({ name: 'res_model', type: 'varchar' })
  public res_model: string;

  @Column({ name: 'parent_res_name', type: 'varchar' })
  public parent_res_name: string;

  @Column({ name: 'parent_res_model', type: 'varchar' })
  public parent_res_model: string;

  @Column({ name: 'rating_text', type: 'varchar' })
  public rating_text: string;

  @Column({ name: 'access_token', type: 'varchar' })
  public access_token: string;

  @Column({ name: 'feedback', type: 'varchar' })
  public feedback: string;

  @Column({ name: 'is_internal', type: 'tinyint' })
  public is_internal: boolean;

  @Column({ name: 'consumed', type: 'tinyint' })
  public consumed: boolean;

  @Column({ name: 'rating', type: 'int' })
  public rating: number;

  @Column({ name: 'publisher_id', type: 'int' })
  public publisher_id: number;

  @Column({ name: 'publisher_comment', type: 'varchar' })
  public publisher_comment: string;

  @Column({ name: 'publisher_datetime', type: 'date' })
  public publisher_datetime: Date;

  //--------RELACIONES----------------
  @OneToMany(() => RatingImage, (ratingImage) => ratingImage.ratingRating)
  public ratingImages: RatingImage;

  @OneToMany(() => RatingLine, (ratingLine) => ratingLine.ratingRating)
  public ratingLines: RatingLine;

  @OneToMany(() => RatingScale, (ratingScale) => ratingScale.ratingRating)
  public ratingScales: RatingScale;

  @OneToMany(() => RatingTag, (ratingTag) => ratingTag.ratingRating)
  public ratingTags: RatingTag;

  @OneToMany(() => RatingVote, (ratingVote) => ratingVote.ratingRating)
  public ratingVotes: RatingVote;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<RatingRating>) {
    Object.assign(this, data);
  }
}
