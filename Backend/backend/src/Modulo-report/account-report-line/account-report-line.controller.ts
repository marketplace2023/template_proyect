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
import { AccountReportLine } from './entities/account-report-line.entity';
import { AccountReportLineService } from './account-report-line.service';
import { CreateAccountReportLineDto } from './dto/create-account-report-line.dto';
import { UpdatedAccountReportLineDto } from './dto/updated-account-report-line.dto';
@Controller('account-report-line')
export class AccountReportLineController {
  constructor(
    private readonly accountReportLineService: AccountReportLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountReportLine[]> {
    return await this.accountReportLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountReportLineDto: CreateAccountReportLineDto,
  ): Promise<AccountReportLine> {
    return await this.accountReportLineService.create(
      createaAccountReportLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountReportLine> {
    return await this.accountReportLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountReportLineDto: UpdatedAccountReportLineDto,
    @Param('id') id: string,
  ): Promise<AccountReportLine> {
    return await this.accountReportLineService.updated(
      +id,
      updatedAccountReportLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountReportLineService.deleted(+id);
  }
}
