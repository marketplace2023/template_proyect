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
import { PosPaymentMethod } from './entities/pos-payment-method.entity';
import { UpdatedPosPaymentMethodDto } from './dto/updated-pos-payment-method.dto';
import { CreatePosPaymentMethodDto } from './dto/create-pos-payment-method.dto';
import { PosPaymentMethodService } from './pos-payment-method.service';
@Controller('pos-payment-method')
export class PosPaymentMethodController {
  constructor(
    private readonly posPaymentMethodService: PosPaymentMethodService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PosPaymentMethod[]> {
    return await this.posPaymentMethodService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPosPaymentMethodDto: CreatePosPaymentMethodDto,
  ): Promise<PosPaymentMethod> {
    return await this.posPaymentMethodService.create(
      createaPosPaymentMethodDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PosPaymentMethod> {
    return await this.posPaymentMethodService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPosPaymentMethodDto: UpdatedPosPaymentMethodDto,
    @Param('id') id: string,
  ): Promise<PosPaymentMethod> {
    return await this.posPaymentMethodService.updated(
      +id,
      updatedPosPaymentMethodDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.posPaymentMethodService.deleted(+id);
  }
}
