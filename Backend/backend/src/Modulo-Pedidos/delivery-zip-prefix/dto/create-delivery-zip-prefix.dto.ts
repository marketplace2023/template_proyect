import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDeliveryZipPrefixDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;
}
