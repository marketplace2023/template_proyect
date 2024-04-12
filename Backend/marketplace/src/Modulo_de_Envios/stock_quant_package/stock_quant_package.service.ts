import { Injectable } from '@nestjs/common';
import { CreateStockQuantPackageDto } from './dto/create-stock_quant_package.dto';
import { UpdateStockQuantPackageDto } from './dto/update-stock_quant_package.dto';

@Injectable()
export class StockQuantPackageService {
  create(createStockQuantPackageDto: CreateStockQuantPackageDto) {
    return 'This action adds a new stockQuantPackage';
  }

  findAll() {
    return `This action returns all stockQuantPackage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockQuantPackage`;
  }

  update(id: number, updateStockQuantPackageDto: UpdateStockQuantPackageDto) {
    return `This action updates a #${id} stockQuantPackage`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockQuantPackage`;
  }
}
