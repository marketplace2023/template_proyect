import { Injectable } from '@nestjs/common';
import { CreateIrActWindowDto } from './dto/create-ir_act_window.dto';
import { UpdateIrActWindowDto } from './dto/update-ir_act_window.dto';

@Injectable()
export class IrActWindowsService {
  create(createIrActWindowDto: CreateIrActWindowDto) {
    return 'This action adds a new irActWindow';
  }

  findAll() {
    return `This action returns all irActWindows`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irActWindow`;
  }

  update(id: number, updateIrActWindowDto: UpdateIrActWindowDto) {
    return `This action updates a #${id} irActWindow`;
  }

  remove(id: number) {
    return `This action removes a #${id} irActWindow`;
  }
}
