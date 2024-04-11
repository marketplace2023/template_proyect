import { Module } from '@nestjs/common';
import { ProductAccessoryRelController } from './product-accessory-rel.controller';
import { ProductAccessoryRelService } from './product-accessory-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductAccessoryRel } from './entities/product-accessory-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductAccessoryRel])],
  controllers: [ProductAccessoryRelController],
  providers: [ProductAccessoryRelService],
})
export class ProductAccessoryRelModule {}
