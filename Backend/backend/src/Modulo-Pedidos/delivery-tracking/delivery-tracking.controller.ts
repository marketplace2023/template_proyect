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
import { DeliveryTracking } from './entities/delivery-tracking.entity';
import { UpdatedDeliveryTrackingDto } from './dto/updated-delivery-tracking.dto';
import { CreateDeliveryTrackingDto } from './dto/created-delivery-tracking.dto';
import { DeliveryTrackingService } from './delivery-tracking.service';
@Controller('delivery-tracking')
export class DeliveryTrackingController {
  constructor(
    private readonly deliveryTrackingService: DeliveryTrackingService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryTracking[]> {
    return await this.deliveryTrackingService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryTrackingDto: CreateDeliveryTrackingDto,
  ): Promise<DeliveryTracking> {
    return await this.deliveryTrackingService.create(
      createaDeliveryTrackingDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryTracking> {
    return await this.deliveryTrackingService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryTrackingDto: UpdatedDeliveryTrackingDto,
    @Param('id') id: string,
  ): Promise<DeliveryTracking> {
    return await this.deliveryTrackingService.updated(
      +id,
      updatedDeliveryTrackingDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryTrackingService.deleted(+id);
  }
}
