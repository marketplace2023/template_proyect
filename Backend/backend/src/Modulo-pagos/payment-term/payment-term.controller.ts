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
import { PaymentTermService } from './payment-term.service';
import { PaymentTerm } from './entities/payment-term.entity';
import { CreatedPaymentTermDto } from './dto/created-payment-term.dto';
import { UpdatedPaymentTermDto } from './dto/updated-payment-term.dto';
@Controller('payment-term')
export class PaymentTermController {
  constructor(private readonly paymentTermService: PaymentTermService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentTerm[]> {
    return await this.paymentTermService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAaymentTermDto: CreatedPaymentTermDto,
  ): Promise<PaymentTerm> {
    return await this.paymentTermService.create(createaAaymentTermDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentTerm> {
    return await this.paymentTermService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAaymentTermDto: UpdatedPaymentTermDto,
    @Param('id') id: string,
  ): Promise<PaymentTerm> {
    return await this.paymentTermService.updated(+id, updatedAaymentTermDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentTermService.deleted(+id);
  }
}
