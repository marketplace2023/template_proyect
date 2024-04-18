import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'seller_analytic' })
  export class SellerAnalytic {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'total_sales', type: 'int' })
    public totalSales: number;
  
    @Column({ name: 'conversion_rate', type: 'decimal', precision: 5, scale: 2 })
    public conversionRate: number;
  
    @Column({ name: 'average_rating', type: 'decimal', precision: 5, scale: 2 })
    public averageRating: number;
  
    @Column({ name: 'total_orders', type: 'int' })
    public totalOrders: number;
  
    @Column({ name: 'res_partner_id', type: 'int' })
    public resPartnerId: number;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<SellerAnalytic>) {
      Object.assign(this, data);
    }
  }
  