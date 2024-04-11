import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductRibbonDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public color: string;

  @Expose()
  public position: string;

  @Expose()
  public active: boolean;
}
