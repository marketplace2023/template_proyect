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
import { AccountBankStatementService } from './account-bank-statement.service';
import { AccountBankStatement } from './entities/account-bank-statement.entity';
import { CreatedAccountBankStatementDto } from './dto/created-account-bank-statement.dto';
import { UpdatedAccountBankStatementDto } from './dto/updated-account-bank-statement.dto';
@Controller('account-bank-statement')
export class AccountBankStatementController {
  constructor(
    private readonly accountBankStatementService: AccountBankStatementService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountBankStatement[]> {
    return await this.accountBankStatementService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountBankStatementDto: CreatedAccountBankStatementDto,
  ): Promise<AccountBankStatement> {
    return await this.accountBankStatementService.create(
      createaAccountBankStatementDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountBankStatement> {
    return await this.accountBankStatementService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountBankStatementDto: UpdatedAccountBankStatementDto,
    @Param('id') id: string,
  ): Promise<AccountBankStatement> {
    return await this.accountBankStatementService.updated(
      +id,
      updatedAccountBankStatementDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountBankStatementService.deleted(+id);
  }
}
