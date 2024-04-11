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
import { MailWizardInvite } from './entities/mail-wizard-invite.entity';
import { MailWizardInviteService } from './mail-wizard-invite.service';
import { CreateMailWizardInviteDto } from './dto/create-mail-wizard-invite.dto';
import { UpdatedMailWizardInviteDto } from './dto/updated-mail-wizard-invite.dto';
@Controller('mail-wizard-invite')
export class MailWizardInviteController {
  constructor(
    private readonly MailWizardInviteService: MailWizardInviteService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailWizardInvite[]> {
    return await this.MailWizardInviteService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailWizardInviteDto: CreateMailWizardInviteDto,
  ): Promise<MailWizardInvite> {
    return await this.MailWizardInviteService.create(
      createaMailWizardInviteDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailWizardInvite> {
    return await this.MailWizardInviteService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailWizardInviteDto: UpdatedMailWizardInviteDto,
    @Param('id') id: string,
  ): Promise<MailWizardInvite> {
    return await this.MailWizardInviteService.updated(
      +id,
      updatedMailWizardInviteDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.MailWizardInviteService.deleted(+id);
  }
}
