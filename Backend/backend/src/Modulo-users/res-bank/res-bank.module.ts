import { Module } from '@nestjs/common';
import { ResBankController } from './res-bank.controller';
import { ResBankService } from './res-bank.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResBank } from './entities/res-bank.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResBank])],
  controllers: [ResBankController],
  providers: [ResBankService],
})
export class ResBankModule {}
