import { ResCurrencyRate } from 'src/Modulo-users/res-currency-rate/entities/res-currency-rate.entity';
import { ResCurrency } from 'src/Modulo-users/res-currency/entities/res-currency.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { ResUsers } from 'src/Modulo-users/res-users/entities/res-users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'res_company' })
export class ResCompany {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'name', type: 'varchar', length: 255 })
  public name: string;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'sequence', type: 'int' })
  public sequence: number;

  @Column({ name: 'user_id', type: 'int' })
  public user_id: number;

  @Column({ name: 'create_date', type: 'date' })
  public create_date: Date;

  @Column({ name: 'parent_id', type: 'int' })
  public parent_id: number;

  @Column({ name: 'paperformat_id', type: 'int' })
  public paperformat_id: number;

  @Column({ name: 'external_report_layout_id', type: 'int' })
  public external_report_layout_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'email', type: 'varchar', length: 255 })
  public email: string;

  @Column({ name: 'phone', type: 'varchar', length: 255 })
  public phone: string;

  @Column({ name: 'mobile', type: 'varchar', length: 255 })
  public mobile: string;

  @Column({
    name: 'base_onboarding_company_state',
    type: 'varchar',
    length: 255,
  })
  public base_onboarding_company_state: string;

  @Column({ name: 'font', type: 'varchar', length: 255 })
  public font: string;

  @Column({ name: 'primary_color', type: 'varchar', length: 255 })
  public primary_color: string;

  @Column({ name: 'secondary_color', type: 'varchar', length: 255 })
  public secondary_color: string;

  @Column({ name: 'layout_background', type: 'varchar', length: 255 })
  public layout_background: string;

  @Column({ name: 'report_footer', type: 'varchar', length: 255 })
  public report_footer: string;

  @Column({ name: 'report_header', type: 'varchar', length: 255 })
  public report_header: string;

  @Column({ name: 'company_details', type: 'varchar', length: 255 })
  public company_details: string;

  @Column({ name: 'active', type: 'tinyint', default: 0 })
  public active: boolean;

  @Column({ name: 'write_date', type: 'date' })
  public write_date: Date;

  @Column({ name: 'logo_web', type: 'varchar', length: 255 })
  public logo_web: string;

  @Column({ name: 'resource_calendar_id', type: 'int' })
  public resource_calendar_id: number;

  @Column({ name: 'partner_gid', type: 'int' })
  public partner_gid: number;

  @Column({ name: 'iap_enrich_auto_done', type: 'tinyint' })
  public iap_enrich_auto_done: boolean;

  @Column({ name: 'snailmail_color', type: 'tinyint' })
  public snailmail_color: boolean;

  @Column({ name: 'snailmail_cover', type: 'tinyint' })
  public snailmail_cover: boolean;

  @Column({ name: 'snailmail_duplex', type: 'tinyint' })
  public snailmail_duplex: boolean;

  @Column({ name: 'social_twitter', type: 'varchar', length: 255 })
  public social_twitter: string;

  @Column({ name: 'social_facebook', type: 'varchar', length: 255 })
  public social_facebook: string;

  @Column({ name: 'social_github', type: 'varchar', length: 255 })
  public social_github: string;

  @Column({ name: 'social_linkedin', type: 'varchar', length: 255 })
  public social_linkedin: string;

  @Column({ name: 'social_youtube', type: 'varchar', length: 255 })
  public social_youtube: string;

  @Column({ name: 'social_instagram', type: 'varchar', length: 255 })
  public social_instagram: string;

  @Column({
    name: 'hr_presence_control_email_amount',
    type: 'int',
  })
  public hr_presence_control_email_amount: number;

  @Column({ name: 'hr_presence_control_ip_list', type: 'varchar', length: 255 })
  public hr_presence_control_ip_list: string;

  @Column({ name: 'nomenclature_id', type: 'int' })
  public nomenclature_id: number;

  @Column({
    name: 'internal_transit_location_id',
    type: 'int',
  })
  public internal_transit_location_id: number;

  @Column({
    name: 'stock_mail_confirmation_template_id',
    type: 'int',
  })
  public stock_mail_confirmation_template_id: number;

  @Column({ name: 'annual_inventory_day', type: 'int' })
  public annual_inventory_day: number;

  @Column({ name: 'annual_inventory_month', type: 'varchar', length: 255 })
  public annual_inventory_month: string;

  @Column({ name: 'stock_move_email_validation', type: 'tinyint' })
  public stock_move_email_validation: boolean;

  @Column({
    name: 'stock_sms_confirmation_template_id',
    type: 'int',
  })
  public stock_sms_confirmation_template_id: number;

  @Column({ name: 'stock_move_sms_validation', type: 'tinyint' })
  public stock_move_sms_validation: boolean;

  @Column({
    name: 'has_received_warning_stock_sms',
    type: 'tinyint',
  })
  public has_received_warning_stock_sms: boolean;

  @Column({
    name: 'payment_provider_onboarding_state',
    type: 'varchar',
    length: 255,
  })
  public payment_provider_onboarding_state: string;

  @Column({
    name: 'payment_onboarding_payment_method',
    type: 'varchar',
    length: 255,
  })
  public payment_onboarding_payment_method: string;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'fiscalyear_last_day', type: 'int' })
  public fiscalyear_last_day: number;

  @Column({ name: 'transfer_account_id', type: 'int' })
  public transfer_account_id: number;

  @Column({ name: 'chart_template_id', type: 'int' })
  public chart_template_id: number;

  @Column({
    name: 'default_cash_difference_income_account_id',
    type: 'int',
  })
  public default_cash_difference_income_account_id: number;

  @Column({
    name: 'default_cash_difference_expense_account_id',
    type: 'int',
  })
  public default_cash_difference_expense_account_id: number;

  @Column({
    name: 'account_journal_suspense_account_id',
    type: 'int',
  })
  public account_journal_suspense_account_id: number;

  @Column({
    name: 'account_journal_payment_debit_account_id',
    type: 'int',
  })
  public account_journal_payment_debit_account_id: number;

  @Column({
    name: 'account_journal_payment_credit_account_id',
    type: 'int',
  })
  public account_journal_payment_credit_account_id: number;

  @Column({
    name: 'account_journal_early_pay_discount_gain_account_id',
    type: 'int',
  })
  public account_journal_early_pay_discount_gain_account_id: number;

  @Column({
    name: 'account_journal_early_pay_discount_loss_account_id',
    type: 'int',
  })
  public account_journal_early_pay_discount_loss_account_id: number;

  @Column({ name: 'account_sale_tax_id', type: 'int' })
  public account_sale_tax_id: number;

  @Column({ name: 'account_purchase_tax_id', type: 'int' })
  public account_purchase_tax_id: number;

  @Column({ name: 'currency_exchange_journal_id', type: 'int' })
  public currency_exchange_journal_id: number;

  @Column({ name: 'income_currency_exchange_account_id', type: 'int' })
  public income_currency_exchange_account_id: number;

  @Column({ name: 'expense_currency_exchange_account_id', type: 'int' })
  public expense_currency_exchange_account_id: number;

  @Column({ name: 'property_stock_account_input_categ_id', type: 'int' })
  public property_stock_account_input_categ_id: number;

  @Column({ name: 'property_stock_account_output_categ_id', type: 'int' })
  public property_stock_account_output_categ_id: number;

  @Column({ name: 'property_stock_valuation_account_id', type: 'int' })
  public property_stock_valuation_account_id: number;

  @Column({ name: 'incoterm_id', type: 'int' })
  public incoterm_id: number;

  @Column({ name: 'account_opening_move_id', type: 'int' })
  public account_opening_move_id: number;

  @Column({ name: 'account_default_pos_receivable_account_id', type: 'int' })
  public account_default_pos_receivable_account_id: number;

  @Column({ name: 'expense_accrual_account_id', type: 'int' })
  public expense_accrual_account_id: number;

  @Column({ name: 'revenue_accrual_account_id', type: 'int' })
  public revenue_accrual_account_id: number;

  @Column({ name: 'automatic_entry_default_journal_id', type: 'int' })
  public automatic_entry_default_journal_id: number;

  @Column({ name: 'account_fiscal_country_id', type: 'int' })
  public account_fiscal_country_id: number;

  @Column({ name: 'tax_cash_basis_journal_id', type: 'int' })
  public tax_cash_basis_journal_id: number;

  @Column({ name: 'account_cash_basis_base_account_id', type: 'int' })
  public account_cash_basis_base_account_id: number;

  @Column({ name: 'fiscalyear_last_month', type: 'int' })
  public fiscalyear_last_month: number;

  @Column({ name: 'bank_account_code_prefix', type: 'int' })
  public bank_account_code_prefix: number;

  @Column({ name: 'cash_account_code_prefix', type: 'int' })
  public cash_account_code_prefix: number;

  @Column({ name: 'early_pay_discount_computation', type: 'int' })
  public early_pay_discount_computation: number;

  @Column({ name: 'transfer_account_code_prefix', type: 'int' })
  public transfer_account_code_prefix: number;

  @Column({ name: 'tax_calculation_rounding_method', type: 'int' })
  public tax_calculation_rounding_method: number;

  @Column({ name: 'account_setup_bank_data_state', type: 'int' })
  public account_setup_bank_data_state: number;

  @Column({ name: 'account_setup_fy_data_state', type: 'int' })
  public account_setup_fy_data_state: number;

  @Column({ name: 'account_setup_taxes_state', type: 'int' })
  public account_setup_taxes_state: number;

  @Column({ name: 'account_onboarding_invoice_layout_state', type: 'int' })
  public account_onboarding_invoice_layout_state: number;

  @Column({ name: 'account_onboarding_sale_tax_state', type: 'int' })
  public account_onboarding_sale_tax_state: number;

  @Column({ name: 'account_invoice_onboarding_state', type: 'int' })
  public account_invoice_onboarding_state: number;

  @Column({ name: 'account_dashboard_onboarding_state', type: 'int' })
  public account_dashboard_onboarding_state: number;

  @Column({ name: 'terms_type', type: 'int' })
  public terms_type: number;

  @Column({ name: 'account_setup_bill_state', type: 'int' })
  public account_setup_bill_state: number;

  @Column({ name: 'quick_edit_mode', type: 'int' })
  public quick_edit_mode: number;

  @Column({ name: 'period_lock_date', type: 'int' })
  public period_lock_date: number;

  @Column({ name: 'fiscalyear_lock_date', type: 'int' })
  public fiscalyear_lock_date: number;

  @Column({ name: 'tax_lock_date', type: 'int' })
  public tax_lock_date: number;

  @Column({ name: 'account_opening_date', type: 'int' })
  public account_opening_date: number;

  @Column({ name: 'invoice_terms', type: 'int' })
  public invoice_terms: number;

  @Column({ name: 'invoice_terms_html', type: 'int' })
  public invoice_terms_html: number;

  @Column({ name: 'expects_chart_of_accounts', type: 'int' })
  public expects_chart_of_accounts: number;

  @Column({ name: 'anglo_saxon_accounting', type: 'int' })
  public anglo_saxon_accounting: number;

  @Column({ name: 'qr_code', type: 'int' })
  public qr_code: number;

  @Column({ name: 'invoice_is_email', type: 'int' })
  public invoice_is_email: number;

  @Column({ name: 'invoice_is_print', type: 'int' })
  public invoice_is_print: number;

  @Column({ name: 'account_use_credit_limit', type: 'int' })
  public account_use_credit_limit: number;

  @Column({ name: 'account_onboarding_create_invoice_state_flag', type: 'int' })
  public account_onboarding_create_invoice_state_flag: number;

  @Column({ name: 'tax_exigibility', type: 'int' })
  public tax_exigibility: number;

  @Column({ name: 'account_storno', type: 'int' })
  public account_storno: number;

  @Column({ name: 'po_lock', type: 'int' })
  public po_lock: number;

  @Column({ name: 'po_double_validation', type: 'int' })
  public po_double_validation: number;

  @Column({ name: 'po_double_validation_amount', type: 'int' })
  public po_double_validation_amount: number;

  @Column({ name: 'po_lead', type: 'int' })
  public po_lead: number;

  @Column({ name: 'invoice_is_snailmail', type: 'int' })
  public invoice_is_snailmail: number;

  @Column({ name: 'days_to_purchase', type: 'int' })
  public days_to_purchase: number;

  @Column({ name: 'vat_check_vies', type: 'tinyint' })
  public vat_check_vies: boolean;

  @Column({ name: 'quotation_validity_days', type: 'int' })
  public quotation_validity_days: number;

  @Column({ name: 'sale_quotation_onboarding_state', type: 'varchar' })
  public sale_quotation_onboarding_state: string;

  @Column({ name: 'sale_onboarding_order_confirmation_state', type: 'varchar' })
  public sale_onboarding_order_confirmation_state: string;

  @Column({ name: 'sale_onboarding_sample_quotation_state', type: 'varchar' })
  public sale_onboarding_sample_quotation_state: string;

  @Column({ name: 'sale_onboarding_payment_method', type: 'varchar' })
  public sale_onboarding_payment_method: string;

  @Column({ name: 'portal_confirmation_sign', type: 'tinyint' })
  public portal_confirmation_sign: boolean;

  @Column({ name: 'portal_confirmation_pay', type: 'tinyint' })
  public portal_confirmation_pay: boolean;

  @Column({ name: 'sale_order_template_id', type: 'int' })
  public sale_order_template_id: number;

  @Column({ name: 'security_lead', type: 'int' })
  public security_lead: number;

  @Column({ name: 'part_id', type: 'int' })
  public part_id: number;

  //---------------------------------------------------------------------------
  //Muchos a Uno ResUsers
  @ManyToOne(() => ResUsers, (user) => user.companys)
  @JoinColumn({ name: 'user_id' })
  public user: ResUsers;

  //Muchos a Uno ResPatner
  @ManyToOne(() => ResPartner, (partner) => partner.company)
  @JoinColumn({ name: 'part_id' })
  public partner: ResPartner;

  //Uno a Mucho Rescurrency
  @OneToMany(() => ResCurrencyRate, (currencyRate) => currencyRate.company)
  public currencyRate: ResCurrencyRate;

  //Uno a Mucho Rescompany
  @OneToMany(() => ResPartner, (partners) => partners.companys)
  public partners: ResPartner;

  //Uno a Mucho ResUser
  @OneToMany(() => ResUsers, (user) => user.company)
  public users: ResUsers;

  //Muchos a Uno ResCurrency
  @ManyToOne(() => ResCurrency, (currency) => currency.company)
  @JoinColumn({ name: 'parent_id' })
  public currency: ResCurrency;

  //---------------------------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<ResCompany>) {
    Object.assign(this, data);
  }
}
