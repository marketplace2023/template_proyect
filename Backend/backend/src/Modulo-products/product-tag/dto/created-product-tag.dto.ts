import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductTagDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public color: string;

  @Expose()
  public active: boolean;
}
