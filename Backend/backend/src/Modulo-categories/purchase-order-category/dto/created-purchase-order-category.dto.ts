import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreatedPurchaseOrderCategoryDto {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public parent_id: number;

  @Expose()
  public sequence: number;

  @Expose()
  public color: string;

  @Expose()
  public icon: string;

  @Expose()
  public website_published: boolean;

  @Expose()
  public description: string;

  @Expose()
  public readonly category: number[];

  @Expose()
  public readonly attribute: number[];

  @Expose()
  public readonly imageC: number[];

  @Expose()
  public readonly categoryD: number[];

  @Expose()
  public readonly categoryIG: number[];

  @Expose()
  public readonly crm: number[];

  @Expose()
  public readonly soCategory: number[];
}
