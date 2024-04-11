import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateDiscountRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public condition: boolean;

  @Expose()
  public amount: number;
}
