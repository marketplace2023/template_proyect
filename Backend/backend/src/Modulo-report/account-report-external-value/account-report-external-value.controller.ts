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
import { AccountReportExternalValueService } from './account-report-external-value.service';
import { AccountReportExternalValue } from './entities/account-report-external-value.entity';
import { CreateAccountReportExternalValueDto } from './dto/create-account-report-external-value.dto';
import { UpdatedAccountReportExternalValueDto } from './dto/updated-account-report-external-value.dto';
@Controller('account-report-external-value')
export class AccountReportExternalValueController {
  constructor(
    private readonly accountReportExternalValueService: AccountReportExternalValueService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountReportExternalValue[]> {
    return await this.accountReportExternalValueService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountReportExternalValueDto: CreateAccountReportExternalValueDto,
  ): Promise<AccountReportExternalValue> {
    return await this.accountReportExternalValueService.create(
      createaAccountReportExternalValueDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountReportExternalValue> {
    return await this.accountReportExternalValueService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountReportExternalValueDto: UpdatedAccountReportExternalValueDto,
    @Param('id') id: string,
  ): Promise<AccountReportExternalValue> {
    return await this.accountReportExternalValueService.updated(
      +id,
      updatedAccountReportExternalValueDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountReportExternalValueService.deleted(+id);
  }
}
