import { HrEmployeeCategory } from 'src/Modulo-categories/hr-employee-category/entities/hr-employee-category.entity';
import { ProductCategoryImage } from 'src/Modulo-categories/product-category-image/entities/product-category-image.entity';
import { ProductPublicCategory } from 'src/Modulo-categories/product-public-category/entities/product-category-public.entity';
import { ResPartnerCategory } from 'src/Modulo-categories/res-partner-category/entities/res-partner-category.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pos_category' })
export class PosCategory {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'picking_type_id', type: 'int' })
  public picking_type_id: number;

  @Column({ name: 'journal_id', type: 'int' })
  public journal_id: number;

  @Column({ name: 'invoice_journal_id', type: 'int' })
  public invoice_journal_id: number;

  @Column({ name: 'iface_start_categ_id', type: 'int' })
  public iface_start_categ_id: number;

  @Column({ name: 'sequence_id', type: 'int' })
  public sequence_id: number;

  @Column({ name: 'sequence_line_id', type: 'int' })
  public sequence_line_id: number;

  @Column({ name: 'pricelist_id', type: 'int' })
  public pricelist_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'group_pos_manager_id', type: 'int' })
  public group_pos_manager_id: number;

  @Column({ name: 'group_pos_user_id', type: 'int' })
  public group_pos_user_id: number;

  @Column({ name: 'tip_product_id', type: 'int' })
  public tip_product_id: number;

  @Column({ name: 'default_fiscal_position_id', type: 'int' })
  public default_fiscal_position_id: number;

  @Column({ name: 'rounding_method', type: 'int' })
  public rounding_method: number;

  @Column({ name: 'warehouse_id', type: 'int' })
  public warehouse_id: number;

  @Column({ name: 'route_id', type: 'int' })
  public route_id: number;

  @Column({ name: 'limited_products_amount', type: 'int' })
  public limited_products_amount: number;

  @Column({ name: 'limited_partners_amount', type: 'int' })
  public limited_partners_amount: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'iface_tax_included', type: 'varchar' })
  public iface_tax_included: string;

  @Column({ name: 'proxy_ip', type: 'varchar' })
  public proxy_ip: string;

  @Column({ name: 'uuid', type: 'varchar' })
  public uuid: string;

  @Column({ name: 'picking_policy', type: 'varchar' })
  public picking_policy: string;

  @Column({ name: 'receipt_header', type: 'varchar' })
  public receipt_header: string;

  @Column({ name: 'receipt_footer', type: 'varchar' })
  public receipt_footer: string;

  @Column({ name: 'iface_cashdrawer', type: 'tinyint' })
  public iface_cashdrawer: boolean;

  @Column({ name: 'iface_electronic_scale', type: 'tinyint' })
  public iface_electronic_scale: boolean;

  @Column({ name: 'iface_customer_facing_display_via_proxy', type: 'tinyint' })
  public iface_customer_facing_display_via_proxy: boolean;

  @Column({ name: 'iface_customer_facing_display_local', type: 'tinyint' })
  public iface_customer_facing_display_local: boolean;

  @Column({ name: 'iface_print_via_proxy', type: 'tinyint' })
  public iface_print_via_proxy: boolean;

  @Column({ name: 'iface_scan_via_proxy', type: 'tinyint' })
  public iface_scan_via_proxy: boolean;

  @Column({ name: 'iface_big_scrollbars', type: 'tinyint' })
  public iface_big_scrollbars: boolean;

  @Column({ name: 'iface_print_auto', type: 'tinyint' })
  public iface_print_auto: boolean;

  @Column({ name: 'iface_print_skip_screen', type: 'tinyint' })
  public iface_print_skip_screen: boolean;

  @Column({ name: 'restrict_price_control', type: 'tinyint' })
  public restrict_price_control: boolean;

  @Column({
    name: 'is_margins_costs_accessible_to_every_user',
    type: 'tinyint',
  })
  public is_margins_costs_accessible_to_every_user: boolean;

  @Column({ name: 'set_maximum_difference', type: 'tinyint' })
  public set_maximum_difference: boolean;

  @Column({ name: 'active', type: 'tinyint' })
  public active: boolean;

  @Column({ name: 'iface_tipproduct', type: 'tinyint' })
  public iface_tipproduct: boolean;

  @Column({ name: 'use_pricelist', type: 'tinyint' })
  public use_pricelist: boolean;

  @Column({ name: 'tax_regime_selection', type: 'tinyint' })
  public tax_regime_selection: boolean;

  @Column({ name: 'start_category', type: 'tinyint' })
  public start_category: boolean;

  @Column({ name: 'limit_categories', type: 'tinyint' })
  public limit_categories: boolean;

  @Column({ name: 'module_pos_restaurant', type: 'tinyint' })
  public module_pos_restaurant: boolean;

  @Column({ name: 'module_pos_discount', type: 'tinyint' })
  public module_pos_discount: boolean;

  @Column({ name: 'module_pos_mercury', type: 'tinyint' })
  public module_pos_mercury: boolean;

  @Column({ name: 'is_posbox', type: 'tinyint' })
  public is_posbox: boolean;

  @Column({ name: 'is_header_or_footer', type: 'tinyint' })
  public is_header_or_footer: boolean;

  @Column({ name: 'module_pos_hr', type: 'tinyint' })
  public module_pos_hr: boolean;

  @Column({ name: 'other_devices', type: 'tinyint' })
  public other_devices: boolean;

  @Column({ name: 'cash_rounding', type: 'tinyint' })
  public cash_rounding: boolean;

  @Column({ name: 'only_round_cash_method', type: 'tinyint' })
  public only_round_cash_method: boolean;

  @Column({ name: 'manual_discount', type: 'tinyint' })
  public manual_discount: boolean;

  @Column({ name: 'ship_later', type: 'tinyint' })
  public ship_later: boolean;

  @Column({ name: 'limited_products_loading', type: 'tinyint' })
  public limited_products_loading: boolean;

  @Column({ name: 'product_load_background', type: 'tinyint' })
  public product_load_background: boolean;

  @Column({ name: 'limited_partners_loading', type: 'tinyint' })
  public limited_partners_loading: boolean;

  @Column({ name: 'partner_load_background', type: 'tinyint' })
  public partner_load_background: boolean;

  @Column({ name: 'amount_authorized_diff', type: 'varchar' })
  public amount_authorized_diff: string;

  @Column({ name: 'epson_printer_ip', type: 'varchar' })
  public epson_printer_ip: string;

  @Column({ name: 'crm_team_id', type: 'int' })
  public crm_team_id: number;

  @Column({ name: 'down_payment_product_id', type: 'int' })
  public down_payment_product_id: number;

  //----------------RELACION--------------------------------
  //uno a mucho hr-employee-category
  @OneToMany(
    () => HrEmployeeCategory,
    (hrEmployeeCategory) => hrEmployeeCategory.posCategory,
  )
  public hrEmployeeCategorys: HrEmployeeCategory;

  //uno a mucho ProductCategoryImage
  @OneToMany(
    () => ProductCategoryImage,
    (productCategoryImage) => productCategoryImage.posCategorys,
  )
  public productCategoryImages: ProductCategoryImage;

  //uno a mucho product.category
  @OneToMany(
    () => ProductsCategory,
    (productsCategory) => productsCategory.posCategorys,
  )
  public productsCategorys: ProductsCategory;

  //--------------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<PosCategory>) {
    Object.assign(this, data);
  }
}
