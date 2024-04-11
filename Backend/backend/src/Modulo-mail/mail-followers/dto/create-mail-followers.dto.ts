import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailFollowersDto {
  @Expose()
  public id: number;

  @Expose()
  public res_id: number;

  @Expose()
  public partner_id: number;

  @Expose()
  public res_model: string;
}
