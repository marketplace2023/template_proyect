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
import { SaleCouponRuleService } from './sale-coupon-rule.service';
import { SaleCouponRule } from './entities/sale-coupon-rule.entity';
import { CreateSaleCouponRuleDto } from './dto/created-sale-coupon-rule.dto';
import { UpdatedSaleCouponRuleDto } from './dto/updated-sale-coupon-rule.dto';
@Controller('sale-coupon-rule')
export class SaleCouponRuleController {
  constructor(private readonly saleCouponRuleService: SaleCouponRuleService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCouponRule[]> {
    return await this.saleCouponRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaSaleCouponRuleDto: CreateSaleCouponRuleDto,
  ): Promise<SaleCouponRule> {
    return await this.saleCouponRuleService.create(createaSaleCouponRuleDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCouponRule> {
    return await this.saleCouponRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedSaleCouponRuleDto: UpdatedSaleCouponRuleDto,
    @Param('id') id: string,
  ): Promise<SaleCouponRule> {
    return await this.saleCouponRuleService.updated(
      +id,
      updatedSaleCouponRuleDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCouponRuleService.deleted(+id);
  }
}
