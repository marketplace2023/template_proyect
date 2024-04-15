import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResUsersModule } from './Modulo_de_Usuarios/res_users/res_users.module';
import { ResPartnerModule } from './Modulo_de_Usuarios/res_partner/res_partner.module';
import { ResGroupsModule } from './Modulo_de_Usuarios/res_groups/res_groups.module';
import { ResCompanyModule } from './Modulo_de_Usuarios/res_company/res_company.module';
import { IrModelAccesModule } from './Modulo_de_Usuarios/ir_model_acces/ir_model_acces.module';
import { IrRuleModule } from './Modulo_de_Usuarios/ir_rule/ir_rule.module';
import { ResUsersLogModule } from './Modulo_de_Usuarios/res_users_log/res_users_log.module';
import { ResUsersDeletionModule } from './Modulo_de_Usuarios/res_users_deletion/res_users_deletion.module';
import { ProductAttributeModule } from './Modulo_de_Productos/product_attribute/product_attribute.module';
import { ProductBrandModule } from './Modulo_de_Productos/product_brand/product_brand.module';
import { ProductCategoryModule } from './Modulo_de_Productos/product_category/product_category.module';
import { ProductPricelistModule } from './Modulo_de_Productos/product_pricelist/product_pricelist.module';
import { ProductProductModule } from './Modulo_de_Productos/product_product/product_product.module';
import { ProductTemplateModule } from './Modulo_de_Productos/product_template/product_template.module';
import { ProductUomModule } from './Modulo_de_Productos/product_uom/product_uom.module';
import { AccountJournalModule } from './Modulo_de_Ventas/account_journal/account_journal.module';
import { AccountMoveModule } from './Modulo_de_Ventas/account_move/account_move.module';
import { AccountPaymentModule } from './Modulo_de_Ventas/account_payment/account_payment.module';
import { DeliveryCarrierModule } from './Modulo_de_Ventas/delivery_carrier/delivery_carrier.module';
import { SaleOrderModule } from './Modulo_de_Ventas/sale_order/sale_order.module';
import { StockPickingModule } from './Modulo_de_Ventas/stock_picking/stock_picking.module';
import { PaymentAcquirerModule } from './Modulo_de_Compras/payment_acquirer/payment_acquirer.module';
import { SaleOrderLineModule } from './Modulo_de_Compras/sale-order-line/sale-order-line.module';
import { StockQuantModule } from './Modulo_de_Categorias/stock_quant/stock_quant.module';
import { RatingMixinModule } from './Modulo_de_Valoraciones/rating_mixin/rating_mixin.module';
import { RatingRatingModule } from './Modulo_de_Valoraciones/rating_rating/rating_rating.module';
import { DeliveryCarrierServiceModule } from './Modulo_de_Envios/delivery_carrier_service/delivery_carrier_service.module';
import { DeliveryGridModule } from './Modulo_de_Envios/delivery_grid/delivery_grid.module';
import { StockLocationRouteModule } from './Modulo_de_Envios/stock_location_route/stock_location_route.module';
import { StockMoveModule } from './Modulo_de_Envios/stock_move/stock_move.module';
import { StockMoveLineModule } from './Modulo_de_Envios/stock_move_line/stock_move_line.module';
import { StockPackOperationModule } from './Modulo_de_Envios/stock_pack_operation/stock_pack_operation.module';
import { StockPickingBatchModule } from './Modulo_de_Envios/stock_picking_batch/stock_picking_batch.module';
import { StockPickingPackageModule } from './Modulo_de_Envios/stock_picking_package/stock_picking_package.module';
import { StockProductionLotModule } from './Modulo_de_Envios/stock_production_lot/stock_production_lot.module';
import { StockQuantPackageModule } from './Modulo_de_Envios/stock_quant_package/stock_quant_package.module';
import { MailActivityModule } from './Modulo_de_Mensajeria/mail_activity/mail_activity.module';
import { MailAliasModule } from './Modulo_de_Mensajeria/mail_alias/mail_alias.module';
import { MailChannelModule } from './Modulo_de_Mensajeria/mail_channel/mail_channel.module';
import { MailChannelPartnerModule } from './Modulo_de_Mensajeria/mail_channel_partner/mail_channel_partner.module';
import { MailComposeMessagesModule } from './Modulo_de_Mensajeria/mail_compose_messages/mail_compose_messages.module';
import { MailFollowersModule } from './Modulo_de_Mensajeria/mail_followers/mail_followers.module';
import { MailMassMailingModule } from './Modulo_de_Mensajeria/mail_mass_mailing/mail_mass_mailing.module';
import { MailMassMailingContactsModule } from './Modulo_de_Mensajeria/mail_mass_mailing_contacts/mail_mass_mailing_contacts.module';
import { MailMessageModule } from './Modulo_de_Mensajeria/mail_message/mail_message.module';
import { MailMessageRelationModule } from './Modulo_de_Mensajeria/mail_message_relation/mail_message_relation.module';
import { MailMessageSubtypeModule } from './Modulo_de_Mensajeria/mail_message_subtype/mail_message_subtype.module';
import { MailNotificationModule } from './Modulo_de_Mensajeria/mail_notification/mail_notification.module';
import { MailShortcodeModule } from './Modulo_de_Mensajeria/mail_shortcode/mail_shortcode.module';
import { MailTemplateModule } from './Modulo_de_Mensajeria/mail_template/mail_template.module';
import { MailTemplatePreviewModule } from './Modulo_de_Mensajeria/mail_template_preview/mail_template_preview.module';
import { MailThreadModule } from './Modulo_de_Mensajeria/mail_thread/mail_thread.module';
import { AccountBankStatementModule } from './Modulo_de_Pagos/account_bank_statement/account_bank_statement.module';
import { AccountBankStatementImportModule } from './Modulo_de_Pagos/account_bank_statement_import/account_bank_statement_import.module';
import { AccountInvoiceModule } from './Modulo_de_Pagos/account_invoice/account_invoice.module';
import { AccountPaymentAcquirerModule } from './Modulo_de_Pagos/account_payment_acquirer/account_payment_acquirer.module';
import { AccountPaymentGroupModule } from './Modulo_de_Pagos/account_payment_group/account_payment_group.module';
import { AccountPaymentMethodModule } from './Modulo_de_Pagos/account_payment_method/account_payment_method.module';
import { AccountPaymentRegisterModule } from './Modulo_de_Pagos/account_payment_register/account_payment_register.module';
import { AccountPaymentTermModule } from './Modulo_de_Pagos/account_payment_term/account_payment_term.module';
import { ProductPricelistItemModule } from './Modulo_de_Promociones/product_pricelist_item/product_pricelist_item.module';
import { SaleReportModule } from './Modulo_de_Reportes/sale_report/sale_report.module';
import { AccountMoveLineModule } from './Modulo_de_Reportes/account_move_line/account_move_line.module';
import { PaymentTransactionModule } from './Modulo_de_Reportes/payment_transaction/payment_transaction.module';
import { SaleCouponModule } from './Modulo_de_Cupones/sale_coupon/sale_coupon.module';
import { SaleCouponBatchModule } from './Modulo_de_Cupones/sale_coupon_batch/sale_coupon_batch.module';
import { SaleCouponConditionModule } from './Modulo_de_Cupones/sale_coupon_condition/sale_coupon_condition.module';
import { SaleCouponHistoryModule } from './Modulo_de_Cupones/sale_coupon_history/sale_coupon_history.module';
import { SaleCouponProgramModule } from './Modulo_de_Cupones/sale_coupon_program/sale_coupon_program.module';
import { SaleCouponRewardModule } from './Modulo_de_Cupones/sale_coupon_reward/sale_coupon_reward.module';
import { SaleCouponRuleModule } from './Modulo_de_Cupones/sale_coupon_rule/sale_coupon_rule.module';
import { SaleCouponTemplateModule } from './Modulo_de_Cupones/sale_coupon_template/sale_coupon_template.module';
import { SaleCouponTypeModule } from './Modulo_de_Cupones/sale_coupon_type/sale_coupon_type.module';
import { SaleCouponUsageModule } from './Modulo_de_Cupones/sale_coupon_usage/sale_coupon_usage.module';
import { SaleCouponUsageReportModule } from './Modulo_de_Cupones/sale_coupon_usage_report/sale_coupon_usage_report.module';
import { SaleCouponValidationModule } from './Modulo_de_Cupones/sale_coupon_validation/sale_coupon_validation.module';
@Module({
  imports: [
    ResUsersModule,
    ResPartnerModule,
    ResGroupsModule,
    ResCompanyModule,
    IrModelAccesModule,
    IrRuleModule,
    ResUsersLogModule,
    ResUsersDeletionModule,
    ProductAttributeModule,
    ProductBrandModule,
    ProductCategoryModule,
    ProductPricelistModule,
    ProductProductModule,
    ProductTemplateModule,
    ProductUomModule,
    AccountJournalModule,
    AccountMoveModule,
    AccountPaymentModule,
    DeliveryCarrierModule,
    SaleOrderModule,
    StockPickingModule,
    PaymentAcquirerModule,
    SaleOrderLineModule,
    StockQuantModule,
    RatingMixinModule,
    RatingRatingModule,
    DeliveryCarrierServiceModule,
    DeliveryGridModule,
    StockLocationRouteModule,
    StockMoveModule,
    StockMoveLineModule,
    StockPackOperationModule,
    StockPickingBatchModule,
    StockPickingPackageModule,
    StockProductionLotModule,
    StockQuantPackageModule,
    MailActivityModule,
    MailAliasModule,
    MailChannelModule,
    MailChannelPartnerModule,
    MailComposeMessagesModule,
    MailFollowersModule,
    MailMassMailingModule,
    MailMassMailingContactsModule,
    MailMessageModule,
    MailMessageRelationModule,
    MailMessageSubtypeModule,
    MailNotificationModule,
    MailShortcodeModule,
    MailTemplateModule,
    MailTemplatePreviewModule,
    MailThreadModule,
    AccountBankStatementModule,
    AccountBankStatementImportModule,
    AccountInvoiceModule,
    AccountPaymentAcquirerModule,
    AccountPaymentGroupModule,
    AccountPaymentGroupModule,
    AccountPaymentMethodModule,
    AccountPaymentRegisterModule,
    AccountPaymentTermModule,
    ProductPricelistItemModule,
    SaleReportModule,
    AccountMoveLineModule,
    PaymentTransactionModule,
    SaleCouponModule,
    SaleCouponBatchModule,
    SaleCouponConditionModule,
    SaleCouponHistoryModule,
    SaleCouponProgramModule,
    SaleCouponRewardModule,
    SaleCouponRuleModule,
    SaleCouponTemplateModule,
    SaleCouponTypeModule,
    SaleCouponUsageModule,
    SaleCouponUsageReportModule,
    SaleCouponValidationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
