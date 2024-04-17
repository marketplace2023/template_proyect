import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity({ name: 'account_payment' })
  export class AccountPayment {
    @PrimaryGeneratedColumn({ name: 'id' })
    public id: number;
  
    @Column({ name: 'message_main_attachment_id', type: 'int' })
    public message_main_attachment_id: number;
  
    @Column({ name: 'move_id', type: 'int' })
    public move_id: number;
  
    @Column({ name: 'partner_bank_id', type: 'int' })
    public partner_bank_id: number;
  
    @Column({ name: 'paired_internal_transfer_payment_id', type: 'int' })
    public paired_internal_transfer_payment_id: number;
  
    @Column({ name: 'payment_method_line_id', type: 'int' })
    public payment_method_line_id: number;
  
    @Column({ name: 'payment_method_id', type: 'int' })
    public payment_method_id: number;
  
    @Column({ name: 'currency_id', type: 'int' })
    public currency_id: number;
  
    @Column({ name: 'partner_id', type: 'int' })
    public partner_id: number;
  
    @Column({ name: 'outstanding_account_id', type: 'int' })
    public outstanding_account_id: number;
  
    @Column({ name: 'destination_account_id', type: 'int' })
    public destination_account_id: number;
  
    @Column({ name: 'destination_journal_id', type: 'int' })
    public destination_journal_id: number;
  
    @Column({ name: 'create_uid', type: 'int' })
    public create_uid: number;
  
    @Column({ name: 'write_uid', type: 'int' })
    public write_uid: number;
  
    @Column({ name: 'payment_type', type: 'varchar' })
    public payment_type: string;
  
    @Column({ name: 'partner_type', type: 'varchar' })
    public partner_type: string;
  
    @Column({ name: 'payment_reference', type: 'varchar' })
    public payment_reference: string;
  
    @Column({ name: 'amount', type: 'int' })
    public amount: number;
  
    @Column({ name: 'amount_company_currency_signed', type: 'int' })
    public amount_company_currency_signed: number;
  
    @Column({ name: 'is_reconciled', type: 'tinyint' })
    public is_reconciled: boolean;
  
    @Column({ name: 'is_matched', type: 'tinyint' })
    public is_matched: boolean;
  
    @Column({ name: 'is_internal_transfer', type: 'tinyint' })
    public is_internal_transfer: boolean;
  
    @Column({ name: 'payment_transaction_id', type: 'int' })
    public payment_transaction_id: number;
  
    @Column({ name: 'payment_token_id', type: 'int' })
    public payment_token_id: number;
  
    @Column({ name: 'source_payment_id', type: 'int' })
    public source_payment_id: number;
  
    @Column({ name: 'pos_payment_method_id', type: 'int' })
    public pos_payment_method_id: number;
  
    @Column({ name: 'force_outstanding_account_id', type: 'int' })
    public force_outstanding_account_id: number;
  
    @Column({ name: 'pos_session_id', type: 'int' })
    public pos_session_id: number;
  
    @CreateDateColumn({ name: 'created_at' })
    public createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', select: false })
    public updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    public deletedAt: Date;
  
    constructor(data: Partial<AccountPayment>) {
      Object.assign(this, data);
    }
  }
  