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
import { DeliveryShipmentService } from './delivery-shipment.service';
import { DeliveryShipment } from './entities/delivery-shipment.entity';
import { CreateDeliveryShipmentDto } from './dto/created-delivery-shipment.dto';
import { UpdatedDeliveryShipmentDto } from './dto/updated-delivery-shipment.dto';
@Controller('delivery-shipment')
export class DeliveryShipmentController {
  constructor(
    private readonly deliveryShipmentService: DeliveryShipmentService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryShipment[]> {
    return await this.deliveryShipmentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryShipmentDto: CreateDeliveryShipmentDto,
  ): Promise<DeliveryShipment> {
    return await this.deliveryShipmentService.create(
      createaDeliveryShipmentDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryShipment> {
    return await this.deliveryShipmentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryShipmentDto: UpdatedDeliveryShipmentDto,
    @Param('id') id: string,
  ): Promise<DeliveryShipment> {
    return await this.deliveryShipmentService.updated(
      +id,
      updatedDeliveryShipmentDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryShipmentService.deleted(+id);
  }
}
