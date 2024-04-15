import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerSubscriptionService } from './seller_subscription.service';
import { CreateSellerSubscriptionDto } from './dto/create-seller_subscription.dto';
import { UpdateSellerSubscriptionDto } from './dto/update-seller_subscription.dto';

@Controller('seller-subscription')
export class SellerSubscriptionController {
  constructor(
    private readonly sellerSubscriptionService: SellerSubscriptionService,
  ) {}

  @Post()
  create(@Body() createSellerSubscriptionDto: CreateSellerSubscriptionDto) {
    return this.sellerSubscriptionService.create(createSellerSubscriptionDto);
  }

  @Get()
  findAll() {
    return this.sellerSubscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerSubscriptionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerSubscriptionDto: UpdateSellerSubscriptionDto,
  ) {
    return this.sellerSubscriptionService.update(
      +id,
      updateSellerSubscriptionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerSubscriptionService.remove(+id);
  }
}
//administracion-promociones-suscripciones                          # (seller.promotion, seller.subscription)
//# Gestión de promociones y manejo de suscripciones de vendedores.
