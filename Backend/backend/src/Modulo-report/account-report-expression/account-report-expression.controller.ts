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
import { AccountReportExpression } from './entities/account-report-expression.entity';
import { UpdatedAccountReportExpressionDto } from './dto/updated-account-report-expression.dto';
import { CreateAccountReportExpressionDto } from './dto/create-account-report-expression.dto';
import { AccountReportExpressionService } from './account-report-expression.service';
@Controller('account-report-expression')
export class AccountReportExpressionController {
  constructor(
    private readonly accountReportExpressionService: AccountReportExpressionService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountReportExpression[]> {
    return await this.accountReportExpressionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountReportExpressionDto: CreateAccountReportExpressionDto,
  ): Promise<AccountReportExpression> {
    return await this.accountReportExpressionService.create(
      createaAccountReportExpressionDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountReportExpression> {
    return await this.accountReportExpressionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountReportExpressionDto: UpdatedAccountReportExpressionDto,
    @Param('id') id: string,
  ): Promise<AccountReportExpression> {
    return await this.accountReportExpressionService.updated(
      +id,
      updatedAccountReportExpressionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountReportExpressionService.deleted(+id);
  }
}
