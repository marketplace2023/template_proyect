import { Module } from '@nestjs/common';
import { FavoritesItemsController } from './favorites-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesItems } from './entities/favorites-items.entity';
import { FavoritesItemsItemsService } from './favorites-items.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesItems])],
  controllers: [FavoritesItemsController],
  providers: [FavoritesItemsItemsService],
})
export class FavoritesItemsModule {}
