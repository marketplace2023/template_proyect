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
import { UpdatedDeliveryOrderDto } from './dto/updated-delivery-order.dto';
import { DeliveryOrder } from './entities/delivery-order.entity';
import { CreatedDeliveryOrderDto } from './dto/created-delivery-order.dto';
import { DeliveryOrderService } from './delivery-order.service';
@Controller('delivery-order')
export class DeliveryOrderController {
  constructor(private readonly deliveryOrderService: DeliveryOrderService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryOrder[]> {
    return await this.deliveryOrderService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createdDeliveryOrderDto: CreatedDeliveryOrderDto,
  ): Promise<DeliveryOrder> {
    return await this.deliveryOrderService.create(createdDeliveryOrderDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryOrder> {
    return await this.deliveryOrderService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedDeliveryOrderDto: UpdatedDeliveryOrderDto,
    @Param('id') id: string,
  ): Promise<DeliveryOrder> {
    return await this.deliveryOrderService.updated(
      +id,
      updatedDeliveryOrderDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryOrderService.deleted(+id);
  }
}
