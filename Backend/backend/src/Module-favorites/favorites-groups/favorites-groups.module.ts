import { Module } from '@nestjs/common';
import { FavoritesGroupsController } from './favorites-groups.controller';
import { FavoritesGroupsService } from './favorites-groups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesGroups } from './entities/favorites-groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesGroups])],
  controllers: [FavoritesGroupsController],
  providers: [FavoritesGroupsService],
})
export class FavoritesGroupsModule {}
