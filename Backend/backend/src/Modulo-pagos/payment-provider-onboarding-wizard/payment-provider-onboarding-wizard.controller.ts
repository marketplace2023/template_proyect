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
import { PaymentProviderOnboardingWizard } from './entities/payment-provider-onboarding-wizard.entity';
import { PaymentProviderOnboardingWizardService } from './payment-provider-onboarding-wizard.service';
import { CreatePaymentProviderOnboardingWizardDto } from './dto/create-payment-provider-onboarding-wizard.dto';
import { UpdatedPaymentProviderOnboardingWizardDto } from './dto/updated-payment-provider-onboarding-wizard.dto';

@Controller('payment-provider-onboarding-wizard')
export class PaymentProviderOnboardingWizardController {
  constructor(
    private readonly paymentProviderOnboardingWizardService: PaymentProviderOnboardingWizardService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PaymentProviderOnboardingWizard[]> {
    return await this.paymentProviderOnboardingWizardService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaPaymentProviderOnboardingWizardDto: CreatePaymentProviderOnboardingWizardDto,
  ): Promise<PaymentProviderOnboardingWizard> {
    return await this.paymentProviderOnboardingWizardService.create(
      createaPaymentProviderOnboardingWizardDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<PaymentProviderOnboardingWizard> {
    return await this.paymentProviderOnboardingWizardService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedPaymentProviderOnboardingWizardDto: UpdatedPaymentProviderOnboardingWizardDto,
    @Param('id') id: string,
  ): Promise<PaymentProviderOnboardingWizard> {
    return await this.paymentProviderOnboardingWizardService.updated(
      +id,
      updatedPaymentProviderOnboardingWizardDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.paymentProviderOnboardingWizardService.deleted(+id);
  }
}
