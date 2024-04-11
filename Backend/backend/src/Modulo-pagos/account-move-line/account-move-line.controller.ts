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
import { AccountMoveLineService } from './account-move-line.service';
import { AccountMoveLine } from './entities/account-move-line.entity';
import { CreatedAccountMoveLineDto } from './dto/created-account-move-line.dto';
import { UpdatedAccountMoveLineDto } from './dto/updated-account-move-line.dto';
@Controller('account-move-line')
export class AccountMoveLineController {
  constructor(
    private readonly accountMoveLineService: AccountMoveLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountMoveLine[]> {
    return await this.accountMoveLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountMoveLineDto: CreatedAccountMoveLineDto,
  ): Promise<AccountMoveLine> {
    return await this.accountMoveLineService.create(createaAccountMoveLineDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountMoveLine> {
    return await this.accountMoveLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountMoveLineDto: UpdatedAccountMoveLineDto,
    @Param('id') id: string,
  ): Promise<AccountMoveLine> {
    return await this.accountMoveLineService.updated(
      +id,
      updatedAccountMoveLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountMoveLineService.deleted(+id);
  }
}
