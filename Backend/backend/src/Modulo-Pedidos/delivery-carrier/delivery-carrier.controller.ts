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
import { DeliveryCarrierService } from './delivery-carrier.service';
import { DeliveryCarrier } from './entities/delivery-carrier.entity';
import { CreateDeliveryCarrierDto } from './dto/create-delivery-carrier.dto';
import { UpdatedDeliveryCarrierDto } from './dto/updated-delivery-carrier.dto';
@Controller('delivery_carrier')
export class DeliveryCarrierController {
  constructor(
    private readonly deliveryCarrierService: DeliveryCarrierService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryCarrier[]> {
    return await this.deliveryCarrierService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryCarrierDto: CreateDeliveryCarrierDto,
  ): Promise<DeliveryCarrier> {
    return await this.deliveryCarrierService.create(createaDeliveryCarrierDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryCarrier> {
    return await this.deliveryCarrierService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryCarrierDto: UpdatedDeliveryCarrierDto,
    @Param('id') id: string,
  ): Promise<DeliveryCarrier> {
    return await this.deliveryCarrierService.updated(
      +id,
      updatedDeliveryCarrierDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryCarrierService.deleted(+id);
  }
}
