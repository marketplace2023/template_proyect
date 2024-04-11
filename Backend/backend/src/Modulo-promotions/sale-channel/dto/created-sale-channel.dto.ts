import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSaleChannelDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public code: string;

  @Expose()
  public website_url: string;

  @Expose()
  public marketplace_id: number;
}
