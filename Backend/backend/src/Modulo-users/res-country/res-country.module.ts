import { Module } from '@nestjs/common';
import { ResCountryController } from './res-country.controller';
import { ResCountryService } from './res-country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResCountry } from './entities/res-country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResCountry])],
  controllers: [ResCountryController],
  providers: [ResCountryService],
})
export class ResCountryModule {}
