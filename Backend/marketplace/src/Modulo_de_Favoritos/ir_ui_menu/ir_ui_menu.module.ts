import { Module } from '@nestjs/common';
import { IrUiMenuService } from './ir_ui_menu.service';
import { IrUiMenuController } from './ir_ui_menu.controller';

@Module({
  controllers: [IrUiMenuController],
  providers: [IrUiMenuService],
})
export class IrUiMenuModule {}
