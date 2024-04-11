import { ProductProductTemplate } from 'src/Modulo-products/product-product-template/entities/product-product-template.entity';
import { ProductProduct } from 'src/Modulo-products/product-product/entities/product-product.entity';
import { ProductsCategory } from 'src/Modulo-products/products-category/entities/products-category.entity';
import { AccountInvoice } from 'src/Modulo-store/account-invoice/entities/account-invoice.entity';
import { SaleOrder } from 'src/Modulo-store/sale-order/entities/sale-order.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'account_move' })
export class AccountMove {
  @PrimaryGeneratedColumn({ name: 'id' })
  public id: number;

  @Column({ name: 'message_main_attachment_id', type: 'int' })
  public message_main_attachment_id: number;

  @Column({ name: 'journal_id', type: 'int' })
  public journal_id: number;

  @Column({ name: 'company_id', type: 'int' })
  public company_id: number;

  @Column({ name: 'payment_id', type: 'int' })
  public payment_id: number;

  @Column({ name: 'statement_line_id', type: 'int' })
  public statement_line_id: number;

  @Column({ name: 'tax_cash_basis_rec_id', type: 'int' })
  public tax_cash_basis_rec_id: number;

  @Column({ name: 'tax_cash_basis_origin_move_id', type: 'int' })
  public tax_cash_basis_origin_move_id: number;

  @Column({ name: 'auto_post_origin_id', type: 'int' })
  public auto_post_origin_id: number;

  @Column({ name: 'secure_sequence_number', type: 'int' })
  public secure_sequence_number: number;

  @Column({ name: 'invoice_payment_term_id', type: 'int' })
  public invoice_payment_term_id: number;

  @Column({ name: 'partner_id', type: 'int' })
  public partner_id: number;

  @Column({ name: 'commercial_partner_id', type: 'int' })
  public commercial_partner_id: number;

  @Column({ name: 'partner_shipping_id', type: 'int' })
  public partner_shipping_id: number;

  @Column({ name: 'partner_bank_id', type: 'int' })
  public partner_bank_id: number;

  @Column({ name: 'fiscal_position_id', type: 'int' })
  public fiscal_position_id: number;

  @Column({ name: 'currency_id', type: 'int' })
  public currency_id: number;

  @Column({ name: 'reversed_entry_id', type: 'int' })
  public reversed_entry_id: number;

  @Column({ name: 'invoice_user_id', type: 'int' })
  public invoice_user_id: number;

  @Column({ name: 'invoice_incoterm_id', type: 'int' })
  public invoice_incoterm_id: number;

  @Column({ name: 'invoice_cash_rounding_id', type: 'int' })
  public invoice_cash_rounding_id: number;

  @Column({ name: 'create_uid', type: 'int' })
  public create_uid: number;

  @Column({ name: 'write_uid', type: 'int' })
  public write_uid: number;

  @Column({ name: 'sequence_prefix', type: 'varchar' })
  public sequence_prefix: string;

  @Column({ name: 'access_token', type: 'varchar' })
  public access_token: string;

  @Column({ name: 'name', type: 'varchar' })
  public name: string;

  @Column({ name: 'ref', type: 'varchar' })
  public ref: string;

  @Column({ name: 'state', type: 'varchar' })
  public state: string;

  @Column({ name: 'move_type', type: 'varchar' })
  public move_type: string;

  @Column({ name: 'auto_post', type: 'varchar' })
  public auto_post: string;

  @Column({ name: 'inalterable_hash', type: 'varchar' })
  public inalterable_hash: string;

  @Column({ name: 'payment_reference', type: 'varchar' })
  public payment_reference: string;

  @Column({ name: 'qr_code_method', type: 'varchar' })
  public qr_code_method: string;

  @Column({ name: 'payment_state', type: 'varchar' })
  public payment_state: string;

  @Column({ name: 'invoice_source_email', type: 'varchar' })
  public invoice_source_email: string;

  @Column({ name: 'invoice_partner_display_name', type: 'varchar' })
  public invoice_partner_display_name: string;

  @Column({ name: 'invoice_origin', type: 'varchar' })
  public invoice_origin: string;

  @Column({ name: 'date', type: 'date' })
  public date: Date;

  @Column({ name: 'auto_post_until', type: 'date' })
  public auto_post_until: Date;

  @Column({ name: 'invoice_date', type: 'date' })
  public invoice_date: Date;

  @Column({ name: 'invoice_date_due', type: 'date' })
  public invoice_date_due: Date;

  @Column({ name: 'narration', type: 'varchar' })
  public narration: string;

  @Column({ name: 'amount_untaxed', type: 'int' })
  public amount_untaxed: number;

  @Column({ name: 'amount_tax', type: 'int' })
  public amount_tax: number;

  @Column({ name: 'amount_total', type: 'int' })
  public amount_total: number;

  @Column({ name: 'amount_residual', type: 'int' })
  public amount_residual: number;

  @Column({ name: 'amount_untaxed_signed', type: 'int' })
  public amount_untaxed_signed: number;

  @Column({ name: 'amount_tax_signed', type: 'int' })
  public amount_tax_signed: number;

  @Column({ name: 'amount_total_signed', type: 'int' })
  public amount_total_signed: number;

  @Column({ name: 'amount_total_in_currency_signed', type: 'int' })
  public amount_total_in_currency_signed: number;

  @Column({ name: 'amount_residual_signed', type: 'int' })
  public amount_residual_signed: number;

  @Column({ name: 'quick_edit_total_amount', type: 'int' })
  public quick_edit_total_amount: number;

  @Column({ name: 'is_storno', type: 'tinyint' })
  public is_storno: boolean;

  @Column({ name: 'always_tax_exigible', type: 'tinyint' })
  public always_tax_exigible: boolean;

  @Column({ name: 'to_check', type: 'tinyint' })
  public to_check: boolean;

  @Column({ name: 'posted_before', type: 'tinyint' })
  public posted_before: boolean;

  @Column({ name: 'is_move_sent', type: 'tinyint' })
  public is_move_sent: boolean;

  @Column({ name: 'edi_state', type: 'varchar' })
  public edi_state: string;

  @Column({ name: 'campaign_id', type: 'int' })
  public campaign_id: number;

  @Column({ name: 'source_id', type: 'int' })
  public source_id: number;

  @Column({ name: 'medium_id', type: 'int' })
  public medium_id: number;

  @Column({ name: 'team_id', type: 'int' })
  public team_id: number;

  @Column({ name: 'stock_move_id', type: 'int' })
  public stock_move_id: number;

  @Column({ name: 'website_id', type: 'int' })
  public website_id: number;

  //--------------------------------------------------------------------
  @Column({ name: 'account_move_id', type: 'int' })
  public account_move_id: number;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.accountMoves)
  @JoinColumn({ name: 'account_move_id' })
  public saleOrder: SaleOrder;
  //---------------------------------------------------------------------

  //-----------------------tienda-------------------------------
  //uno a uno stockPicking
  @OneToOne(
    () => AccountInvoice,
    (accountInvoice) => accountInvoice.accountMoves,
  )
  public accountInvoices: AccountInvoice;

  //--------------------Relaciones de Tienda-----------------------------
  //mucho a uno con StockPicking
  @Column({ name: 'Picking_id', type: 'int' })
  public Picking_id: number;

  @ManyToOne(() => StockPicking, (stockPicking) => stockPicking.accountMoves)
  @JoinColumn({ name: 'Picking_id' })
  public stockPickings: StockPicking;

  //mucho a uno con stockPickingType
  @Column({ name: 'stockPType_id', type: 'int' })
  public stockPType_id: number;

  @ManyToOne(
    () => StockPickingType,
    (stockPickingType) => stockPickingType.accountMoves,
  )
  @JoinColumn({ name: 'stockPType_id' })
  public stockPickingTypes: StockPickingType;

  //mucho a uno con stockPickingLine
  @Column({ name: 'stockPLine_id', type: 'int' })
  public stockPLine_id: number;

  @ManyToOne(
    () => StockPickingLine,
    (stockPickingLine) => stockPickingLine.accountMoves,
  )
  @JoinColumn({ name: 'stockPLine_id' })
  public stockPickingLines: StockPickingLine;

  //mucho a uno con productProductTemplate
  @Column({ name: 'p_p_template_id', type: 'int' })
  public p_p_template_id: number;

  @ManyToOne(
    () => ProductProductTemplate,
    (productProductTemplate) => productProductTemplate.accountMoves,
  )
  @JoinColumn({ name: 'p_p_template_id' })
  public productProductTemplates: ProductProductTemplate;

  //Muchos a Muchos productCategory
  @ManyToMany(() => ProductsCategory, { cascade: true })
  @JoinTable({
    name: 'account_move_product_category',
    joinColumn: { name: 'account_move_id' },
    inverseJoinColumn: { name: 'product_category_id' },
  })
  public productsCategory: ProductsCategory[];

  //Muchos a Muchos producProduct
  @ManyToMany(() => ProductProduct, { cascade: true })
  @JoinTable({
    name: 'account_move_productproduct',
    joinColumn: { name: 'account_move_id' },
    inverseJoinColumn: { name: 'productProduct_id' },
  })
  public productProduct: ProductProduct[];
  //-----------------------------------------------------

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', select: false })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', select: false })
  public deletedAt: Date;

  constructor(data: Partial<AccountMove>) {
    Object.assign(this, data);
  }
}
