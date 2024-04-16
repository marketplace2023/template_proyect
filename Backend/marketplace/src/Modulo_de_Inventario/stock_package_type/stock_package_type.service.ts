import { Injectable } from '@nestjs/common';
import { CreateStockPackageTypeDto } from './dto/create-stock_package_type.dto';
import { UpdateStockPackageTypeDto } from './dto/update-stock_package_type.dto';

@Injectable()
export class StockPackageTypeService {
  create(createStockPackageTypeDto: CreateStockPackageTypeDto) {
    return 'This action adds a new stockPackageType';
  }

  findAll() {
    return `This action returns all stockPackageType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockPackageType`;
  }

  update(id: number, updateStockPackageTypeDto: UpdateStockPackageTypeDto) {
    return `This action updates a #${id} stockPackageType`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockPackageType`;
  }
}
