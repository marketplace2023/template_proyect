import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSalePromotionCodeDto {
  @Expose()
  public id: number;

  @Expose()
  public code: string;

  @Expose()
  public promotion_template_id: number;

  @Expose()
  public use_limit: number;

  @Expose()
  public used_count: number;

  @Expose()
  public active: boolean;
}
