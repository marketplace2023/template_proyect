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
import { SaleChannel } from './entities/sale-channel.entity';
import { UpdatedSaleChannelDto } from './dto/updated-sale-channel.dto';
import { CreateSaleChannelDto } from './dto/created-sale-channel.dto';
import { SaleChannelService } from './sale-channel.service';
@Controller('sale-channel')
export class SaleChannelController {
  constructor(private readonly saleChannelService: SaleChannelService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleChannel[]> {
    return await this.saleChannelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleChannelDto: CreateSaleChannelDto,
  ): Promise<SaleChannel> {
    return await this.saleChannelService.create(createaSaleChannelDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleChannel> {
    return await this.saleChannelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleChannelDto: UpdatedSaleChannelDto,
    @Param('id') id: string,
  ): Promise<SaleChannel> {
    return await this.saleChannelService.updated(+id, updatedSaleChannelDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleChannelService.deleted(+id);
  }
}
