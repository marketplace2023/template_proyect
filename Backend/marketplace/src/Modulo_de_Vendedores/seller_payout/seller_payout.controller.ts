import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerPayoutService } from './seller_payout.service';
import { CreateSellerPayoutDto } from './dto/create-seller_payout.dto';
import { UpdateSellerPayoutDto } from './dto/update-seller_payout.dto';

@Controller('seller-payout')
export class SellerPayoutController {
  constructor(private readonly sellerPayoutService: SellerPayoutService) {}

  @Post()
  create(@Body() createSellerPayoutDto: CreateSellerPayoutDto) {
    return this.sellerPayoutService.create(createSellerPayoutDto);
  }

  @Get()
  findAll() {
    return this.sellerPayoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerPayoutService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerPayoutDto: UpdateSellerPayoutDto,
  ) {
    return this.sellerPayoutService.update(+id, updateSellerPayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerPayoutService.remove(+id);
  }
}
//manejo-pagos-comisiones                                    # (seller.commission, seller.payment, seller.payout,                                                                            seller.commission.rule)
//# Cálculo y procesamiento de pagos y comisiones a vendedores.

//analisis-comisiones-pagos                                    # (seller.commission, seller.payment, seller.payout)
//# Detalle sobre comisiones y efectividad de políticas de pago.
