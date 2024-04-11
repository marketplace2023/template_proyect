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
import { AccountPayment } from './entities/account-payment.entity';
import { UpdatedAccountPaymentDto } from './dto/updated-account-payment.dto';
import { AccountPaymentService } from './account-payment.service';
import { CreateAccountPaymentDto } from './dto/create-account-payment.dto';
@Controller('account-payment')
export class AccountPaymentController {
  constructor(private readonly accountPaymentService: AccountPaymentService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPayment[]> {
    return await this.accountPaymentService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountPaymentDto: CreateAccountPaymentDto,
  ): Promise<AccountPayment> {
    return await this.accountPaymentService.create(createaAccountPaymentDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPayment> {
    return await this.accountPaymentService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountPaymentDto: UpdatedAccountPaymentDto,
    @Param('id') id: string,
  ): Promise<AccountPayment> {
    return await this.accountPaymentService.updated(
      +id,
      updatedAccountPaymentDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentService.deleted(+id);
  }
}
