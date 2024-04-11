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
import { AccountPaymentTermService } from './account-payment-term.service';
import { AccountPaymentTerm } from './entities/account-payment-term.entity';
import { CreateAccountPaymentTermDto } from './dto/create-account-payment-term.dto';
import { UpdatedAccountPaymentTermDto } from './dto/updated-account-payment-term.dto';
@Controller('account-payment-term')
export class AccountPaymentTermController {
  constructor(
    private readonly accountPaymentTermService: AccountPaymentTermService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentTerm[]> {
    return await this.accountPaymentTermService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountPaymentTermDto: CreateAccountPaymentTermDto,
  ): Promise<AccountPaymentTerm> {
    return await this.accountPaymentTermService.create(
      createaAccountPaymentTermDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountPaymentTerm> {
    return await this.accountPaymentTermService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountPaymentTermDto: UpdatedAccountPaymentTermDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentTerm> {
    return await this.accountPaymentTermService.updated(
      +id,
      updatedAccountPaymentTermDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentTermService.deleted(+id);
  }
}
