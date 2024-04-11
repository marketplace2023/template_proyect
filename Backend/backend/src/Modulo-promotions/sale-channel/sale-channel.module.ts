import { Module } from '@nestjs/common';
import { SaleChannelController } from './sale-channel.controller';
import { SaleChannelService } from './sale-channel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleChannel } from './entities/sale-channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleChannel])],
  controllers: [SaleChannelController],
  providers: [SaleChannelService],
})
export class SaleChannelModule {}
