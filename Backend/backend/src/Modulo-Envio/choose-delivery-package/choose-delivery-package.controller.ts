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
import { ChooseDeliveryPackageService } from './choose-delivery-package.service';
import { ChooseDeliveryPackage } from './entities/choose-delivery-package.entity';
import { CreateChooseDeliveryPackageDto } from './dto/create-choose-delivery-package.dto';
import { UpdatedChooseDeliveryPackageDto } from './dto/updated-choose-delivery-package.dto';
@Controller('choose-delivery-package')
export class ChooseDeliveryPackageController {
  constructor(
    private readonly chooseDeliveryPackageService: ChooseDeliveryPackageService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ChooseDeliveryPackage[]> {
    return await this.chooseDeliveryPackageService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaChooseDeliveryPackageDto: CreateChooseDeliveryPackageDto,
  ): Promise<ChooseDeliveryPackage> {
    return await this.chooseDeliveryPackageService.create(
      createaChooseDeliveryPackageDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ChooseDeliveryPackage> {
    return await this.chooseDeliveryPackageService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedChooseDeliveryPackageDto: UpdatedChooseDeliveryPackageDto,
    @Param('id') id: string,
  ): Promise<ChooseDeliveryPackage> {
    return await this.chooseDeliveryPackageService.updated(
      +id,
      updatedChooseDeliveryPackageDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.chooseDeliveryPackageService.deleted(+id);
  }
}
