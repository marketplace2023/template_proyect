import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResBankDto {
  @Expose()
  public id: number;

  @Expose()
  public state: number;

  @Expose()
  public country: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public name: string;

  @Expose()
  public street: string;

  @Expose()
  public street2: string;

  @Expose()
  public zip: string;

  @Expose()
  public city: string;

  @Expose()
  public email: string;

  @Expose()
  public phone: string;

  @Expose()
  public bic: string;

  @Expose()
  public active: boolean;
}
