import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamTagDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public active: boolean;

  @Expose()
  public color: string;

  @Expose()
  public channel_id: number;
}
