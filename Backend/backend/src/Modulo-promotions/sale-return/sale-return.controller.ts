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
import { SaleReturnService } from './sale-return.service';
import { SaleReturn } from './entities/sale-return.entity';
import { CreateSaleReturnDto } from './dto/created-sale-return.dto';
import { UpdatedSaleReturnDto } from './dto/updated-sale-return.dto';

@Controller('sale-return')
export class SaleReturnController {
  constructor(private readonly saleReturnService: SaleReturnService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleReturn[]> {
    return await this.saleReturnService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleReturnDto: CreateSaleReturnDto,
  ): Promise<SaleReturn> {
    return await this.saleReturnService.create(createaSaleReturnDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleReturn> {
    return await this.saleReturnService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleReturnDto: UpdatedSaleReturnDto,
    @Param('id') id: string,
  ): Promise<SaleReturn> {
    return await this.saleReturnService.updated(+id, updatedSaleReturnDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleReturnService.deleted(+id);
  }
}
