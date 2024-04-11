import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailMessageSubtypeDto {
  @Expose()
  public id: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public relation_field: string;

  @Expose()
  public res_model: string;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public internal: boolean;

  @Expose()
  public default: boolean;

  @Expose()
  public hidden: boolean;

  @Expose()
  public track_recipients: boolean;
}
