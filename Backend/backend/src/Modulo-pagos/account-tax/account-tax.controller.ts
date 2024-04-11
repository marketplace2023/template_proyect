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
import { AccountTaxService } from './account-tax.service';
import { AccountTax } from './entities/account-tax.entity';
import { CreatedAccountTaxDto } from './dto/created-account-tax.dto';
import { UpdatedAccountTaxDto } from './dto/updated-account-tax.dto';
@Controller('account-tax')
export class AccountTaxController {
  constructor(private readonly accountTaxService: AccountTaxService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountTax[]> {
    return await this.accountTaxService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountTaxDto: CreatedAccountTaxDto,
  ): Promise<AccountTax> {
    return await this.accountTaxService.create(createaAccountTaxDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountTax> {
    return await this.accountTaxService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountTaxDto: UpdatedAccountTaxDto,
    @Param('id') id: string,
  ): Promise<AccountTax> {
    return await this.accountTaxService.updated(+id, updatedAccountTaxDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountTaxService.deleted(+id);
  }
}
