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
import { ResCurrencyRate } from './entities/res-currency-rate.entity';
import { UpdatedResCurrencyRateDto } from './dto/updated-res-currency-rate.dto';
import { CreateResCurrencyRateDto } from './dto/created-res-currency-rate.dto';
import { ResCurrencyRateService } from './res-currency-rate.service';

@Controller('res-currency-rate')
export class ResCurrencyRateController {
  constructor(
    private readonly resCurrencyRateService: ResCurrencyRateService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResCurrencyRate[]> {
    return await this.resCurrencyRateService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResCurrencyRateDto: CreateResCurrencyRateDto,
  ): Promise<ResCurrencyRate> {
    return await this.resCurrencyRateService.create(createaResCurrencyRateDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResCurrencyRate> {
    return await this.resCurrencyRateService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResCurrencyRateDto: UpdatedResCurrencyRateDto,
    @Param('id') id: string,
  ): Promise<ResCurrencyRate> {
    return await this.resCurrencyRateService.updated(
      +id,
      updatedResCurrencyRateDto,
    );
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resCurrencyRateService.deleted(+id);
  }
}
