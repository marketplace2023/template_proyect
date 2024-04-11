import { Module } from '@nestjs/common';
import { PosCategoryController } from './pos-category.controller';
import { PosCategoryService } from './pos-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosCategory } from './entities/pos-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PosCategory])],
  controllers: [PosCategoryController],
  providers: [PosCategoryService],
})
export class PosCategoryModule {}
