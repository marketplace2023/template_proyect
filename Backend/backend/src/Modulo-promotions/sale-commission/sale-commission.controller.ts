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
import { SaleCommissionService } from './sale-commission.service';
import { SaleCommission } from './entities/sale-commission.entity';
import { CreateSaleCommissionDto } from './dto/created-sale-commission.dto';
import { UpdatedSaleCommissionDto } from './dto/updated-sale-commission.dto';

@Controller('sale-commission')
export class SaleCommissionController {
  constructor(private readonly saleCommissionService: SaleCommissionService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCommission[]> {
    return await this.saleCommissionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleCommissionDto: CreateSaleCommissionDto,
  ): Promise<SaleCommission> {
    return await this.saleCommissionService.create(createaSaleCommissionDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCommission> {
    return await this.saleCommissionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleCommissionDto: UpdatedSaleCommissionDto,
    @Param('id') id: string,
  ): Promise<SaleCommission> {
    return await this.saleCommissionService.updated(
      +id,
      updatedSaleCommissionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCommissionService.deleted(+id);
  }
}
