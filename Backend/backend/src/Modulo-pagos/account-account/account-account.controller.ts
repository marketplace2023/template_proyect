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
import { AccountAccountService } from './account-account.service';
import { AccountAccount } from './entities/account-account.entity';
import { UpdatedAccountAccountDto } from './dto/updated_account-account.dto';
import { CreateAccountAccountDto } from './dto/created_account-account.dto';
@Controller('account-account')
export class AccountAccountController {
  constructor(private readonly accountAccountService: AccountAccountService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountAccount[]> {
    return await this.accountAccountService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountAccountDto: CreateAccountAccountDto,
  ): Promise<AccountAccount> {
    return await this.accountAccountService.create(createaAccountAccountDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountAccount> {
    return await this.accountAccountService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountAccountDto: UpdatedAccountAccountDto,
    @Param('id') id: string,
  ): Promise<AccountAccount> {
    return await this.accountAccountService.updated(
      +id,
      updatedAccountAccountDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountAccountService.deleted(+id);
  }
}
