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
import { AccountPaymentRegisterService } from './account-payment-register.service';
import { CreateAccountPaymentRegisterDto } from './dto/create-account-payment-register.dto';
import { AccountPaymentRegister } from './entities/account-payment-register.entity';
import { UpdatedAccountPaymentRegisterDto } from './dto/updated-account-payment-register.dto';
@Controller('account-payment-register')
export class AccountPaymentRegisterController {
  constructor(
    private readonly accountPaymentRegisterService: AccountPaymentRegisterService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentRegister[]> {
    return await this.accountPaymentRegisterService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountPaymentRegisterDto: CreateAccountPaymentRegisterDto,
  ): Promise<AccountPaymentRegister> {
    return await this.accountPaymentRegisterService.create(
      createaAccountPaymentRegisterDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPaymentRegister> {
    return await this.accountPaymentRegisterService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountPaymentRegisterDto: UpdatedAccountPaymentRegisterDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentRegister> {
    return await this.accountPaymentRegisterService.updated(
      +id,
      updatedAccountPaymentRegisterDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentRegisterService.deleted(+id);
  }
}
