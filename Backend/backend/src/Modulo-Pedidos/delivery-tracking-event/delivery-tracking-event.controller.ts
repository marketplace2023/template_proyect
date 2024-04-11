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
import { DeliveryTrackingEventService } from './delivery-tracking-event.service';
import { DeliveryTrackingEvent } from './entities/delivery-tracking-event.entity';
import { CreateDeliveryTrackingEventDto } from './dto/created-delivery-tracking-event.dto';
import { UpdatedDeliveryTrackingEventDto } from './dto/updated-delivery-tracking-event.dto';
@Controller('delivery-tracking-event')
export class DeliveryTrackingEventController {
  constructor(
    private readonly deliveryTrackingEventService: DeliveryTrackingEventService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryTrackingEvent[]> {
    return await this.deliveryTrackingEventService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryTrackingEventDto: CreateDeliveryTrackingEventDto,
  ): Promise<DeliveryTrackingEvent> {
    return await this.deliveryTrackingEventService.create(
      createaDeliveryTrackingEventDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryTrackingEvent> {
    return await this.deliveryTrackingEventService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedDeliveryTrackingEventDto: UpdatedDeliveryTrackingEventDto,
    @Param('id') id: string,
  ): Promise<DeliveryTrackingEvent> {
    return await this.deliveryTrackingEventService.updated(
      +id,
      updatedDeliveryTrackingEventDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryTrackingEventService.deleted(+id);
  }
}
