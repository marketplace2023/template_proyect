import { PartialType } from '@nestjs/mapped-types';
import { CreateIrUiMenuDto } from './create-ir_ui_menu.dto';

export class UpdateIrUiMenuDto extends PartialType(CreateIrUiMenuDto) {}
