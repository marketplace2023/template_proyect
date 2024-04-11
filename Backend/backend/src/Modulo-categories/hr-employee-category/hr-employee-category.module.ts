import { Module } from '@nestjs/common';
import { HrEmployeeCategoryController } from './hr-employee-category.controller';
import { HrEmployeeCategoryService } from './hr-employee-category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrEmployeeCategory } from './entities/hr-employee-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HrEmployeeCategory])],
  controllers: [HrEmployeeCategoryController],
  providers: [HrEmployeeCategoryService],
})
export class HrEmployeeCategoryModule {}
