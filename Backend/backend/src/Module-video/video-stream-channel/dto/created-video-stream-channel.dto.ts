import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamChannelDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public owner_id: number;

  @Expose()
  public category_id: number;

  @Expose()
  public tag_ids: number;

  @Expose()
  public published_on: Date;

  @Expose()
  public active: boolean;

  @Expose()
  public icon: string;
}
