import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerTaxService } from './seller_tax.service';
import { CreateSellerTaxDto } from './dto/create-seller_tax.dto';
import { UpdateSellerTaxDto } from './dto/update-seller_tax.dto';

@Controller('seller-tax')
export class SellerTaxController {
  constructor(private readonly sellerTaxService: SellerTaxService) {}

  @Post()
  create(@Body() createSellerTaxDto: CreateSellerTaxDto) {
    return this.sellerTaxService.create(createSellerTaxDto);
  }

  @Get()
  findAll() {
    return this.sellerTaxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerTaxService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerTaxDto: UpdateSellerTaxDto,
  ) {
    return this.sellerTaxService.update(+id, updateSellerTaxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerTaxService.remove(+id);
  }
}
//establecimiento-tasas-comision                                     # (seller.commission, seller.commission.rule)
//# Configuración de las comisiones por ventas.
