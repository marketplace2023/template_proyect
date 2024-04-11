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
import { CreateDiscountRuleDto } from './dto/created-discount-rule.dto';
import { DiscountRule } from './entities/discount-rule.entity';
import { DiscountRuleService } from './discount-rule.service';
import { UpdatedDiscountRuleDto } from './dto/updated-discount-rule.dto';
@Controller('discount-rule')
export class DiscountRuleController {
  constructor(private readonly discountRuleService: DiscountRuleService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DiscountRule[]> {
    return await this.discountRuleService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDiscountRuleDto: CreateDiscountRuleDto,
  ): Promise<DiscountRule> {
    return await this.discountRuleService.create(createaDiscountRuleDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DiscountRule> {
    return await this.discountRuleService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDiscountRuleDto: UpdatedDiscountRuleDto,
    @Param('id') id: string,
  ): Promise<DiscountRule> {
    return await this.discountRuleService.updated(+id, updatedDiscountRuleDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.discountRuleService.deleted(+id);
  }
}
