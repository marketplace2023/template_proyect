import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResGroupsImpliedIdsDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly group_id: number;

  @Expose()
  public readonly implied_id: number;
}
