import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'account_payment_register' })
  export class AccountPaymentRegister {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'currency_id', type: 'int' })
    public currency_id: number;
  
    @Column({ name: 'journal_id', type: 'int' })
    public journal_id: number;
  
    @Column({ name: 'partner_bank_id', type: 'int' })
    public partner_bank_id: number;
  
    @Column({ name: 'source_currency_id', type: 'int' })
    public source_currency_id: number;
  
    @Column({ name: 'company_id', type: 'int' })
    public company_id: number;
  
    @Column({ name: 'partner_id', type: 'int' })
    public partner_id: number;
  
    @Column({ name: 'payment_method_line_id', type: 'int' })
    public payment_method_line_id: number;
  
    @Column({ name: 'writeoff_account_id', type: 'int' })
    public writeoff_account_id: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'communication', type: 'varchar' })
    public communication: string;
  
    @Column({ name: 'payment_type', type: 'varchar' })
    public payment_type: string;
  
    @Column({ name: 'partner_type', type: 'varchar' })
    public partner_type: string;
  
    @Column({ name: 'payment_difference_handling', type: 'varchar' })
    public payment_difference_handling: string;
  
    @Column({ name: 'writeoff_label', type: 'varchar' })
    public writeoff_label: string;
  
    @Column({ name: 'payment_date', type: 'date' })
    public payment_date: Date;
  
    @Column({ name: 'amount', type: 'decimal' })
    public amount: number;
  
    @Column({ name: 'source_amount', type: 'decimal' })
    public source_amount: number;
  
    @Column({ name: 'source_amount_currency', type: 'decimal' })
    public source_amount_currency: number;
  
    @Column({ name: 'group_payment', type: 'tinyint' })
    public group_payment: boolean;
  
    @Column({ name: 'can_edit_wizard', type: 'tinyint' })
    public can_edit_wizard: boolean;
  
    @Column({ name: 'can_group_payments', type: 'tinyint' })
    public can_group_payments: boolean;
  
    @Column({ name: 'payment_token_id', type: 'int' })
    public payment_token_id: number;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<AccountPaymentRegister>) {
      Object.assign(this, data);
    }
  }
  