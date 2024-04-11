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

@Entity({ name: 'seller_rating_line' })
export class SellerRatingLine {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'seller_rating_id', type: 'int' })
  public seller_rating_id: number;

  @Column({ name: 'rating', type: 'int' })
  public rating: number;

  @Column({ name: 'comment', type: 'varchar' })
  public comment: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  //--------------------------------------------------------------------------
  @ManyToOne(
    () => SellerRating,
    (sellerRating) => sellerRating.sellerRatingLines,
  )
  @JoinColumn({ name: 'seller_rating_id' })
  public sellerRatings: SellerRating;

  //---------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SellerRatingLine>) {
    Object.assign(this, data);
  }
}
