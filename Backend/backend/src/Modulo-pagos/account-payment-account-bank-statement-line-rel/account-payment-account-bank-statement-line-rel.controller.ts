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
import { AccountPaymentAccountBankStatementLineRel } from './entities/account-payment-account-bank-statement-line-rel.entity';
import { CreatedAccountPaymentAccountBankStatementLineRelDto } from './dto/created-account-payment-account-bank-statement-line-rel.dto';
import { UpdatedAccountPaymentAccountBankStatementLineRelDto } from './dto/updated-account-payment-account-bank-statement-line-rel.dto';
import { AccountPaymentAccountBankStatementLineRelService } from './account-payment-account-bank-statement-line-rel.service';
@Controller('account-payment-account-bank-statement-line-rel')
export class AccountPaymentAccountBankStatementLineRelController {
  constructor(
    private readonly accountPaymentAccountBankStatementLineRelService: AccountPaymentAccountBankStatementLineRelService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountPaymentAccountBankStatementLineRel[]> {
    return await this.accountPaymentAccountBankStatementLineRelService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountPaymentAccountBankStatementLineRelDto: CreatedAccountPaymentAccountBankStatementLineRelDto,
  ): Promise<AccountPaymentAccountBankStatementLineRel> {
    return await this.accountPaymentAccountBankStatementLineRelService.create(
      createaAccountPaymentAccountBankStatementLineRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<AccountPaymentAccountBankStatementLineRel> {
    return await this.accountPaymentAccountBankStatementLineRelService.findOne(
      +id,
    );
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountPaymentAccountBankStatementLineRelDto: UpdatedAccountPaymentAccountBankStatementLineRelDto,
    @Param('id') id: string,
  ): Promise<AccountPaymentAccountBankStatementLineRel> {
    return await this.accountPaymentAccountBankStatementLineRelService.updated(
      +id,
      updatedAccountPaymentAccountBankStatementLineRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountPaymentAccountBankStatementLineRelService.deleted(+id);
  }
}
