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
import { IrModelAccessGroupsRelService } from './ir-model-access-groups-rel.service';
import { IrModelAccessGroupsRel } from './entities/ir-model-access-groups-rel.entity';
import { CreateIrModelAccessGroupsRelDto } from './dto/created-ir-model-access-groups-rel.dto';
import { UpdatedIrModelAccessGroupsRelDto } from './dto/updated-ir-model-access-groups-rel.dto';
@Controller('ir-model-access-groups-rel')
export class IrModelAccessGroupsRelController {
  constructor(
    private readonly irModelAccessGroupsRelService: IrModelAccessGroupsRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<IrModelAccessGroupsRel[]> {
    return await this.irModelAccessGroupsRelService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaIrModelAccessGroupsRelDto: CreateIrModelAccessGroupsRelDto,
  ): Promise<IrModelAccessGroupsRel> {
    return await this.irModelAccessGroupsRelService.create(
      createaIrModelAccessGroupsRelDto,
    );
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IrModelAccessGroupsRel> {
    return await this.irModelAccessGroupsRelService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedIrModelAccessGroupsRelDto: UpdatedIrModelAccessGroupsRelDto,
    @Param('id') id: string,
  ): Promise<IrModelAccessGroupsRel> {
    return await this.irModelAccessGroupsRelService.updated(
      +id,
      updatedIrModelAccessGroupsRelDto,
    );
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.irModelAccessGroupsRelService.deleted(+id);
  }
}
