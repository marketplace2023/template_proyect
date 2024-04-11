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
import { DeliveryPackage } from './entities/delivery-package.entity';
import { CreateDeliveryPackageDto } from './dto/created-delivery-package.dto';
import { DeliveryPackageService } from './delivery-package.service';
import { UpdatedDeliveryPackageDto } from './dto/updated-delivery-package.dto';
@Controller('delivery-package')
export class DeliveryPackageController {
  constructor(
    private readonly deliveryPackageService: DeliveryPackageService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryPackage[]> {
    return await this.deliveryPackageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryPackageDto: CreateDeliveryPackageDto,
  ): Promise<DeliveryPackage> {
    return await this.deliveryPackageService.create(createaDeliveryPackageDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryPackage> {
    return await this.deliveryPackageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryPackageDto: UpdatedDeliveryPackageDto,
    @Param('id') id: string,
  ): Promise<DeliveryPackage> {
    return await this.deliveryPackageService.updated(
      +id,
      updatedDeliveryPackageDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryPackageService.deleted(+id);
  }
}
