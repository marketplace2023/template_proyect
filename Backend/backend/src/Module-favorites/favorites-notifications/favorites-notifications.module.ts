import { Module } from '@nestjs/common';
import { FavoritesNotificationsService } from './favorites-notifications.service';
import { FavoritesNotificationsController } from './favorites-notifications.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesNotifications } from './entities/favorites-notifications.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesNotifications])],
  controllers: [FavoritesNotificationsController],
  providers: [FavoritesNotificationsService],
})
export class FavoritesNotificationsModule {}
