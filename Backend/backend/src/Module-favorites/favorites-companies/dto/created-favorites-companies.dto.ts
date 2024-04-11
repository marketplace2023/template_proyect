import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateFavoritesCompaniesDto {
  @Expose()
  public id: number;

  @Expose()
  public company_id: number;

  @Expose()
  public user_id: number;
}
