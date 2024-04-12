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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
