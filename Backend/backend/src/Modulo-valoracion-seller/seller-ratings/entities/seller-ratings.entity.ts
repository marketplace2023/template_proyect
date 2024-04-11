import { SaleOrderLine } from 'src/Modulo-store/sale-order-line/entities/sale-order-line.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { SellerRatingLine } from 'src/Modulo-valoracion-seller/seller-rating-line/entities/seller-rating-line.entity';
import { SellerRatingSettings } from 'src/Modulo-valoracion-seller/seller-rating-settings/entities/seller-rating-settings.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'seller_rating' })
export class SellerRating {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'rating', type: 'int' })
  public rating: number;

  @Column({ name: 'comment', type: 'varchar' })
  public comment: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'sale_order_id', type: 'int' })
  public sale_order_id: number;

  @Column({ name: 'state', type: 'tinyint' })
  public state: boolean;

  @Column({ name: 'published', type: 'int' })
  public published: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  //-----------------------Relaciones-----------------------------------------
  @OneToMany(
    () => SellerRatingLine,
    (sellerRatingLine) => sellerRatingLine.sellerRatings,
  )
  public sellerRatingLines: SellerRatingLine;

  @OneToOne(
    () => SellerRatingSettings,
    (sellerRatingSettings) => sellerRatingSettings.sellerRatings,
  )
  public sellerRatingSettings: SellerRatingSettings;

  @ManyToOne(() => ResPartner, (resPartner) => resPartner.sellerRatings)
  @JoinColumn({ name: 'partner_id' })
  public resPartners: ResPartner;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.sellerRatings)
  @JoinColumn({ name: 'sale_order_id' })
  public saleOrders: SaleOrder;

  @OneToMany(
    () => SaleOrderLine,
    (saleOrderLines) => saleOrderLines.sellerRatings,
  )
  public saleOrderLines: SaleOrderLine;
  //------------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<SellerRating>) {
    Object.assign(this, data);
  }
}
