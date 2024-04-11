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
import { MailGatewayAllowedService } from './mail-gateway-allowed.service';
import { MailGatewayAllowed } from './entities/mail-gateway-allowed.entity';
import { CreateMailGatewayAllowedDto } from './dto/create-mail-gateway-allowed.dto';
import { UpdatedMailGatewayAllowedDto } from './dto/updated-mail-gateway-allowed.dto';
@Controller('mail-gateway-allowed')
export class MailGatewayAllowedController {
  constructor(
    private readonly mailGatewayAllowedService: MailGatewayAllowedService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<MailGatewayAllowed[]> {
    return await this.mailGatewayAllowedService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaMailGatewayAllowedDto: CreateMailGatewayAllowedDto,
  ): Promise<MailGatewayAllowed> {
    return await this.mailGatewayAllowedService.create(
      createaMailGatewayAllowedDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<MailGatewayAllowed> {
    return await this.mailGatewayAllowedService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedMailGatewayAllowedDto: UpdatedMailGatewayAllowedDto,
    @Param('id') id: string,
  ): Promise<MailGatewayAllowed> {
    return await this.mailGatewayAllowedService.updated(
      +id,
      updatedMailGatewayAllowedDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.mailGatewayAllowedService.deleted(+id);
  }
}
