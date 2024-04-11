import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResGroupsModule } from './Modulo-users/res-groups/res-groups.module';
import { ResPartnerModule } from './Modulo-users/res-partner/res-partner.module';
import { ResCompanyModule } from './Modulo-users/res-company/res-company.module';
import { ResUsersModule } from './Modulo-users/res-users/res-users.module';
import { ProductsPricelistModule } from './Modulo-products/products-pricelist/products-pricelist.module';
import { ProductsTemplateModule } from './Modulo-products/products-template/products-template.module';
import { ProductsCategoryModule } from './Modulo-products/products-category/products-category.module';
import { ProductsModule } from './Modulo-products/products/products.module';
import { ProductsSupplierModule } from './Modulo-products/products-supplier/products-supplier.module';
import { ProductsBarcodeModule } from './Modulo-products/products-barcode/products-barcode.module';
import { ProductsAttributeModule } from './Modulo-products/products-attribute/products-attribute.module';
import { ProductsAttributeValueModule } from './Modulo-products/products-attribute-value/products-attribute-value.module';
import { DeliveryCarrierModule } from './Modulo-Pedidos/delivery-carrier/delivery-carrier.module';
import { DeliveryZipPrefixModule } from './Modulo-Pedidos/delivery-zip-prefix/delivery-zip-prefix.module';
import { DeliveryPriceRuleModule } from './Modulo-Pedidos/delivery-price-rule/delivery-price-rule.module';
import { HrEmployeeCategoryModule } from './Modulo-categories/hr-employee-category/hr-employee-category.module';
import { PosCategoryModule } from './Modulo-categories/pos-category/pos-category.module';
import { ProductPublicCategoryModule } from './Modulo-categories/product-public-category/product-public-category.module';
import { StockStorageCategoryModule } from './Modulo-categories/stock-storage-category/stock-storage-category.module';
import { ResPartnerCategoryModule } from './Modulo-categories/res-partner-category/res-partner-category.module';
import { StockStorageCategoryCapacityModule } from './Modulo-categories/stock-storage-category-capacity/stock-storage-category-capacity.module';
import { UomCategoryModule } from './Modulo-categories/uom-category/uom-category.module';
import { RatingRatingModule } from './Modulo-rating/rating-rating/rating-rating.module';
import { RatingScaleModule } from './Modulo-rating/rating-scale/rating-scale.module';
import { RatingVoteModule } from './Modulo-rating/rating-vote/rating-vote.module';
import { RatingLineModule } from './Modulo-rating/rating-line/rating-line.module';
import { ChooseDeliveryPackageModule } from './Modulo-Envio/choose-delivery-package/choose-delivery-package.module';
import { ChooseDeliveryCarrierModule } from './Modulo-Envio/choose-delivery-carrier/choose-delivery-carrier.module';
import { MailChannelModule } from './Modulo-mail/mail-channel/mail-channel.module';
import { MailMessageModule } from './Modulo-mail/mail-message/mail-message.module';
import { MailFollowersModule } from './Modulo-mail/mail-followers/mail-followers.module';
import { MailMessageSubtypeModule } from './Modulo-mail/mail-message-subtype/mail-message-subtype.module';
import { MailNotificationModule } from './Modulo-mail/mail-notification/mail-notification.module';
import { MailActivityModule } from './Modulo-mail/mail-activity/mail-activity.module';
import { MailAliasModule } from './Modulo-mail/mail-alias/mail-alias.module';
import { MailBlacklistModule } from './Modulo-mail/mail-blacklist/mail-blacklist.module';
import { MailBlacklistRemoveModule } from './Modulo-mail/mail-blacklist-remove/mail-blacklist-remove.module';
import { MailActivityTypeModule } from './Modulo-mail/mail-activity-type/mail-activity-type.module';
import { MailChannelMemberModule } from './Modulo-mail/mail-channel-member/mail-channel-member.module';
import { MailChannelRtcSessionModule } from './Modulo-mail/mail-channel-rtc-session/mail-channel-rtc-session.module';
import { MailComposeMessageModule } from './Modulo-mail/mail-compose-message/mail-compose-message.module';
import { MailGatewayAllowedModule } from './Modulo-mail/mail-gateway-allowed/mail-gateway-allowed.module';
import { MailGuestModule } from './Modulo-mail/mail-guest/mail-guest.module';
import { MailIceServerModule } from './Modulo-mail/mail-ice-server/mail-ice-server.module';
import { MailLinkPreviewModule } from './Modulo-mail/mail-link-preview/mail-link-preview.module';
import { MailMailModule } from './Modulo-mail/mail-mail/mail-mail.module';
import { MailMessageScheduleModule } from './Modulo-mail/mail-message-schedule/mail-message-schedule.module';
import { MailResendMessageModule } from './Modulo-mail/mail-resend-message/mail-resend-message.module';
import { MailResendPartnerModule } from './Modulo-mail/mail-resend-partner/mail-resend-partner.module';
import { MailShortcodeModule } from './Modulo-mail/mail-shortcode/mail-shortcode.module';
import { MailWizardInviteModule } from './Modulo-mail/mail-wizard-invite/mail-wizard-invite.module';
import { MailTrackingValueModule } from './Modulo-mail/mail-tracking-value/mail-tracking-value.module';
import { MailTemplatePreviewModule } from './Modulo-mail/mail-template-preview/mail-template-preview.module';
import { MailTemplateModule } from './Modulo-mail/mail-template/mail-template.module';
import { PaymentIconModule } from './Modulo-pagos/payment-icon/payment-icon.module';
import { PaymentLinkWizardModule } from './Modulo-pagos/payment-link-wizard/payment-link-wizard.module';
import { PaymentProviderOnboardingWizardModule } from './Modulo-pagos/payment-provider-onboarding-wizard/payment-provider-onboarding-wizard.module';
import { PaymentProviderModule } from './Modulo-pagos/payment-provider/payment-provider.module';
import { PaymentRefundWizardModule } from './Modulo-pagos/payment-refund-wizard/payment-refund-wizard.module';
import { PaymentTokenModule } from './Modulo-pagos/payment-token/payment-token.module';
import { PaymentTransactionModule } from './Modulo-pagos/payment-transaction/payment-transaction.module';
import { AccountPaymentMethodModule } from './Modulo-pagos/account-payment-method/account-payment-method.module';
import { AccountPaymentModule } from './Modulo-pagos/account-payment/account-payment.module';
import { AccountPaymentMethodLineModule } from './Modulo-pagos/account-payment-method-line/account-payment-method-line.module';
import { AccountPaymentRegisterModule } from './Modulo-pagos/account-payment-register/account-payment-register.module';
import { AccountPaymentTermModule } from './Modulo-pagos/account-payment-term/account-payment-term.module';
import { AccountPaymentTermLineModule } from './Modulo-pagos/account-payment-term-line/account-payment-term-line.module';
import { PosMakePaymentModule } from './Modulo-pagos/pos-make-payment/pos-make-payment.module';
import { PosPaymentModule } from './Modulo-pagos/pos-payment/pos-payment.module';
import { PosPaymentMethodModule } from './Modulo-pagos/pos-payment-method/pos-payment-method.module';
import { SalePaymentProviderOnboardingWizardModule } from './Modulo-pagos/sale-payment-provider-onboarding-wizard/sale-payment-provider-onboarding-wizard.module';
import { SaleAdvancePaymentInvModule } from './Modulo-pagos/sale-advance-payment-inv/sale-advance-payment-inv.module';
import { SellerRatingLineModule } from './Modulo-valoracion-seller/seller-rating-line/seller-rating-line.module';
import { SellerRatingsModule } from './Modulo-valoracion-seller/seller-ratings/seller-ratings.module';
import { SellerRatingSettingsModule } from './Modulo-valoracion-seller/seller-rating-settings/seller-rating-settings.module';
import { SaleCouponModule } from './Modulo-promotions/sale-coupon/sale-coupon.module';
import { SaleCouponProgramModule } from './Modulo-promotions/sale-coupon-program/sale-coupon-program.module';
import { SaleCouponProgramLineModule } from './Modulo-promotions/sale-coupon-program-line/sale-coupon-program-line.module';
import { SalePromotionModule } from './Modulo-promotions/sale-promotion/sale-promotion.module';
import { SalePromotionCategoryModule } from './Modulo-promotions/sale-promotion-category/sale-promotion-category.module';
import { SalePromotionLineModule } from './Modulo-promotions/sale-promotion-line/sale-promotion-line.module';
import { SalePromotionRuleModule } from './Modulo-promotions/sale-promotion-rule/sale-promotion-rule.module';
import { AccountReportModule } from './Modulo-report/account-report/account-report.module';
import { AccountReportColumnModule } from './Modulo-report/account-report-column/account-report-column.module';
import { AccountReportExpressionModule } from './Modulo-report/account-report-expression/account-report-expression.module';
import { AccountReportExternalValueModule } from './Modulo-report/account-report-external-value/account-report-external-value.module';
import { AccountReportLineModule } from './Modulo-report/account-report-line/account-report-line.module';
import { IrActReportXmlModule } from './Modulo-report/ir-act-report-xml/ir-act-report-xml.module';
import { ReportLayoutModule } from './Modulo-report/report-layout/report-layout.module';
import { ReportPaperformatModule } from './Modulo-report/report-paperformat/report-paperformat.module';
import { DiscountCouponModule } from './Modulo-discount-coupons/discount-coupon/discount-coupon.module';
import { DiscountCouponHistoryModule } from './Modulo-discount-coupons/discount-coupon-history/discount-coupon-history.module';
import { DiscountRuleModule } from './Modulo-discount-coupons/discount-rule/discount-rule.module';
import { DiscountCouponLineModule } from './Modulo-discount-coupons/discount-coupon-line/discount-coupon-line.module';
import { SaleOrderModule } from './Modulo-store/sale-order/sale-order.module';
import { SaleOrderLineModule } from './Modulo-store/sale-order-line/sale-order-line.module';
import { StockPickingModule } from './Modulo-store/stock-picking/stock-picking.module';
import { StockPickingLineModule } from './Modulo-store/stock-picking-line/stock-picking-line.module';
import { StockPickingTypeModule } from './Modulo-store/stock-picking-type/stock-picking-type.module';
import { AccountMoveModule } from './Modulo-store/account-move/account-move.module';
import { AccountInvoiceModule } from './Modulo-store/account-invoice/account-invoice.module';
import { FavoritesItemsModule } from './Module-favorites/favorites-items/favorites-items.module';
import { FavoritesModule } from './Module-favorites/favorites/favorites.module';
import { FavoritesCategoriesModule } from './Module-favorites/favorites-categories/favorites-categories.module';
import { FavoritesNotificationsModule } from './Module-favorites/favorites-notifications/favorites-notifications.module';
import { FavoritesTagsModule } from './Module-favorites/favorites-tags/favorites-tags.module';
import { FavoritesUsersModule } from './Module-favorites/favorites-users/favorites-users.module';
import { FavoritesGroupsModule } from './Module-favorites/favorites-groups/favorites-groups.module';
import { FavoritesCompaniesModule } from './Module-favorites/favorites-companies/favorites-companies.module';
import { FavoritesLocationsModule } from './Module-favorites/favorites-locations/favorites-locations.module';
import { VideoStreamModule } from './Module-video/video-stream/video-stream.module';
import { VideoStreamPlaylistModule } from './Module-video/video-stream-playlist/video-stream-playlist.module';
import { VideoStreamTagModule } from './Module-video/video-stream-tag/video-stream-tag.module';
import { VideoStreamViewModule } from './Module-video/video-stream-view/video-stream-view.module';
import { VideoStreamCategoryModule } from './Module-video/video-stream-category/video-stream-category.module';
import { VideoStreamChannelModule } from './Module-video/video-stream-channel/video-stream-channel.module';
import { ResCountryStateModule } from './Modulo-users/res-country-state/res-country-state.module';
import { ResUsersLogModule } from './Modulo-users/res-users-log/res-users-log.module';
import { ResBankModule } from './Modulo-users/res-bank/res-bank.module';
import { ResCurrencyRateModule } from './Modulo-users/res-currency-rate/res-currency-rate.module';
import { ResUsersDeletionModule } from './Modulo-users/res-users-deletion/res-users-deletion.module';
import { ResUsersSettingsVolumesModule } from './Modulo-users/res-users-settings-volumes/res-users-settings-volumes.module';
import { ProductAccessoryRelModule } from './Modulo-products/product-accessory-rel/product-accessory-rel.module';
import { ProductAlternativeRelModule } from './Modulo-products/product-alternative-rel/product-alternative-rel.module';
import { ProductImageModule } from './Modulo-products/product-image/product-image.module';
import { ProductLabelLayoutModule } from './Modulo-products/product-label-layout/product-label-layout.module';
import { ProductLabelLayoutProductTemplateRelModule } from './Modulo-products/product-label-layout-product-template-rel/product-label-layout-product-template-rel.module';
import { ProductPricelistItemModule } from './Modulo-products/product-pricelist-item/product-pricelist-item.module';
import { ProductPackagingModule } from './Modulo-products/product-packaging/product-packaging.module';
import { ProductProductModule } from './Modulo-products/product-product/product-product.module';
import { ProductProductStockTrackConfirmationRelModule } from './Modulo-products/product-product-stock-track-confirmation-rel/product-product-stock-track-confirmation-rel.module';
import { ProductRemovalModule } from './Modulo-products/product-removal/product-removal.module';
import { ProductReplenishModule } from './Modulo-products/product-replenish/product-replenish.module';
import { ProductRibbonModule } from './Modulo-products/product-ribbon/product-ribbon.module';
import { ProductSupplierTaxesRelModule } from './Modulo-products/product-supplier-taxes-rel/product-supplier-taxes-rel.module';
import { ProductSupplierinfoModule } from './Modulo-products/product-supplierinfo/product-supplierinfo.module';
import { ProductTagModule } from './Modulo-products/product-tag/product-tag.module';
import { ProductTaxesRelModule } from './Modulo-products/product-taxes-rel/product-taxes-rel.module';
import { DeliveryMethodModule } from './Modulo-Pedidos/delivery-method/delivery-method.module';
import { DeliveryPackageModule } from './Modulo-Pedidos/delivery-package/delivery-package.module';
import { DeliveryShipmentModule } from './Modulo-Pedidos/delivery-shipment/delivery-shipment.module';
import { DeliveryTrackingModule } from './Modulo-Pedidos/delivery-tracking/delivery-tracking.module';
import { DeliveryTrackingHistoryModule } from './Modulo-Pedidos/delivery-tracking-history/delivery-tracking-history.module';
import { DeliveryTrackingEventModule } from './Modulo-Pedidos/delivery-tracking-event/delivery-tracking-event.module';
import { StockShipmentWeightModule } from './Modulo-Envio/stock-shipment-weight/stock-shipment-weight.module';
import { StockShipmentVolumeModule } from './Modulo-Envio/stock-shipment-volume/stock-shipment-volume.module';
import { StockShipmentReturnModule } from './Modulo-Envio/stock-shipment-return/stock-shipment-return.module';
import { StockShipmentTrackingModule } from './Modulo-Envio/stock-shipment-tracking/stock-shipment-tracking.module';
import { StockMoveModule } from './Modulo-Envio/stock-move/stock-move.module';
import { StockLocationModule } from './Modulo-Envio/stock-location/stock-location.module';
import { StockCarrierModule } from './Modulo-Envio/stock-carrier/stock-carrier.module';
import { StockWarehouseModule } from './Modulo-Envio/stock-warehouse/stock-warehouse.module';
import { StockPickingNoteModule } from './Modulo-Envio/stock-picking-note/stock-picking-note.module';
import { StockPickingPackageModule } from './Modulo-Envio/stock-picking-package/stock-picking-package.module';
import { StockPickingPackageLineModule } from './Modulo-Envio/stock-picking-package-line/stock-picking-package-line.module';
import { StockPickingStatusModule } from './Modulo-Envio/stock-picking-status/stock-picking-status.module';
import { StockPickingBatchModule } from './Modulo-Envio/stock-picking-batch/stock-picking-batch.module';
import { StockPickingTrackingModule } from './Modulo-Envio/stock-picking-tracking/stock-picking-tracking.module';
import { OrderLineModule } from './Modulo-Envio/order-line/order-line.module';
import { SaleShopModule } from './Modulo-promotions/sale-shop/sale-shop.module';
import { SaleReturnModule } from './Modulo-promotions/sale-return/sale-return.module';
import { SaleReportModule } from './Modulo-promotions/sale-report/sale-report.module';
import { SaleCommissionModule } from './Modulo-promotions/sale-commission/sale-commission.module';
import { SaleChannelModule } from './Modulo-promotions/sale-channel/sale-channel.module';
import { SaleRatingModule } from './Modulo-promotions/sale-rating/sale-rating.module';
import { SaleWishModule } from './Modulo-promotions/sale-wish/sale-wish.module';
import { ProductProductTemplateModule } from './Modulo-products/product-product-template/product-product-template.module';
import { SalePromotionCodeModule } from './Modulo-promotions/sale-promotion-code/sale-promotion-code.module';
import { SalePromotionTemplateModule } from './Modulo-promotions/sale-promotion-template/sale-promotion-template.module';
import { SalePromotionProductRuleModule } from './Modulo-promotions/sale-promotion-product-rule/sale-promotion-product-rule.module';
import { SalePromotionCategoryRuleModule } from './Modulo-promotions/sale-promotion-category-rule/sale-promotion-category-rule.module';
import { SalePromotionCustomerRuleModule } from './Modulo-promotions/sale-promotion-customer-rule/sale-promotion-customer-rule.module';
import { SalePromotionCartRuleModule } from './Modulo-promotions/sale-promotion-cart-rule/sale-promotion-cart-rule.module';
import { SalePromotionAppliedRuleModule } from './Modulo-promotions/sale-promotion-applied-rule/sale-promotion-applied-rule.module';
import { PaymentMethodModule } from './Modulo-pagos/payment-method/payment-method.module';
import { PaymentAcquirerModule } from './Modulo-pagos/payment-acquirer/payment-acquirer.module';
import { PaymentLineModule } from './Modulo-pagos/payment-line/payment-line.module';
import { AttributeValueCategoryModule } from './Modulo-categories/attribute-value-category/attribute-value-category.module';
import { ProductCategoryImageModule } from './Modulo-categories/product-category-image/product-category-image.module';
import { IrModuleCategoryModule } from './Modulo-categories/ir-module-category/ir-module-category.module';
import { ProductAttributeCategoryModule } from './Modulo-categories/product-attribute-category/product-attribute-category.module';
import { CategoryDescriptionModule } from './Modulo-categories/category-description/category-description.module';
import { CategoryImageGalleryModule } from './Modulo-categories/category-image-gallery/category-image-gallery.module';
import { CrmTagCategoryModule } from './Modulo-categories/crm-tag-category/crm-tag-category.module';
import { SaleOrderCategoryModule } from './Modulo-categories/sale-order-category/sale-order-category.module';
import { PurchaseOrderCategoryModule } from './Modulo-categories/purchase-order-category/purchase-order-category.module';
import { AccountAccountModule } from './Modulo-pagos/account-account/account-account.module';
import { AccountBankStatementModule } from './Modulo-pagos/account-bank-statement/account-bank-statement.module';
import { AccountJournalModule } from './Modulo-pagos/account-journal/account-journal.module';
import { PaymentModule } from './Modulo-pagos/payment/payment.module';
import { AccountPaymentGroupModule } from './Modulo-pagos/account-payment-group/account-payment-group.module';
import { PaymentTermModule } from './Modulo-pagos/payment-term/payment-term.module';
import { PaymentReceiptModule } from './Modulo-pagos/payment-receipt/payment-receipt.module';
import { AccountPaymentAccountBankStatementLineRelModule } from './Modulo-pagos/account-payment-account-bank-statement-line-rel/account-payment-account-bank-statement-line-rel.module';
import { AccountPaymentRegisterMoveLineRelModule } from './Modulo-pagos/account-payment-register-move-line-rel/account-payment-register-move-line-rel.module';
import { AccountTaxSaleAdvancePaymentInvRelModule } from './Modulo-pagos/account-tax-sale-advance-payment-inv-rel/account-tax-sale-advance-payment-inv-rel.module';
import { PosConfigPosPaymentMethodRelModule } from './Modulo-pagos/pos-config-pos-payment-method-rel/pos-config-pos-payment-method-rel.module';
import { AccountTaxModule } from './Modulo-pagos/account-tax/account-tax.module';
import { DeliveryOrderModule } from './Modulo-pagos/delivery-order/delivery-order.module';
import { PaymentOrderModule } from './Modulo-pagos/payment-order/payment-order.module';
import { AccountInvoiceLineModule } from './Modulo-pagos/account-invoice-line/account-invoice-line.module';
import { InvoiceModule } from './Modulo-pagos/invoice/invoice.module';
import { AccountMoveLineModule } from './Modulo-pagos/account-move-line/account-move-line.module';
import { RatingTagModule } from './Modulo-rating/rating-tag/rating-tag.module';
import { RatingImageModule } from './Modulo-rating/rating-image/rating-image.module';
import { VideoStreamEmbedModule } from './Module-video/video-stream-embed/video-stream-embed.module';
import { VideoStreamCommentModule } from './Module-video/video-stream-comment/video-stream-comment.module';
import { VideoStreamRatingModule } from './Module-video/video-stream-rating/video-stream-rating.module';
import { VideoStreamSubscriptionModule } from './Module-video/video-stream-subscription/video-stream-subscription.module';
import { CouponCodeModule } from './Modulo-discount-coupons/coupon-code/coupon-code.module';
import { SaleCouponHistoryModule } from './Modulo-discount-coupons/sale-coupon-history/sale-coupon-history.module';
import { SaleCouponReportModule } from './Modulo-discount-coupons/sale-coupon-report/sale-coupon-report.module';
import { SaleCouponRuleModule } from './Modulo-discount-coupons/sale-coupon-rule/sale-coupon-rule.module';
import { SaleOrderPaymentModule } from './Modulo-discount-coupons/sale-order-payment/sale-order-payment.module';
import { IrModelAccessModule } from './Modulo-users/ir-model-access/ir-model-access.module';
import { IrModelAccessGroupsRelModule } from './Modulo-users/ir-model-access-groups-rel/ir-model-access-groups-rel.module';
import { IrRuleModule } from './Modulo-users/ir-rule/ir-rule.module';
import { ResCountry } from './Modulo-users/res-country/entities/res-country.entity';
import { ResCurrencyModule } from './Modulo-users/res-currency/res-currency.module';
import { ResCountryModule } from './Modulo-users/res-country/res-country.module';
import { ResGroupsImpliedIdsModule } from './Modulo-users/res-groups-implied-ids/res-groups-implied-ids.module';
import { ResGroupsRulesModule } from './Modulo-users/res-groups-rules/res-groups-rules.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'marketplace_principal',
      entities: ['dist/**/*.entity.js'],
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    }),
    ResGroupsModule,
    ResPartnerModule,
    ResCompanyModule,
    ResUsersModule,
    ProductsModule,
    ProductsAttributeModule,
    ProductsAttributeValueModule,
    ProductsCategoryModule,
    ProductsTemplateModule,
    ProductsPricelistModule,
    ProductsSupplierModule,
    ProductsBarcodeModule,
    DeliveryCarrierModule,
    DeliveryZipPrefixModule,
    DeliveryPriceRuleModule,
    HrEmployeeCategoryModule,
    PosCategoryModule,
    ProductPublicCategoryModule,
    StockStorageCategoryModule,
    ResPartnerCategoryModule,
    StockStorageCategoryCapacityModule,
    UomCategoryModule,
    RatingRatingModule,
    RatingScaleModule,
    RatingVoteModule,
    RatingLineModule,
    ChooseDeliveryPackageModule,
    ChooseDeliveryCarrierModule,
    MailChannelModule,
    MailMessageModule,
    MailFollowersModule,
    MailNotificationModule,
    MailActivityModule,
    MailAliasModule,
    MailBlacklistModule,
    MailBlacklistRemoveModule,
    MailActivityTypeModule,
    MailChannelMemberModule,
    MailChannelRtcSessionModule,
    MailComposeMessageModule,
    MailGatewayAllowedModule,
    MailGuestModule,
    MailIceServerModule,
    MailLinkPreviewModule,
    MailMailModule,
    MailMessageScheduleModule,
    MailMessageSubtypeModule,
    MailResendMessageModule,
    MailResendPartnerModule,
    MailShortcodeModule,
    MailWizardInviteModule,
    MailTrackingValueModule,
    MailTemplatePreviewModule,
    MailTemplateModule,
    PaymentIconModule,
    PaymentLinkWizardModule,
    PaymentProviderOnboardingWizardModule,
    PaymentProviderModule,
    PaymentRefundWizardModule,
    PaymentTokenModule,
    PaymentTransactionModule,
    AccountPaymentMethodModule,
    AccountPaymentModule,
    AccountPaymentMethodLineModule,
    AccountPaymentRegisterModule,
    AccountPaymentTermModule,
    AccountPaymentTermLineModule,
    PosMakePaymentModule,
    PosPaymentModule,
    PosPaymentMethodModule,
    SalePaymentProviderOnboardingWizardModule,
    SaleAdvancePaymentInvModule,
    SellerRatingsModule,
    SellerRatingLineModule,
    SellerRatingSettingsModule,
    SaleCouponModule,
    SaleCouponProgramModule,
    SaleCouponProgramLineModule,
    SalePromotionModule,
    SalePromotionCategoryModule,
    SalePromotionRuleModule,
    SalePromotionLineModule,
    AccountReportModule,
    AccountReportColumnModule,
    AccountReportExpressionModule,
    AccountReportExternalValueModule,
    AccountReportLineModule,
    IrActReportXmlModule,
    ReportLayoutModule,
    ReportPaperformatModule,
    DiscountCouponModule,
    DiscountCouponHistoryModule,
    DiscountCouponLineModule,
    DiscountRuleModule,
    SaleOrderModule,
    SaleOrderLineModule,
    StockPickingModule,
    StockPickingLineModule,
    StockPickingTypeModule,
    AccountMoveModule,
    AccountInvoiceModule,
    FavoritesItemsModule,
    FavoritesModule,
    FavoritesCategoriesModule,
    FavoritesNotificationsModule,
    FavoritesTagsModule,
    FavoritesUsersModule,
    FavoritesGroupsModule,
    FavoritesCompaniesModule,
    FavoritesLocationsModule,
    VideoStreamModule,
    VideoStreamPlaylistModule,
    VideoStreamTagModule,
    VideoStreamViewModule,
    VideoStreamCategoryModule,
    VideoStreamChannelModule,
    ResCountryStateModule,
    ResUsersLogModule,
    ResBankModule,
    ResCurrencyRateModule,
    ResUsersDeletionModule,
    ResUsersSettingsVolumesModule,
    ProductAccessoryRelModule,
    ProductAlternativeRelModule,
    ProductImageModule,
    ProductLabelLayoutModule,
    ProductLabelLayoutProductTemplateRelModule,
    ProductPackagingModule,
    ProductPricelistItemModule,
    ProductProductModule,
    ProductProductStockTrackConfirmationRelModule,
    ProductRemovalModule,
    ProductReplenishModule,
    ProductRibbonModule,
    ProductSupplierTaxesRelModule,
    ProductSupplierinfoModule,
    ProductTagModule,
    ProductTaxesRelModule,
    DeliveryPackageModule,
    DeliveryShipmentModule,
    DeliveryTrackingModule,
    DeliveryTrackingHistoryModule,
    DeliveryTrackingEventModule,
    DeliveryMethodModule,
    StockShipmentWeightModule,
    StockShipmentVolumeModule,
    StockShipmentReturnModule,
    StockShipmentTrackingModule,
    StockMoveModule,
    StockLocationModule,
    StockCarrierModule,
    StockWarehouseModule,
    StockPickingNoteModule,
    StockPickingPackageModule,
    StockPickingPackageLineModule,
    StockPickingBatchModule,
    StockPickingTrackingModule,
    StockPickingStatusModule,
    OrderLineModule,
    SaleChannelModule,
    SaleShopModule,
    SaleReturnModule,
    SaleReportModule,
    SaleCommissionModule,
    SaleRatingModule,
    SaleWishModule,
    ProductProductTemplateModule,
    SalePromotionCodeModule,
    SalePromotionTemplateModule,
    SalePromotionProductRuleModule,
    SalePromotionCategoryRuleModule,
    SalePromotionCustomerRuleModule,
    SalePromotionCartRuleModule,
    SalePromotionAppliedRuleModule,
    PaymentMethodModule,
    PaymentAcquirerModule,
    PaymentLineModule,
    AttributeValueCategoryModule,
    ProductCategoryImageModule,
    IrModuleCategoryModule,
    ProductAttributeCategoryModule,
    CategoryDescriptionModule,
    CategoryImageGalleryModule,
    CrmTagCategoryModule,
    SaleOrderCategoryModule,
    PurchaseOrderCategoryModule,
    AccountAccountModule,
    AccountBankStatementModule,
    AccountJournalModule,
    PaymentModule,
    AccountPaymentGroupModule,
    PaymentTermModule,
    PaymentReceiptModule,
    AccountPaymentAccountBankStatementLineRelModule,
    AccountPaymentRegisterMoveLineRelModule,
    AccountTaxSaleAdvancePaymentInvRelModule,
    PosConfigPosPaymentMethodRelModule,
    AccountTaxModule,
    DeliveryOrderModule,
    PaymentOrderModule,
    AccountInvoiceLineModule,
    InvoiceModule,
    AccountMoveLineModule,
    RatingTagModule,
    RatingImageModule,
    VideoStreamEmbedModule,
    VideoStreamCommentModule,
    VideoStreamRatingModule,
    VideoStreamSubscriptionModule,
    CouponCodeModule,
    SaleCouponHistoryModule,
    SaleCouponReportModule,
    SaleCouponRuleModule,
    SaleOrderPaymentModule,
    IrModelAccessModule,
    IrModelAccessGroupsRelModule,
    IrRuleModule,
    ResCountryModule,
    ResCurrencyModule,
    ResGroupsImpliedIdsModule,
    ResGroupsRulesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
