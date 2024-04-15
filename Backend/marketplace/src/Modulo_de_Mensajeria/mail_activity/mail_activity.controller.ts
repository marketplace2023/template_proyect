import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailActivityService } from './mail_activity.service';
import { CreateMailActivityDto } from './dto/create-mail_activity.dto';
import { UpdateMailActivityDto } from './dto/update-mail_activity.dto';

@Controller('mail-activity')
export class MailActivityController {
  constructor(private readonly mailActivityService: MailActivityService) {}

  @Post()
  create(@Body() createMailActivityDto: CreateMailActivityDto) {
    return this.mailActivityService.create(createMailActivityDto);
  }

  @Get()
  findAll() {
    return this.mailActivityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailActivityService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMailActivityDto: UpdateMailActivityDto,
  ) {
    return this.mailActivityService.update(+id, updateMailActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailActivityService.remove(+id);
  }
}
//gestor-actividades                                                                    # (mail.activity)
//# Organiza tareas y recordatorios vinculados a mensajes y registros.
