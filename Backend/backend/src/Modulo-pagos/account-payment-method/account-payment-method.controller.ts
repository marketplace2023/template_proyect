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
import { AccountPaymentMethod } from './entities/account-payment-method.entity';
import { UpdatedAccountPaymentMethodDto } from './dto/updated-account-payment-method.dto';
import { AccountPaymentMethodService } from './account-payment-method.service';
import { CreateAccountPaymentMethodDto } from './dto/create-account-payment-method.dto';
@Controller('account-payment-method')
export class AccountPaymentMethodController {
  constructor(
    private readonly accountPaymentMethodService: AccountPaymentMethodService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentMethod[]> {
    return await this.accountPaymentMethodService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountPaymentMethodDto: CreateAccountPaymentMethodDto,
  ): Promise<AccountPaymentMethod> {
    return await this.accountPaymentMethodService.create(
      createaAccountPaymentMethodDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPaymentMethod> {
    return await this.accountPaymentMethodService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountPaymentMethodDto: UpdatedAccountPaymentMethodDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentMethod> {
    return await this.accountPaymentMethodService.updated(
      +id,
      updatedAccountPaymentMethodDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentMethodService.deleted(+id);
  }
}
