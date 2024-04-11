import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateVideoStreamViewDto {
  @Expose()
  public id: number;

  @Expose()
  public video_stream_id: number;

  @Expose()
  public user_id: number;

  @Expose()
  public view_date: Date;

  @Expose()
  public view_duration: number;
}
