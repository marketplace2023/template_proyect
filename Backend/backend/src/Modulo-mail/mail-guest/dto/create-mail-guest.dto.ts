import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailGuestDto {
  @Expose()
  public id: number;

  @Expose()
  public country_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public access_token: string;

  @Expose()
  public lang: string;

  @Expose()
  public timezone: string;
}
