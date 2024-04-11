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
import { IrModelAccess } from './entities/ir-model-access.entity';
import { UpdatedIrModelAccessDto } from './dto/updated-ir-model-access.dto';
import { CreateIrModelAccessDto } from './dto/created-ir-model-access.dto';
import { IrModelAccessService } from './ir-model-access.service';
@Controller('ir-model-access')
export class IrModelAccessController {
  constructor(private readonly irModelAccessService: IrModelAccessService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<IrModelAccess[]> {
    return await this.irModelAccessService.paginate(+page, +perPage);
  }
  //Post
  @Post()
  async create(
    @Body()
    createaIrModelAccessDto: CreateIrModelAccessDto,
  ): Promise<IrModelAccess> {
    return await this.irModelAccessService.create(createaIrModelAccessDto);
  }
  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IrModelAccess> {
    return await this.irModelAccessService.findOne(+id);
  }
  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedIrModelAccessDto: UpdatedIrModelAccessDto,
    @Param('id') id: string,
  ): Promise<IrModelAccess> {
    return await this.irModelAccessService.updated(
      +id,
      updatedIrModelAccessDto,
    );
  }
  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.irModelAccessService.deleted(+id);
  }
}
