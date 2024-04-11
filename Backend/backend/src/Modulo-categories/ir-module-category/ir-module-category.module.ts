import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrModuleCategory } from '../ir-module-category/entities/ir-module-category.entity';
import { IrModuleCategoryController } from './ir-module-category.controller';
import { IrModuleCategoryService } from './ir-module-category.service';

@Module({
  imports: [TypeOrmModule.forFeature([IrModuleCategory])],
  controllers: [IrModuleCategoryController],
  providers: [IrModuleCategoryService],
})
export class IrModuleCategoryModule {}
