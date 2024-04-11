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
import { PosPayment } from './entities/pos-payment.entity';
import { PosPaymentService } from './pos-payment.service';
import { CreatePosPaymentDto } from './dto/create-pos-payment.dto';
import { UpdatedPosPaymentDto } from './dto/updated-pos-payment.dto';
@Controller('pos-payment')
export class PosPaymentController {
  constructor(private readonly posPaymentService: PosPaymentService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PosPayment[]> {
    return await this.posPaymentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPosPaymentDto: CreatePosPaymentDto,
  ): Promise<PosPayment> {
    return await this.posPaymentService.create(createaPosPaymentDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PosPayment> {
    return await this.posPaymentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPosPaymentDto: UpdatedPosPaymentDto,
    @Param('id') id: string,
  ): Promise<PosPayment> {
    return await this.posPaymentService.updated(+id, updatedPosPaymentDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.posPaymentService.deleted(+id);
  }
}
