import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SaleAdvancePaymentInvService } from './sale-advance-payment-inv.service';
import { SaleAdvancePaymentInv } from './entities/sale-advance-payment-inv.entity';
import { CreateSaleAdvancePaymentInvDto } from './dto/create-sale-advance-payment-inv.dto';
import { UpdatedSaleAdvancePaymentInvDto } from './dto/updated-sale-advance-payment-inv.dto';
@Controller('sale-advance-payment-inv')
export class SaleAdvancePaymentInvController {
  constructor(
    private readonly saleAdvancePaymentInvService: SaleAdvancePaymentInvService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleAdvancePaymentInv[]> {
    return await this.saleAdvancePaymentInvService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleAdvancePaymentInvDto: CreateSaleAdvancePaymentInvDto,
  ): Promise<SaleAdvancePaymentInv> {
    return await this.saleAdvancePaymentInvService.create(
      createaSaleAdvancePaymentInvDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleAdvancePaymentInv> {
    return await this.saleAdvancePaymentInvService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleAdvancePaymentInvDto: UpdatedSaleAdvancePaymentInvDto,
    @Param('id') id: string,
  ): Promise<SaleAdvancePaymentInv> {
    return await this.saleAdvancePaymentInvService.updated(
      +id,
      updatedSaleAdvancePaymentInvDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleAdvancePaymentInvService.deleted(+id);
  }
}
