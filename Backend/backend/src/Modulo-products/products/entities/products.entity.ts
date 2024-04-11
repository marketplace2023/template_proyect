import { ProductAccessoryRel } from 'src/Modulo-products/product-accessory-rel/entities/product-accessory-rel.entity';
import { ProductAlternativeRel } from 'src/Modulo-products/product-alternative-rel/entities/product-alternative-rel.entity';
import { ProductImage } from 'src/Modulo-products/product-image/entities/product-image.entity';
import { ProductLabelLayout } from 'src/Modulo-products/product-label-layout/entities/product-label-layout.entity';
import { ProductPackaging } from 'src/Modulo-products/product-packaging/entities/product-packaging.entity';
import { ProductPricelistItem } from 'src/Modulo-products/product-pricelist-item/entities/product-pricelist-item.entity';
import { ProductProductStockTrackConfirmationRel } from 'src/Modulo-products/product-product-stock-track-confirmation-rel/entities/product-product-stock-track-confirmation-rel.entity';
import { ProductProduct } from 'src/Modulo-products/product-product/entities/product-product.entity';
import { ProductRemoval } from 'src/Modulo-products/product-removal/entities/product-removal.emtity';
import { ProductReplenish } from 'src/Modulo-products/product-replenish/entities/product-replenish.entity';
import { ProductRibbon } from 'src/Modulo-products/product-ribbon/entities/product-ribbon.entity';
import { ProductSupplierTaxesRel } from 'src/Modulo-products/product-supplier-taxes-rel/entities/product-supplier-taxes-rel.entity';
import { ProductSupplierinfo } from 'src/Modulo-products/product-supplierinfo/entities/product-supplierinfo.entity';
import { ProductTag } from 'src/Modulo-products/product-tag/entities/product-tag.entity';
import { ProductTaxesRel } from 'src/Modulo-products/product-taxes-rel/entities/product-taxes-rel.entity';
import { ProductsAttributeValue } from 'src/Modulo-products/products-attribute-value/entities/products-attribute-value.entity';
import { ProductsAttribute } from 'src/Modulo-products/products-attribute/entities/products-attribute.entity';
import { ProductsBarcode } from 'src/Modulo-products/products-barcode/entities/products-barcode.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { ProductsPricelist } from 'src/Modulo-products/products-pricelist/entities/products-pricelist.entity';
import { ProductsSupplier } from 'src/Modulo-products/products-supplier/entities/products-supplier.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'product_tmpl_id', type: 'int' })
  public product_tmpl_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'default_code', type: 'varchar', length: 255 })
  public default_code: string;

  @Column({ name: 'barcode', type: 'varchar', length: 255 })
  public barcode: string;

  @Column({ name: 'combination_indices', type: 'varchar', length: 255 })
  public combination_indices: string;

  @Column({ name: 'volume', type: 'int' })
  public volume: number;

  @Column({ name: 'weight', type: 'int' })
  public weight: number;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'can_image_variant_1024_be_zoomed', type: 'tinyint' })
  public can_image_variant_1024_be_zoomed: boolean;

  //Uno a Mucho ProductsAttribute
  @OneToMany(() => ProductsAttribute, (attribute) => attribute.product)
  public attributes: ProductsAttribute[];

  //Uno a Mucho ProductsAttributeValue
  @OneToMany(
    () => ProductsAttributeValue,
    (attributeValue) => attributeValue.product,
  )
  public attributeValues: ProductsAttributeValue[];

  //Uno a Uno ProductsBarcode
  @OneToOne(() => ProductsBarcode, (producBarcode) => producBarcode.product)
  public producBarcode: ProductsBarcode;

  //Uno a Mucho ProductsSupplier
  @OneToMany(() => ProductsSupplier, (supplier) => supplier.product)
  public suppliers: ProductsSupplier[];

  //Uno a Mucho ProductsTemplate
  @OneToMany(() => ProductsTemplate, (template) => template.product)
  public templates: ProductsTemplate[];

  //Uno a Mucho ProductsImage
  @OneToMany(() => ProductImage, (image) => image.product)
  public images: ProductImage[];

  //Uno a Mucho ProductsLabelLayout
  @OneToMany(() => ProductLabelLayout, (labelayout) => labelayout.product)
  public labelayouts: ProductLabelLayout[];

  //Uno a Mucho ProductsProducts
  @OneToOne(() => ProductProduct, (productsProduct) => productsProduct.product)
  public productsProducts: ProductProduct;

  //Uno a Mucho ProductsPackaging
  @OneToMany(() => ProductPackaging, (packaging) => packaging.product)
  public packagings: ProductPackaging[];

  //Uno a Mucho ProductsPricelistItem
  @OneToMany(
    () => ProductPricelistItem,
    (pricelistItem) => pricelistItem.product,
  )
  public pricelistItems: ProductPricelistItem[];

  //Uno a Mucho ProductsRemoval
  @OneToMany(() => ProductRemoval, (removal) => removal.product)
  public removals: ProductRemoval[];

  //Uno a Mucho ProductsRemoval
  @OneToMany(() => ProductReplenish, (replenish) => replenish.product)
  public replenishs: ProductReplenish[];

  //Uno a Mucho ProductsRemoval
  @OneToMany(() => ProductRibbon, (ribbon) => ribbon.product)
  public ribbons: ProductRibbon[];

  //Uno a Mucho ProductsSupplierinfo
  @OneToMany(() => ProductSupplierinfo, (supplierinfo) => supplierinfo.product)
  public supplierinfos: ProductSupplierinfo[];

  //Uno a Mucho ProductAccessoryRel
  @OneToMany(() => ProductAccessoryRel, (accessoryRel) => accessoryRel.product)
  public accessoryRels: ProductAccessoryRel[];

  //Muchos a Muchos ProductsCategory
  @ManyToMany(() => ProductsCategory, { cascade: true })
  @JoinTable({
    name: 'products_category_product',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'products_categorys_id' },
  })
  public productsCategorys: ProductsCategory[];

  //Muchos a Muchos ProductsPricelist
  @ManyToMany(() => ProductsPricelist, { cascade: true })
  @JoinTable({
    name: 'products_pricelist_product',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'products_pricelists_id' },
  })
  public ProductsPricelists: ProductsPricelist[];

  //Muchos a Muchos ProductsAccessoryRel
  @ManyToMany(() => ProductAccessoryRel, { cascade: true })
  @JoinTable({
    name: 'product_accessory_rel_product',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'product_accessory_rels_id' },
  })
  public productAccessoryRels: ProductAccessoryRel[];

  //Muchos a Muchos ProductsAlternativeRel
  @ManyToMany(() => ProductAlternativeRel, { cascade: true })
  @JoinTable({
    name: 'product_alternatives_rels_products',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'product_alternative_rels_id' },
  })
  public productAlternativeRels: ProductAlternativeRel[];

  //Muchos a Muchos ProductProductStockTrackConfirmationRel
  @ManyToMany(() => ProductProductStockTrackConfirmationRel, {
    cascade: true,
  })
  @JoinTable({
    name: 'product_product_stock_track_confirmation_rel_product',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: {
      name: 'product_product_stock_track_confirmation_rels_id',
    },
  })
  public productProductStockTrackConfirmationRels: ProductProductStockTrackConfirmationRel[];

  //Muchos a Muchos ProductSupplierTaxesRelProduct
  @ManyToMany(() => ProductSupplierTaxesRel, { cascade: true })
  @JoinTable({
    name: 'product_supplier_taxes_rel_products',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'product_supplier_taxes_rels_id' },
  })
  public productSupplierTaxesRels: ProductSupplierTaxesRel[];

  //Muchos a Muchos ProductTag
  @ManyToMany(() => ProductTag, { cascade: true })
  @JoinTable({
    name: 'product_supplier_taxes_rel_products',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'product_supplier_taxes_rels_id' },
  })
  public productTags: ProductTag[];

  //Muchos a Muchos ProductTaxesRel
  @ManyToMany(() => ProductTaxesRel, { cascade: true })
  @JoinTable({
    name: 'product_tag_product',
    joinColumn: { name: 'products_id' },
    inverseJoinColumn: { name: 'product_tags_id' },
  })
  public productTaxesRels: ProductTaxesRel[];

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<Products>) {
    Object.assign(this, data);
  }
}
