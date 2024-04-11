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
import { PaymentLinkWizard } from './entities/payment-link-wizard.entity';
import { CreatePaymentLinkWizardDto } from './dto/create-payment-link-wizard.dto';
import { PaymentLinkWizardService } from './payment-link-wizard.service';
import { UpdatedPaymentLinkWizardDto } from './dto/updated-payment-link-wizard.dto';
@Controller('payment-link-wizard')
export class PaymentLinkWizardController {
  constructor(
    private readonly paymentLinkWizardService: PaymentLinkWizardService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentLinkWizard[]> {
    return await this.paymentLinkWizardService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaPaymentLinkWizardDto: CreatePaymentLinkWizardDto,
  ): Promise<PaymentLinkWizard> {
    return await this.paymentLinkWizardService.create(
      createaPaymentLinkWizardDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PaymentLinkWizard> {
    return await this.paymentLinkWizardService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedPaymentLinkWizardDto: UpdatedPaymentLinkWizardDto,
    @Param('id') id: string,
  ): Promise<PaymentLinkWizard> {
    return await this.paymentLinkWizardService.updated(
      +id,
      updatedPaymentLinkWizardDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentLinkWizardService.deleted(+id);
  }
}
