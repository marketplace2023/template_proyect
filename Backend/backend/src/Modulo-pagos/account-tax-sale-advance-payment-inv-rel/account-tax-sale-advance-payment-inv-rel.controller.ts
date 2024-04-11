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
import { AccountTaxSaleAdvancePaymentInvRel } from './entities/account-tax-sale-advance-payment-inv-rel.entity';
import { CreatedAccountTaxSaleAdvancePaymentInvRelDto } from './dto/created-account-tax-sale-advance-payment-inv-rel.dto';
import { UpdatedAccountTaxSaleAdvancePaymentInvRelDto } from './dto/updated-account-tax-sale-advance-payment-inv-rel.dto';
import { AccountTaxSaleAdvancePaymentInvRelService } from './account-tax-sale-advance-payment-inv-rel.service';

@Controller('account-tax-sale-advance-payment-inv-rel')
export class AccountTaxSaleAdvancePaymentInvRelController {
  constructor(
    private readonly accountTaxSaleAdvancePaymentInvRelService: AccountTaxSaleAdvancePaymentInvRelService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountTaxSaleAdvancePaymentInvRel[]> {
    return await this.accountTaxSaleAdvancePaymentInvRelService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountTaxSaleAdvancePaymentInvRelDto: CreatedAccountTaxSaleAdvancePaymentInvRelDto,
  ): Promise<AccountTaxSaleAdvancePaymentInvRel> {
    return await this.accountTaxSaleAdvancePaymentInvRelService.create(
      createaAccountTaxSaleAdvancePaymentInvRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<AccountTaxSaleAdvancePaymentInvRel> {
    return await this.accountTaxSaleAdvancePaymentInvRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountTaxSaleAdvancePaymentInvRelDto: UpdatedAccountTaxSaleAdvancePaymentInvRelDto,
    @Param('id') id: string,
  ): Promise<AccountTaxSaleAdvancePaymentInvRel> {
    return await this.accountTaxSaleAdvancePaymentInvRelService.updated(
      +id,
      updatedAccountTaxSaleAdvancePaymentInvRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountTaxSaleAdvancePaymentInvRelService.deleted(+id);
  }
}
