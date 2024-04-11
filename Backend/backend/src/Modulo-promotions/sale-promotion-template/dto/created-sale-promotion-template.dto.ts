import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotiontemplateDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public type: string;

  @Expose()
  public start_date: Date;

  @Expose()
  public end_date: Date;

  @Expose()
  public active: boolean;
}
