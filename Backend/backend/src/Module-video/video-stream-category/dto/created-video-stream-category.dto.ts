import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public duration: number;

  @Expose()
  public format: string;

  @Expose()
  public size: string;

  @Expose()
  public channel_id: number;

  @Expose()
  public category_id: number;

  @Expose()
  public tag_ids: number;

  @Expose()
  public published_on: Date;

  @Expose()
  public active: boolean;
}
