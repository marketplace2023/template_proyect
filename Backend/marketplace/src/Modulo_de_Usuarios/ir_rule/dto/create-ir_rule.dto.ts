import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateIrRuleDto {
  @Expose()
  public id: number;

  @Expose()
  public model_id: number;

  @Expose()
  public domain: string;

  @Expose()
  public groups: number;

  @Expose()
  public users: number;

  @Expose()
  public conditions: string;

  @Expose()
  public effect: string;
}
