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
import { DeliveryTrackingHistoryService } from './delivery-tracking-history.service';
import { DeliveryTrackingHistory } from './entities/delivery-tracking-history.entity';
import { CreateDeliveryTrackingHistoryDto } from './dto/created-delivery-tracking-history.dto';
import { UpdatedDeliveryTrackingHistoryDto } from './dto/updated-delivery-tracking-history.dto';
@Controller('delivery-tracking-history')
export class DeliveryTrackingHistoryController {
  constructor(
    private readonly deliveryTrackingHistoryService: DeliveryTrackingHistoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryTrackingHistory[]> {
    return await this.deliveryTrackingHistoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryTrackingHistoryDto: CreateDeliveryTrackingHistoryDto,
  ): Promise<DeliveryTrackingHistory> {
    return await this.deliveryTrackingHistoryService.create(
      createaDeliveryTrackingHistoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryTrackingHistory> {
    return await this.deliveryTrackingHistoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedDeliveryTrackingHistoryDto: UpdatedDeliveryTrackingHistoryDto,
    @Param('id') id: string,
  ): Promise<DeliveryTrackingHistory> {
    return await this.deliveryTrackingHistoryService.updated(
      +id,
      updatedDeliveryTrackingHistoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryTrackingHistoryService.deleted(+id);
  }
}
