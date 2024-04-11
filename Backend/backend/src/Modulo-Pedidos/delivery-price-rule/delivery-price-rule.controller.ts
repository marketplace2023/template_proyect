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
import { DeliveryPriceRuleService } from './delivery-price-rule.service';
import { DeliveryPriceRule } from './entities/delivery-price-rule.entity';
import { CreateDeliveryPriceRuleDto } from './dto/create-delivery-price-rule.dto';
import { UpdatedDeliveryPriceRuleDto } from './dto/updated-delivery-price-rule.dto';
@Controller('delivery-price-rule')
export class DeliveryPriceRuleController {
  constructor(
    private readonly deliveryPriceRuleService: DeliveryPriceRuleService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DeliveryPriceRule[]> {
    return await this.deliveryPriceRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDeliveryPriceRuleDto: CreateDeliveryPriceRuleDto,
  ): Promise<DeliveryPriceRule> {
    return await this.deliveryPriceRuleService.create(
      createaDeliveryPriceRuleDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DeliveryPriceRule> {
    return await this.deliveryPriceRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDeliveryPriceRuleDto: UpdatedDeliveryPriceRuleDto,
    @Param('id') id: string,
  ): Promise<DeliveryPriceRule> {
    return await this.deliveryPriceRuleService.updated(
      +id,
      updatedDeliveryPriceRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.deliveryPriceRuleService.deleted(+id);
  }
}
