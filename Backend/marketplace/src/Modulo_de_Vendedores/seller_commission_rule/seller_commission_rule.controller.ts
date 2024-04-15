import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerCommissionRuleService } from './seller_commission_rule.service';
import { CreateSellerCommissionRuleDto } from './dto/create-seller_commission_rule.dto';
import { UpdateSellerCommissionRuleDto } from './dto/update-seller_commission_rule.dto';

@Controller('seller-commission-rule')
export class SellerCommissionRuleController {
  constructor(
    private readonly sellerCommissionRuleService: SellerCommissionRuleService,
  ) {}

  @Post()
  create(@Body() createSellerCommissionRuleDto: CreateSellerCommissionRuleDto) {
    return this.sellerCommissionRuleService.create(
      createSellerCommissionRuleDto,
    );
  }

  @Get()
  findAll() {
    return this.sellerCommissionRuleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerCommissionRuleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerCommissionRuleDto: UpdateSellerCommissionRuleDto,
  ) {
    return this.sellerCommissionRuleService.update(
      +id,
      updateSellerCommissionRuleDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerCommissionRuleService.remove(+id);
  }
}
//manejo-pagos-comisiones                                    # (seller.commission, seller.payment, seller.payout,                                                                            seller.commission.rule)
//# Cálculo y procesamiento de pagos y comisiones a vendedores.

//establecimiento-tasas-comision                                     # (seller.commission, seller.commission.rule)
//# Configuración de las comisiones por ventas.
