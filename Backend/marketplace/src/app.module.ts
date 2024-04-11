import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { SalesModule } from './sales/sales.module';
import { PurchasesModule } from './purchases/purchases.module';
import { CategoriesModule } from './categories/categories.module';
import { RatingModule } from './rating/rating.module';
import { ShipmentsModule } from './shipments/shipments.module';
import { MessagingModule } from './messaging/messaging.module';
import { PaymentsModule } from './payments/payments.module';
import { SellersModule } from './sellers/sellers.module';
import { PromotionsModule } from './promotions/promotions.module';
import { ReportsModule } from './reports/reports.module';
import { DiscountCouponsModule } from './discount-coupons/discount-coupons.module';
import { ShopsModule } from './shops/shops.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CrmModule } from './crm/crm.module';
import { SalesOrdersModule } from './sales-orders/sales-orders.module';
import { InvoicesModule } from './invoices/invoices.module';
import { InventoryModule } from './inventory/inventory.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [UsersModule, ProductsModule, SalesModule, PurchasesModule, CategoriesModule, RatingModule, ShipmentsModule, MessagingModule, PaymentsModule, SellersModule, PromotionsModule, ReportsModule, DiscountCouponsModule, ShopsModule, FavoritesModule, CrmModule, SalesOrdersModule, InvoicesModule, InventoryModule, QuotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
