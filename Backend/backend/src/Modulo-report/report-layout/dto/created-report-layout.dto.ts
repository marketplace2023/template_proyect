import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateReportLayoutDto {
  @Expose()
  public id: number;

  @Expose()
  public view_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public image: string;

  @Expose()
  public pdf: string;

  @Expose()
  public name: string;
}
