import { Injectable } from '@nestjs/common';
import { CreateIrModelDto } from './dto/create-ir_model.dto';
import { UpdateIrModelDto } from './dto/update-ir_model.dto';

@Injectable()
export class IrModelService {
  create(createIrModelDto: CreateIrModelDto) {
    return 'This action adds a new irModel';
  }

  findAll() {
    return `This action returns all irModel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irModel`;
  }

  update(id: number, updateIrModelDto: UpdateIrModelDto) {
    return `This action updates a #${id} irModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} irModel`;
  }
}
