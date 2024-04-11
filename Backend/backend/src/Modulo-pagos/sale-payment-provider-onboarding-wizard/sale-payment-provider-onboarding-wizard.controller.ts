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
import { SalePaymentProviderOnboardingWizardService } from './sale-payment-provider-onboarding-wizard.service';
import { SalePaymentProviderOnboardingWizard } from './entities/sale-payment-provider-onboarding-wizard.entity';
import { CreateSalePaymentProviderOnboardingWizardDto } from './dto/create-sale-payment-provider-onboarding-wizard.dto';
import { UpdatedSalePaymentProviderOnboardingWizardDto } from './dto/updated-sale-payment-provider-onboarding-wizard.dto';
@Controller('sale-payment-provider-onboarding-wizard')
export class SalePaymentProviderOnboardingWizardController {
  constructor(
    private readonly posPaymentMethodService: SalePaymentProviderOnboardingWizardService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SalePaymentProviderOnboardingWizard[]> {
    return await this.posPaymentMethodService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSalePaymentProviderOnboardingWizardDto: CreateSalePaymentProviderOnboardingWizardDto,
  ): Promise<SalePaymentProviderOnboardingWizard> {
    return await this.posPaymentMethodService.create(
      createaSalePaymentProviderOnboardingWizardDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<SalePaymentProviderOnboardingWizard> {
    return await this.posPaymentMethodService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSalePaymentProviderOnboardingWizardDto: UpdatedSalePaymentProviderOnboardingWizardDto,
    @Param('id') id: string,
  ): Promise<SalePaymentProviderOnboardingWizard> {
    return await this.posPaymentMethodService.updated(
      +id,
      updatedSalePaymentProviderOnboardingWizardDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.posPaymentMethodService.deleted(+id);
  }
}
