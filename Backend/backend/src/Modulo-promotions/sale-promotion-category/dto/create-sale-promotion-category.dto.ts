import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public sequence: number;

  @Expose()
  public parent_id: number;

  @Expose()
  public child_ids: number;

  @Expose()
  public active: boolean;

  @Expose()
  public description: string;
}
