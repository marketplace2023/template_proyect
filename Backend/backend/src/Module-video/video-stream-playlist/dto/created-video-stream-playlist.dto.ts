import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamPlaylistDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public video_stream_ids: number;

  @Expose()
  public active: boolean;
}
