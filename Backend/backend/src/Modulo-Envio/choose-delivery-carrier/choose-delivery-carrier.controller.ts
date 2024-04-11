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
import { ChooseDeliveryCarrierService } from './choose-delivery-carrier.service';
import { ChooseDeliveryCarrier } from './entities/choose-delivery-carrier.entity';
import { CreateChooseDeliveryCarrierDto } from './dto/create-choose-delivery-carrier.dto';
import { UpdatedChooseDeliveryCarrierDto } from './dto/updated-choose-delivery-carrier.dto';
@Controller('choose-delivery-carrier')
export class ChooseDeliveryCarrierController {
  constructor(
    private readonly chooseDeliveryCarrierService: ChooseDeliveryCarrierService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ChooseDeliveryCarrier[]> {
    return await this.chooseDeliveryCarrierService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaChooseDeliveryCarrierDto: CreateChooseDeliveryCarrierDto,
  ): Promise<ChooseDeliveryCarrier> {
    return await this.chooseDeliveryCarrierService.create(
      createaChooseDeliveryCarrierDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ChooseDeliveryCarrier> {
    return await this.chooseDeliveryCarrierService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedChooseDeliveryCarrierDto: UpdatedChooseDeliveryCarrierDto,
    @Param('id') id: string,
  ): Promise<ChooseDeliveryCarrier> {
    return await this.chooseDeliveryCarrierService.updated(
      +id,
      updatedChooseDeliveryCarrierDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.chooseDeliveryCarrierService.deleted(+id);
  }
}
