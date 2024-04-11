import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailTrackingValueDto {
  @Expose()
  public id: number;

  @Expose()
  public field: number;

  @Expose()
  public old_value_integer: number;

  @Expose()
  public new_value_integer: number;

  @Expose()
  public currency_id: number;

  @Expose()
  public mail_message_id: number;

  @Expose()
  public tracking_sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public field_desc: string;

  @Expose()
  public field_type: string;

  @Expose()
  public old_value_char: string;

  @Expose()
  public new_value_char: string;

  @Expose()
  public old_value_text: string;

  @Expose()
  public new_value_text: string;

  @Expose()
  public old_value_datetime: Date;

  @Expose()
  public new_value_datetime: Date;

  @Expose()
  public old_value_float: number;

  @Expose()
  public old_value_monetary: number;

  @Expose()
  public new_value_float: number;

  @Expose()
  public new_value_monetary: number;
}
