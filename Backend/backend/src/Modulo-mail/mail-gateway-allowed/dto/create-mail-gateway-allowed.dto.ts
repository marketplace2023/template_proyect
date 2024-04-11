import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailGatewayAllowedDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public email: string;

  @Expose()
  public email_normalized: string;
}
