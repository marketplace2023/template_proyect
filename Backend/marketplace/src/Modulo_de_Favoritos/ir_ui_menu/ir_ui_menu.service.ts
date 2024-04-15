import { Injectable } from '@nestjs/common';
import { CreateIrUiMenuDto } from './dto/create-ir_ui_menu.dto';
import { UpdateIrUiMenuDto } from './dto/update-ir_ui_menu.dto';

@Injectable()
export class IrUiMenuService {
  create(createIrUiMenuDto: CreateIrUiMenuDto) {
    return 'This action adds a new irUiMenu';
  }

  findAll() {
    return `This action returns all irUiMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} irUiMenu`;
  }

  update(id: number, updateIrUiMenuDto: UpdateIrUiMenuDto) {
    return `This action updates a #${id} irUiMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} irUiMenu`;
  }
}
