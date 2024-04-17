import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateResGroupsDto {
  @Expose()
  public readonly id: number;

  @Expose()
  public readonly name: string;

  @Expose()
  public readonly category_id: number;

  @Expose()
  public readonly color: number;

  @Expose()
  public readonly create_uid: Date;

  @Expose()
  public readonly write_uid: Date;

  @Expose()
  public readonly comment: string;

  @Expose()
  public readonly share: number;
}
