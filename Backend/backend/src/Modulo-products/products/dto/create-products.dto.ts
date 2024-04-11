import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateProductsDto {
  @Expose()
  public id: number;

  @Expose()
  public message_main_attachment_id: number;

  @Expose()
  public product_tmpl_id: number;

  @Expose()
  public create_uid: number;

  @Expose()
  public write_uid: number;

  @Expose()
  public default_code: string;

  @Expose()
  public barcode: string;

  @Expose()
  public combination_indices: string;

  @Expose()
  public volume: number;

  @Expose()
  public weight: number;

  @Expose()
  public active: boolean;

  @Expose()
  public can_image_variant_1024_be_zoomed: boolean;

  @Expose()
  public readonly categories: number[];

  @Expose()
  public readonly pricelists: number[];

  @Expose()
  public readonly accessoryRelsIds: number[];

  @Expose()
  public readonly alternativeRels: number[];

  @Expose()
  public readonly productStockTrackConfirmationRels: number[];

  @Expose()
  public readonly supplierTaxesRels: number[];

  @Expose()
  public readonly tags: number[];

  @Expose()
  public readonly taxesRels: number[];
}
