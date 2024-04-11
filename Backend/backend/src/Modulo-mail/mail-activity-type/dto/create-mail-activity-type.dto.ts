import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailActivityTypeDto {
  @Expose()
  public id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public delay_count: number;

  @Expose()
  public triggered_next_type_id: number;

  @Expose()
  public default_user_id: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public delay_unit: string;

  @Expose()
  public delay_from: string;

  @Expose()
  public icon: string;

  @Expose()
  public decoration_type: string;

  @Expose()
  public res_model: string;

  @Expose()
  public chaining_type: string;

  @Expose()
  public category: string;

  @Expose()
  public name: string;

  @Expose()
  public summary: string;

  @Expose()
  public default_note: string;

  @Expose()
  public active: boolean;
}
