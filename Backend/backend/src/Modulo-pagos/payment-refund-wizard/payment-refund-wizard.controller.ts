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
import { PaymentRefundWizardService } from './payment-refund-wizard.service';
import { PaymentRefundWizard } from './entities/payment-refund-wizard.entity';
import { CreatePaymentRefundWizardDto } from './dto/create-payment-refund-wizard.dto';
import { UpdatedPaymentRefundWizardDto } from './dto/updated-payment-refund-wizard.dto';
@Controller('payment-refund-wizard')
export class PaymentRefundWizardController {
  constructor(
    private readonly paymentRefundWizardService: PaymentRefundWizardService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentRefundWizard[]> {
    return await this.paymentRefundWizardService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentRefundWizardDto: CreatePaymentRefundWizardDto,
  ): Promise<PaymentRefundWizard> {
    return await this.paymentRefundWizardService.create(
      createaPaymentRefundWizardDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentRefundWizard> {
    return await this.paymentRefundWizardService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentRefundWizardDto: UpdatedPaymentRefundWizardDto,
    @Param('id') id: string,
  ): Promise<PaymentRefundWizard> {
    return await this.paymentRefundWizardService.updated(
      +id,
      updatedPaymentRefundWizardDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentRefundWizardService.deleted(+id);
  }
}
