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
import { AccountMove } from './entities/account-move.entity';
import { UpdatedAccountMoveDto } from './dto/updated-account-move.dto';
import { CreateAccountMoveDto } from './dto/created-account-move.dto';
import { AccountMoveService } from './account-move.service';

@Controller('account-move')
export class AccountMoveController {
  constructor(private readonly accountMoveService: AccountMoveService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountMove[]> {
    return await this.accountMoveService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaAccountMoveDto: CreateAccountMoveDto,
  ): Promise<AccountMove> {
    return await this.accountMoveService.create(createaAccountMoveDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountMove> {
    return await this.accountMoveService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedAccountMoveDto: UpdatedAccountMoveDto,
    @Param('id') id: string,
  ): Promise<AccountMove> {
    return await this.accountMoveService.updated(+id, updatedAccountMoveDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountMoveService.deleted(+id);
  }
}
