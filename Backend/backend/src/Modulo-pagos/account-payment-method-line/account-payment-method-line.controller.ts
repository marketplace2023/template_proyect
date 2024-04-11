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
import { AccountPaymentMethodLine } from './entities/account-payment-method-line.entity';
import { CreateAccountPaymentMethodLineDto } from './dto/create-account-payment-method-line.dto';
import { UpdatedAccountPaymentMethodLineDto } from './dto/updated-account-payment-method-line.dto';
import { AccountPaymentMethodLineService } from './account-payment-method-line.service';
@Controller('account-payment-method-line')
export class AccountPaymentMethodLineController {
  constructor(
    private readonly accountPaymentMethodLineService: AccountPaymentMethodLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentMethodLine[]> {
    return await this.accountPaymentMethodLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountPaymentMethodLineDto: CreateAccountPaymentMethodLineDto,
  ): Promise<AccountPaymentMethodLine> {
    return await this.accountPaymentMethodLineService.create(
      createaAccountPaymentMethodLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPaymentMethodLine> {
    return await this.accountPaymentMethodLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountPaymentMethodLineDto: UpdatedAccountPaymentMethodLineDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentMethodLine> {
    return await this.accountPaymentMethodLineService.updated(
      +id,
      updatedAccountPaymentMethodLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentMethodLineService.deleted(+id);
  }
}
