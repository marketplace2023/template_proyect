import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateMailShortcodeDto {
  @Expose()
  public id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public source: string;

  @Expose()
  public description: string;

  @Expose()
  public substitution: string;
}
