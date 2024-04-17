import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateAccountMoveDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence_number: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public journal_id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public payment_id: number;

  @Expose()
  public statement_line_id: number;

  @Expose()
  public tax_cash_basis_rec_id: number;

  @Expose()
  public tax_cash_basis_origin_move_id: number;

  @Expose()
  public auto_post_origin_id: number;

  @Expose()
  public secure_sequence_number: number;

  @Expose()
  public invoice_payment_term_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public commercial_partner_id: number;

  @Expose()
  public partner_shipping_id: number;

  @Expose()
  public partner_bank_id: number;

  @Expose()
  public fiscal_position_id: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public reversed_entry_id: number;

  @Expose()
  public invoice_user_id: number;

  @Expose()
  public invoice_incoterm_id: number;

  @Expose()
  public invoice_cash_rounding_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public sequence_prefix: string;

  @Expose()
  public access_token: string;

  @Expose()
  public name: string;

  @Expose()
  public ref: string;

  @Expose()
  public state: string;

  @Expose()
  public move_type: string;

  @Expose()
  public auto_post: string;

  @Expose()
  public inalterable_hash: string;

  @Expose()
  public payment_reference: string;

  @Expose()
  public qr_code_method: string;

  @Expose()
  public payment_state: string;

  @Expose()
  public invoice_source_email: string;

  @Expose()
  public invoice_partner_display_name: string;

  @Expose()
  public invoice_origin: string;

  @Expose()
  public date: Date;

  @Expose()
  public auto_post_until: Date;

  @Expose()
  public invoice_date: Date;

  @Expose()
  public invoice_date_due: Date;

  @Expose()
  public narration: string;

  @Expose()
  public amount_untaxed: number;

  @Expose()
  public amount_tax: number;

  @Expose()
  public amount_total: number;

  @Expose()
  public amount_residual: number;

  @Expose()
  public amount_untaxed_signed: number;

  @Expose()
  public amount_tax_signed: number;

  @Expose()
  public amount_total_signed: number;

  @Expose()
  public amount_total_in_currency_signed: number;

  @Expose()
  public amount_residual_signed: number;

  @Expose()
  public quick_edit_total_amount: number;

  @Expose()
  public is_storno: boolean;

  @Expose()
  public always_tax_exigible: boolean;

  @Expose()
  public to_check: boolean;

  @Expose()
  public posted_before: boolean;

  @Expose()
  public is_move_sent: boolean;

  @Expose()
  public edi_state: string;

  @Expose()
  public campaign_id: number;

  @Expose()
  public source_id: number;

  @Expose()
  public medium_id: number;

  @Expose()
  public team_id: number;

  @Expose()
  public stock_move_id: number;

  @Expose()
  public website_id: number;

  @Expose()
  public account_move_id: number;

  @Expose()
  public Picking_id: number;

  @Expose()
  public stockPType_id: number;

  @Expose()
  public stockPLine_id: number;

  @Expose()
  public p_p_template_id: number;

  @Expose()
  public producto: number[];

  @Expose()
  public productoP: number[];
}
