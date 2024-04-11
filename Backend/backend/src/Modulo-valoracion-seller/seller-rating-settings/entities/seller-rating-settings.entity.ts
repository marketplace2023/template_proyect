import { SellerRating } from 'src/Modulo-valoracion-seller/seller-ratings/entities/seller-ratings.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'seller_rating_settings' })
export class SellerRatingSettings {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'auto_publish', type: 'int' })
  public auto_publish: number;

  @Column({ name: 'publish_mode', type: 'int' })
  public publish_mode: number;

  @Column({ name: 'rating_min', type: 'int' })
  public rating_min: number;

  @Column({ name: 'rating_max', type: 'int' })
  public rating_max: number;

  @Column({ name: 'allow_guest', type: 'int' })
  public allow_guest: number;

  @Column({ name: 'allow_comment', type: 'varchar' })
  public allow_comment: string;

  @Column({ name: 'order_confirmation', type: 'int' })
  public order_confirmation: number;

  //--------------------------------------------------------------------------
  @OneToOne(
    () => SellerRating,
    (sellerRatings) => sellerRatings.sellerRatingSettings,
  )
  @JoinColumn({ name: 'auto_publish' })
  public sellerRatings: SellerRating;
  //---------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SellerRatingSettings>) {
    Object.assign(this, data);
  }
}
