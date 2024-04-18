import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'seller_category' })
  export class SellerCategory {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'name', type: 'varchar' })
    public name: string;
  
    @Column({ name: 'description', type: 'varchar' })
    public description: string;
  
    @Column({ name: 'res_partner_id', type: 'int' })
    public resPartnerId: number;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<SellerCategory>) {
      Object.assign(this, data);
    }
  }
  