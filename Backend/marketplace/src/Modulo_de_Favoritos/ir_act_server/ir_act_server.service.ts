import { Injectable } from '@nestjs/common';
import { CreateIrActServerDto } from './dto/create-ir_act_server.dto';
import { UpdateIrActServerDto } from './dto/update-ir_act_server.dto';

@Injectable()
export class IrActServerService {
  create(createIrActServerDto: CreateIrActServerDto) {
    return 'This action adds a new irActServer';
  }

  findAll() {
    return `This action returns all irActServer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irActServer`;
  }

  update(id: number, updateIrActServerDto: UpdateIrActServerDto) {
    return `This action updates a #${id} irActServer`;
  }

  remove(id: number) {
    return `This action removes a #${id} irActServer`;
  }
}
