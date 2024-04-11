import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatePaymentProviderDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public company_id: number;

  @Expose()
  public redirect_form_view_id: number;

  @Expose()
  public inline_form_view_id: number;

  @Expose()
  public token_inline_form_view_id: number;

  @Expose()
  public express_checkout_form_view_id: number;

  @Expose()
  public color: number;

  @Expose()
  public module_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public code: string;

  @Expose()
  public state: string;

  @Expose()
  public module_state: string;

  @Expose()
  public name: string;

  @Expose()
  public display_as: string;

  @Expose()
  public pre_msg: string;

  @Expose()
  public pending_msg: string;

  @Expose()
  public auth_msg: string;

  @Expose()
  public done_msg: string;

  @Expose()
  public cancel_msg: string;

  @Expose()
  public maximum_amount: number;

  @Expose()
  public is_published: boolean;

  @Expose()
  public allow_tokenization: boolean;

  @Expose()
  public capture_manually: boolean;

  @Expose()
  public allow_express_checkout: boolean;

  @Expose()
  public fees_active: boolean;

  @Expose()
  public fees_dom_fixed: number;

  @Expose()
  public fees_dom_var: number;

  @Expose()
  public fees_int_fixed: number;

  @Expose()
  public fees_int_var: number;

  @Expose()
  public so_reference_type: string;

  @Expose()
  public website_id: number;
}
