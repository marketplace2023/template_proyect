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
import { DeliveryMethod } from './entities/delivery-method.entity';
import { UpdatedDeliveryMethodDto } from './dto/updated-delivery-method.dto';
import { CreateDeliveryMethodDto } from './dto/created-delivery-method.dto';
import { DeliveryMethodService } from './delivery-method.service';
@Controller('delivery-method')
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryMethod[]> {
    return await this.deliveryMethodService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryMethodDto: CreateDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    return await this.deliveryMethodService.create(createaDeliveryMethodDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryMethod> {
    return await this.deliveryMethodService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryMethodDto: UpdatedDeliveryMethodDto,
    @Param('id') id: string,
  ): Promise<DeliveryMethod> {
    return await this.deliveryMethodService.updated(
      +id,
      updatedDeliveryMethodDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryMethodService.deleted(+id);
  }
}
