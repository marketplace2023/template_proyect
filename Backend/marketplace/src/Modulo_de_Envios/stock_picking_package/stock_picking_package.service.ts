import { Injectable } from '@nestjs/common';
import { CreateStockPickingPackageDto } from './dto/create-stock_picking_package.dto';
import { UpdateStockPickingPackageDto } from './dto/update-stock_picking_package.dto';

@Injectable()
export class StockPickingPackageService {
  create(createStockPickingPackageDto: CreateStockPickingPackageDto) {
    return 'This action adds a new stockPickingPackage';
  }

  findAll() {
    return `This action returns all stockPickingPackage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockPickingPackage`;
  }

  update(id: number, updateStockPickingPackageDto: UpdateStockPickingPackageDto) {
    return `This action updates a #${id} stockPickingPackage`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockPickingPackage`;
  }
}
