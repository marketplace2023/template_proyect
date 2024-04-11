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
import { DeliveryZipPrefix } from './entities/delivery-zip-prefix.entity';
import { UpdatedDeliveryZipPrefixDto } from './dto/updated-delivery-zip-prefix.dto';
import { DeliveryZipPrefixService } from './delivery-zip-prefix.service';
import { CreateDeliveryZipPrefixDto } from './dto/create-delivery-zip-prefix.dto';
@Controller('delivery-zip-prefix')
export class DeliveryZipPrefixController {
  constructor(
    private readonly deliveryZipPrefixService: DeliveryZipPrefixService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryZipPrefix[]> {
    return await this.deliveryZipPrefixService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryZipPrefixDto: CreateDeliveryZipPrefixDto,
  ): Promise<DeliveryZipPrefix> {
    return await this.deliveryZipPrefixService.create(
      createaDeliveryZipPrefixDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryZipPrefix> {
    return await this.deliveryZipPrefixService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryZipPrefixDto: UpdatedDeliveryZipPrefixDto,
    @Param('id') id: string,
  ): Promise<DeliveryZipPrefix> {
    return await this.deliveryZipPrefixService.updated(
      +id,
      updatedDeliveryZipPrefixDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryZipPrefixService.deleted(+id);
  }
}
