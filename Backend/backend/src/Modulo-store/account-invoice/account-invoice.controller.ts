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
import { AccountInvoice } from './entities/account-invoice.entity';
import { CreateAccountInvoiceDto } from './dto/created-account-invoice.dto';
import { AccountInvoiceService } from './account-invoice.service';
import { UpdatedAccountInvoiceDto } from './dto/updated-account-invoice.dto';
@Controller('account-invoice')
export class AccountInvoiceController {
  constructor(private readonly accountInvoiceService: AccountInvoiceService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountInvoice[]> {
    return await this.accountInvoiceService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountInvoiceDto: CreateAccountInvoiceDto,
  ): Promise<AccountInvoice> {
    return await this.accountInvoiceService.create(createaAccountInvoiceDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountInvoice> {
    return await this.accountInvoiceService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountInvoiceDto: UpdatedAccountInvoiceDto,
    @Param('id') id: string,
  ): Promise<AccountInvoice> {
    return await this.accountInvoiceService.updated(
      +id,
      updatedAccountInvoiceDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountInvoiceService.deleted(+id);
  }
}
