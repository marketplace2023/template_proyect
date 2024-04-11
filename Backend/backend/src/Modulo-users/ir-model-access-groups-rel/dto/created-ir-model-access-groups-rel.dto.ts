import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateIrModelAccessGroupsRelDto {
  @Expose()
  public id: number;

  @Expose()
  public model_id: number;

  @Expose()
  public group_id: number;

  @Expose()
  public perm_read: boolean;

  @Expose()
  public perm_write: boolean;

  @Expose()
  public perm_create: boolean;

  @Expose()
  public perm_unlink: boolean;

  @Expose()
  public perm_admin: boolean;
}
