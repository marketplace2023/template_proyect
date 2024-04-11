import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailIceServerDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public server_type: string;

  @Expose()
  public uri: string;

  @Expose()
  public username: string;

  @Expose()
  public credential: string;
}
