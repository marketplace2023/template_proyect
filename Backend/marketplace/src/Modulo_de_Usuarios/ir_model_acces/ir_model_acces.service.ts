import { Injectable } from '@nestjs/common';
import { CreateIrModelAcceDto } from './dto/create-ir_model_acce.dto';
import { UpdateIrModelAcceDto } from './dto/update-ir_model_acce.dto';

@Injectable()
export class IrModelAccesService {
  create(createIrModelAcceDto: CreateIrModelAcceDto) {
    return 'This action adds a new irModelAcce';
  }

  findAll() {
    return `This action returns all irModelAcces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irModelAcce`;
  }

  update(id: number, updateIrModelAcceDto: UpdateIrModelAcceDto) {
    return `This action updates a #${id} irModelAcce`;
  }

  remove(id: number) {
    return `This action removes a #${id} irModelAcce`;
  }
}
