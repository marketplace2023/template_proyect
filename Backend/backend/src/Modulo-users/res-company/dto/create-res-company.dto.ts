import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResCompanyDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public partner_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_date: Date;

  @Expose()
  public parent_id: number;

  @Expose()
  public paperformat_id: number;

  @Expose()
  public external_report_layout_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public email: string;

  @Expose()
  public phone: string;

  @Expose()
  public mobile: string;

  @Expose()
  public base_onboarding_company_state: string;

  @Expose()
  public font: string;

  @Expose()
  public primary_color: string;

  @Expose()
  public secondary_color: string;

  @Expose()
  public layout_background: string;

  @Expose()
  public report_footer: string;

  @Expose()
  public report_header: string;

  @Expose()
  public company_details: string;

  @Expose()
  public active: boolean;

  @Expose()
  public write_date: Date;

  @Expose()
  public logo_web: string;

  @Expose()
  public resource_calendar_id: number;

  @Expose()
  public partner_gid: number;

  @Expose()
  public iap_enrich_auto_done: boolean;

  @Expose()
  public snailmail_color: boolean;

  @Expose()
  public snailmail_cover: boolean;

  @Expose()
  public snailmail_duplex: boolean;

  @Expose()
  public social_twitter: string;

  @Expose()
  public social_facebook: string;

  @Expose()
  public social_github: string;

  @Expose()
  public social_linkedin: string;

  @Expose()
  public social_youtube: string;

  @Expose()
  public social_instagram: string;

  @Expose()
  public hr_presence_control_email_amount: number;

  @Expose()
  public hr_presence_control_ip_list: string;

  @Expose()
  public nomenclature_id: number;

  @Expose()
  public internal_transit_location_id: number;

  @Expose()
  public stock_mail_confirmation_template_id: number;

  @Expose()
  public annual_inventory_day: number;

  @Expose()
  public annual_inventory_month: string;

  @Expose()
  public stock_move_email_validation: boolean;

  @Expose()
  public stock_sms_confirmation_template_id: number;

  @Expose()
  public stock_move_sms_validation: boolean;

  @Expose()
  public has_received_warning_stock_sms: boolean;

  @Expose()
  public payment_provider_onboarding_state: string;

  @Expose()
  public payment_onboarding_payment_method: string;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public fiscalyear_last_day: number;

  @Expose()
  public transfer_account_id: number;

  @Expose()
  public chart_template_id: number;

  @Expose()
  public default_cash_difference_income_account_id: number;

  @Expose()
  public default_cash_difference_expense_account_id: number;

  @Expose()
  public account_journal_suspense_account_id: number;

  @Expose()
  public account_journal_payment_debit_account_id: number;

  @Expose()
  public account_journal_payment_credit_account_id: number;

  @Expose()
  public account_journal_early_pay_discount_gain_account_id: number;

  @Expose()
  public account_journal_early_pay_discount_loss_account_id: number;

  @Expose()
  public account_sale_tax_id: number;

  @Expose()
  public account_purchase_tax_id: number;

  @Expose()
  public currency_exchange_journal_id: number;

  @Expose()
  public income_currency_exchange_account_id: number;

  @Expose()
  public expense_currency_exchange_account_id: number;

  @Expose()
  public property_stock_account_input_categ_id: number;

  @Expose()
  public property_stock_account_output_categ_id: number;

  @Expose()
  public property_stock_valuation_account_id: number;

  @Expose()
  public incoterm_id: number;

  @Expose()
  public account_opening_move_id: number;

  @Expose()
  public account_default_pos_receivable_account_id: number;

  @Expose()
  public expense_accrual_account_id: number;

  @Expose()
  public revenue_accrual_account_id: number;

  @Expose()
  public automatic_entry_default_journal_id: number;

  @Expose()
  public account_fiscal_country_id: number;

  @Expose()
  public tax_cash_basis_journal_id: number;

  @Expose()
  public account_cash_basis_base_account_id: number;

  @Expose()
  public fiscalyear_last_month: number;

  @Expose()
  public bank_account_code_prefix: number;

  @Expose()
  public cash_account_code_prefix: number;

  @Expose()
  public early_pay_discount_computation: number;

  @Expose()
  public transfer_account_code_prefix: number;

  @Expose()
  public tax_calculation_rounding_method: number;

  @Expose()
  public account_setup_bank_data_state: number;

  @Expose()
  public account_setup_fy_data_state: number;

  @Expose()
  public account_setup_taxes_state: number;

  @Expose()
  public account_onboarding_invoice_layout_state: number;

  @Expose()
  public account_onboarding_sale_tax_state: number;

  @Expose()
  public account_invoice_onboarding_state: number;

  @Expose()
  public account_dashboard_onboarding_state: number;

  @Expose()
  public terms_type: number;

  @Expose()
  public account_setup_bill_state: number;

  @Expose()
  public quick_edit_mode: number;

  @Expose()
  public period_lock_date: number;

  @Expose()
  public fiscalyear_lock_date: number;

  @Expose()
  public tax_lock_date: number;

  @Expose()
  public account_opening_date: number;

  @Expose()
  public invoice_terms: number;

  @Expose()
  public invoice_terms_html: number;

  @Expose()
  public expects_chart_of_accounts: number;

  @Expose()
  public anglo_saxon_accounting: number;

  @Expose()
  public qr_code: number;

  @Expose()
  public invoice_is_email: number;

  @Expose()
  public invoice_is_print: number;

  @Expose()
  public account_use_credit_limit: number;

  @Expose()
  public account_onboarding_create_invoice_state_flag: number;

  @Expose()
  public tax_exigibility: number;

  @Expose()
  public account_storno: number;

  @Expose()
  public po_lock: number;

  @Expose()
  public po_double_validation: number;

  @Expose()
  public po_double_validation_amount: number;

  @Expose()
  public po_lead: number;

  @Expose()
  public invoice_is_snailmail: number;

  @Expose()
  public days_to_purchase: number;

  @Expose()
  public vat_check_vies: boolean;

  @Expose()
  public quotation_validity_days: number;

  @Expose()
  public sale_quotation_onboarding_state: string;

  @Expose()
  public sale_onboarding_order_confirmation_state: string;

  @Expose()
  public sale_onboarding_sample_quotation_state: string;

  @Expose()
  public sale_onboarding_payment_method: string;

  @Expose()
  public portal_confirmation_sign: boolean;

  @Expose()
  public portal_confirmation_pay: boolean;

  @Expose()
  public sale_order_template_id: number;

  @Expose()
  public security_lead: number;

  @Expose()
  public part_id: number;
}
