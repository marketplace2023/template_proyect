import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerCommissionService } from './seller_commission.service';
import { CreateSellerCommissionDto } from './dto/create-seller_commission.dto';
import { UpdateSellerCommissionDto } from './dto/update-seller_commission.dto';

@Controller('seller-commission')
export class SellerCommissionController {
  constructor(
    private readonly sellerCommissionService: SellerCommissionService,
  ) {}

  @Post()
  create(@Body() createSellerCommissionDto: CreateSellerCommissionDto) {
    return this.sellerCommissionService.create(createSellerCommissionDto);
  }

  @Get()
  findAll() {
    return this.sellerCommissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerCommissionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerCommissionDto: UpdateSellerCommissionDto,
  ) {
    return this.sellerCommissionService.update(+id, updateSellerCommissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerCommissionService.remove(+id);
  }
}
//manejo-pagos-comisiones                                    # (seller.commission, seller.payment, seller.payout,                                                                            seller.commission.rule)
//# Cálculo y procesamiento de pagos y comisiones a vendedores.

//establecimiento-tasas-comision                                     # (seller.commission, seller.commission.rule)
//# Configuración de las comisiones por ventas.

//analisis-comisiones-pagos                                    # (seller.commission, seller.payment, seller.payout)
//# Detalle sobre comisiones y efectividad de políticas de pago.
