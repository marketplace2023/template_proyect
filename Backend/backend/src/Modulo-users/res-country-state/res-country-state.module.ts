import { Module } from '@nestjs/common';
import { ResCountryStateController } from './res-country-state.controller';
import { ResCountryStateService } from './res-country-state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResCountryState } from './entities/res-country-state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResCountryState])],
  controllers: [ResCountryStateController],
  providers: [ResCountryStateService],
})
export class ResCountryStateModule {}
