import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResGroupsRulesDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly group_id: number;

  @Expose()
  public readonly model_id: number;

  @Expose()
  public readonly domain: string;

  @Expose()
  public readonly groups: number;

  @Expose()
  public readonly users: number;

  @Expose()
  public readonly conditions: string;

  @Expose()
  public readonly effect: string;
}
