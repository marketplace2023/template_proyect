import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'payment_provider' })
export class PaymentProvider {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'redirect_form_view_id', type: 'int' })
  public redirect_form_view_id: number;

  @Column({ name: 'inline_form_view_id', type: 'int' })
  public inline_form_view_id: number;

  @Column({ name: 'token_inline_form_view_id', type: 'int' })
  public token_inline_form_view_id: number;

  @Column({ name: 'express_checkout_form_view_id', type: 'int' })
  public express_checkout_form_view_id: number;

  @Column({ name: 'color', type: 'int' })
  public color: number;

  @Column({ name: 'module_id', type: 'int' })
  public module_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'code', type: 'varchar' })
  public code: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'module_state', type: 'varchar' })
  public module_state: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'display_as', type: 'varchar' })
  public display_as: string;

  @Column({ name: 'pre_msg', type: 'varchar' })
  public pre_msg: string;

  @Column({ name: 'pending_msg', type: 'varchar' })
  public pending_msg: string;

  @Column({ name: 'auth_msg', type: 'varchar' })
  public auth_msg: string;

  @Column({ name: 'done_msg', type: 'varchar' })
  public done_msg: string;

  @Column({ name: 'cancel_msg', type: 'varchar' })
  public cancel_msg: string;

  @Column({ name: 'maximum_amount', type: 'decimal' })
  public maximum_amount: number;

  @Column({ name: 'is_published', type: 'tinyint' })
  public is_published: boolean;

  @Column({ name: 'allow_tokenization', type: 'tinyint' })
  public allow_tokenization: boolean;

  @Column({ name: 'capture_manually', type: 'tinyint' })
  public capture_manually: boolean;

  @Column({ name: 'allow_express_checkout', type: 'tinyint' })
  public allow_express_checkout: boolean;

  @Column({ name: 'fees_active', type: 'tinyint' })
  public fees_active: boolean;

  @Column({ name: 'fees_dom_fixed', type: 'int' })
  public fees_dom_fixed: number;

  @Column({ name: 'fees_dom_var', type: 'int' })
  public fees_dom_var: number;

  @Column({ name: 'fees_int_fixed', type: 'int' })
  public fees_int_fixed: number;

  @Column({ name: 'fees_int_var', type: 'int' })
  public fees_int_var: number;

  @Column({ name: 'so_reference_type', type: 'varchar' })
  public so_reference_type: string;

  @Column({ name: 'website_id', type: 'int' })
  public website_id: number;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PaymentProvider>) {
    Object.assign(this, data);
  }
}
