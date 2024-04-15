import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerPaymentService } from './seller_payment.service';
import { CreateSellerPaymentDto } from './dto/create-seller_payment.dto';
import { UpdateSellerPaymentDto } from './dto/update-seller_payment.dto';

@Controller('seller-payment')
export class SellerPaymentController {
  constructor(private readonly sellerPaymentService: SellerPaymentService) {}

  @Post()
  create(@Body() createSellerPaymentDto: CreateSellerPaymentDto) {
    return this.sellerPaymentService.create(createSellerPaymentDto);
  }

  @Get()
  findAll() {
    return this.sellerPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerPaymentDto: UpdateSellerPaymentDto,
  ) {
    return this.sellerPaymentService.update(+id, updateSellerPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerPaymentService.remove(+id);
  }
}
//manejo-pagos-comisiones                                    # (seller.commission, seller.payment, seller.payout,                                                                            seller.commission.rule)
//# Cálculo y procesamiento de pagos y comisiones a vendedores.

//analisis-comisiones-pagos                                    # (seller.commission, seller.payment, seller.payout)
//# Detalle sobre comisiones y efectividad de políticas de pago.
