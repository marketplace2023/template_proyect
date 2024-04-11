import { Module } from '@nestjs/common';
import { FavoritesUsersController } from './favorites-users.controller';
import { FavoritesUsersService } from './favorites-users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesUsers } from './entities/favorites-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoritesUsers])],
  controllers: [FavoritesUsersController],
  providers: [FavoritesUsersService],
})
export class FavoritesUsersModule {}
