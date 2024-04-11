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
import { ResCurrencyService } from './res-currency.service';
import { ResCurrency } from './entities/res-currency.entity';
import { CreateResCurrencyDto } from './dto/created-res-currency.dto';
import { UpdatedResCurrencyDto } from './dto/updated-res-currency.dto';
@Controller('res-currency')
export class ResCurrencyController {
  constructor(private readonly resCurrencyService: ResCurrencyService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResCurrency[]> {
    return await this.resCurrencyService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResCurrencyDto: CreateResCurrencyDto,
  ): Promise<ResCurrency> {
    return await this.resCurrencyService.create(createaResCurrencyDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResCurrency> {
    return await this.resCurrencyService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResCurrencyDto: UpdatedResCurrencyDto,
    @Param('id') id: string,
  ): Promise<ResCurrency> {
    return await this.resCurrencyService.updated(+id, updatedResCurrencyDto);
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resCurrencyService.deleted(+id);
  }
}
