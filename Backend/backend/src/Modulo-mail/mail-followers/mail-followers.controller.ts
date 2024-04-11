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
import { MailFollowers } from './entities/mail-followers.entity';
import { MailFollowersService } from './mail-followers.service';
import { CreateMailFollowersDto } from './dto/create-mail-followers.dto';
import { UpdatedMailFollowersDto } from './dto/updated-mail-followers.dto';
@Controller('mail-followers')
export class MailFollowersController {
  constructor(private readonly mailFollowersService: MailFollowersService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailFollowers[]> {
    return await this.mailFollowersService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailFollowersDto: CreateMailFollowersDto,
  ): Promise<MailFollowers> {
    return await this.mailFollowersService.create(createaMailFollowersDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailFollowers> {
    return await this.mailFollowersService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailFollowersDto: UpdatedMailFollowersDto,
    @Param('id') id: string,
  ): Promise<MailFollowers> {
    return await this.mailFollowersService.updated(
      +id,
      updatedMailFollowersDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailFollowersService.deleted(+id);
  }
}
