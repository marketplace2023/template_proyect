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
import { OrderLineService } from './order-line.service';
import { OrderLine } from './entities/order-line.entity';
import { CreateOrderLineDto } from './dto/created-order-line.dto';
import { UpdatedOrderLineDto } from './dto/updated-order-line.dto';
@Controller('order-line')
export class OrderLineController {
  constructor(private readonly OrderLineService: OrderLineService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<OrderLine[]> {
    return await this.OrderLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaOrderLineDto: CreateOrderLineDto,
  ): Promise<OrderLine> {
    return await this.OrderLineService.create(createaOrderLineDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<OrderLine> {
    return await this.OrderLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedOrderLineDto: UpdatedOrderLineDto,
    @Param('id') id: string,
  ): Promise<OrderLine> {
    return await this.OrderLineService.updated(+id, updatedOrderLineDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.OrderLineService.deleted(+id);
  }
}
