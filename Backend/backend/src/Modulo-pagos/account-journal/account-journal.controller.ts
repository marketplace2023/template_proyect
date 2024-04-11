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
import { AccountJournalService } from './account-journal.service';
import { AccountJournal } from './entities/account-journal.entity';
import { CreatedAccountJournalDto } from './dto/created-account-journal.dto';
import { UpdatedAccountJournaltDto } from './dto/updated-account-journal.dto';
@Controller('account-journal')
export class AccountJournalController {
  constructor(private readonly accountJournalService: AccountJournalService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AccountJournal[]> {
    return await this.accountJournalService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaAccountJournalDto: CreatedAccountJournalDto,
  ): Promise<AccountJournal> {
    return await this.accountJournalService.create(createaAccountJournalDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountJournal> {
    return await this.accountJournalService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAccountJournalDto: UpdatedAccountJournaltDto,
    @Param('id') id: string,
  ): Promise<AccountJournal> {
    return await this.accountJournalService.updated(
      +id,
      updatedAccountJournalDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.accountJournalService.deleted(+id);
  }
}
