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
import { PosMakePaymentService } from './pos-make-payment.service';
import { PosMakePayment } from './entities/pos-make-payment.entity';
import { CreatePosMakePaymentDto } from './dto/create-pos-make-payment.dto';
import { UpdatedPosMakePaymentDto } from './dto/updated-pos-make-payment.dto';
@Controller('pos-make-payment')
export class PosMakePaymentController {
  constructor(private readonly posMakePaymentService: PosMakePaymentService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PosMakePayment[]> {
    return await this.posMakePaymentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPosMakePaymentDto: CreatePosMakePaymentDto,
  ): Promise<PosMakePayment> {
    return await this.posMakePaymentService.create(createaPosMakePaymentDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PosMakePayment> {
    return await this.posMakePaymentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPosMakePaymentDto: UpdatedPosMakePaymentDto,
    @Param('id') id: string,
  ): Promise<PosMakePayment> {
    return await this.posMakePaymentService.updated(
      +id,
      updatedPosMakePaymentDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.posMakePaymentService.deleted(+id);
  }
}
