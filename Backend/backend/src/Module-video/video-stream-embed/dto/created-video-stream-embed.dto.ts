import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamEmbedDto {
  @Expose()
  public id: number;

  @Expose()
  public video_id: number;

  @Expose()
  public code: string;
}
