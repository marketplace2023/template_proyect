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
import { IrRuleService } from './ir-rule.service';
import { IrRule } from './entities/ir-rule.entity';
import { CreateIrRuleDto } from './dto/created-ir-rule.dto';
import { UpdatedIrRuleDto } from './dto/updated-ir-rule.dto';
@Controller('ir-rule')
export class IrRuleController {
  constructor(private readonly irRuleService: IrRuleService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<IrRule[]> {
    return await this.irRuleService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaIrRuleDto: CreateIrRuleDto,
  ): Promise<IrRule> {
    return await this.irRuleService.create(createaIrRuleDto);
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IrRule> {
    return await this.irRuleService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedIrRuleDto: UpdatedIrRuleDto,
    @Param('id') id: string,
  ): Promise<IrRule> {
    return await this.irRuleService.updated(+id, updatedIrRuleDto);
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.irRuleService.deleted(+id);
  }
}
