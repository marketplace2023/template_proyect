import { Module } from '@nestjs/common';
import { OrderLineController } from './order-line.controller';
import { OrderLineService } from './order-line.service';
import { OrderLine } from './entities/order-line.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderLine])],
  controllers: [OrderLineController],
  providers: [OrderLineService],
})
export class OrderLineModule {}
