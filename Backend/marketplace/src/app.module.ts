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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
