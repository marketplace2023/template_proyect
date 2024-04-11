import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockShipmentReturnNotFoundException } from './error/stock-shipment-return-not-found.exception';
import { StockShipmentReturn } from './entities/stock-shipment-return.entity';
import { UpdatedStockShipmentReturnDto } from './dto/updated-stock-shipment-return.dto';
import { CreateStockShipmentReturnDto } from './dto/created-stock-shipment-return.dto';
import { Repository } from 'typeorm';
import { OrderLine } from '../order-line/entities/order-line.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { StockMove } from '../stock-move/entities/stock-move.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockPickingPackage } from '../stock-picking-package/entities/stock-picking-package.entity';
import { StockPickingPackageLine } from '../stock-picking-package-line/entities/stock-picking-package-line.entity';

@Injectable()
export class StockShipmentReturnService {
  constructor(
    @InjectRepository(StockShipmentReturn)
    private readonly stockShipmentReturnRepository: Repository<StockShipmentReturn>,
    @InjectRepository(OrderLine)
    private readonly ordenLineRepository: Repository<OrderLine>,
    @InjectRepository(ProductsTemplate)
    private readonly productTemplateRepository: Repository<ProductsTemplate>,
    @InjectRepository(ResPartner)
    private readonly resPartnerRepository: Repository<ResPartner>,
    @InjectRepository(StockPickingLine)
    private readonly stockPickingLineRepository: Repository<StockPickingLine>,
    @InjectRepository(StockMove)
    private readonly stockMoveRepository: Repository<StockMove>,
    @InjectRepository(StockPicking)
    private readonly stockPickingRepository: Repository<StockPicking>,
    @InjectRepository(StockPickingType)
    private readonly stockPickingTypeRepository: Repository<StockPickingType>,
    @InjectRepository(StockPickingPackage)
    private readonly stockPickingPackageRepository: Repository<StockPickingPackage>,
    @InjectRepository(StockPickingPackageLine)
    private readonly stockPickingPackageLineRepository: Repository<StockPickingPackageLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockShipmentReturn[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockShipmentReturn = await this.stockShipmentReturnRepository
      .createQueryBuilder('stockShipmentReturn')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockShipmentReturn;
  }

  async create(
    createStockShipmentReturnDto: CreateStockShipmentReturnDto,
  ): Promise<StockShipmentReturn> {
    const stockShipmentReturn = new StockShipmentReturn(
      createStockShipmentReturnDto,
    );

    //relacion de orderLine
    const OrderL = await this.ordenLineRepository
      .createQueryBuilder('orderLine')
      .whereInIds(createStockShipmentReturnDto.orderLineIds)
      .getMany();
    stockShipmentReturn.orderL = OrderL;

    //relacion de ProductTemplate
    const ProductT = await this.productTemplateRepository
      .createQueryBuilder('productTemplate')
      .whereInIds(createStockShipmentReturnDto.productTemplateIds)
      .getMany();
    stockShipmentReturn.productsTemplate = ProductT;

    //relacion de resPartner
    const ResP = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createStockShipmentReturnDto.res_partnerIds)
      .getMany();
    stockShipmentReturn.resPartner = ResP;

    //relacion de stock.picking.line
    const StockPL = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .whereInIds(createStockShipmentReturnDto.stockPickingLine_Ids)
      .getMany();
    stockShipmentReturn.stockPickingLine = StockPL;

    //relacion de stockMove
    const StockM = await this.stockMoveRepository
      .createQueryBuilder('StockMove')
      .whereInIds(createStockShipmentReturnDto.stockMove_Ids)
      .getMany();
    stockShipmentReturn.stockMove = StockM;

    //relacion de stockPicking
    const StockP = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .whereInIds(createStockShipmentReturnDto.stockPicking_Ids)
      .getMany();
    stockShipmentReturn.stockPicking = StockP;

    //relacion de stockPickingType
    const StockPType = await this.stockPickingTypeRepository
      .createQueryBuilder('StockPickingType')
      .whereInIds(createStockShipmentReturnDto.stockPickingType_Ids)
      .getMany();
    stockShipmentReturn.stockPickingType = StockPType;

    //relacion de stockPickingPackage
    const StockPPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .whereInIds(createStockShipmentReturnDto.stockPickingPackage_Ids)
      .getMany();
    stockShipmentReturn.stockPickingPackage = StockPPackage;

    //relacion de stockPickingPackageLine
    const StockPPackagePackageLine =
      await this.stockPickingPackageLineRepository
        .createQueryBuilder('stockPickingPackageLine')
        .whereInIds(createStockShipmentReturnDto.stockPickingPackageLine_Ids)
        .getMany();
    stockShipmentReturn.stockPickingPackageLine = StockPPackagePackageLine;

    return await this.stockShipmentReturnRepository.save(stockShipmentReturn);
  }

  async findOne(id: number): Promise<StockShipmentReturn> {
    const stockShipmentReturn = await this.stockShipmentReturnRepository
      .createQueryBuilder('stockShipmentReturn')
      .where('stockShipmentReturn.id = :id', { id })
      .getOne();
    if (!stockShipmentReturn) {
      throw new StockShipmentReturnNotFoundException();
    }
    return stockShipmentReturn;
  }

  async updated(
    id: number,
    updatedStockShipmentReturnDto: UpdatedStockShipmentReturnDto,
  ): Promise<StockShipmentReturn> {
    const stockShipmentReturn = await this.stockShipmentReturnRepository
      .createQueryBuilder('stockShipmentReturn')
      .where('stockShipmentReturn.id = :id', { id })
      .getOne();
    if (!stockShipmentReturn) {
      throw new StockShipmentReturnNotFoundException();
    }
    Object.assign(stockShipmentReturn, updatedStockShipmentReturnDto);
    return await this.stockShipmentReturnRepository.save(stockShipmentReturn);
  }

  async deleted(id: number): Promise<void> {
    const stockShipmentReturn = await this.stockShipmentReturnRepository
      .createQueryBuilder('stockShipmentReturn')
      .where('stockShipmentReturn.id = :id', { id })
      .getOne();
    if (!stockShipmentReturn) {
      throw new StockShipmentReturnNotFoundException();
    }
    await this.stockShipmentReturnRepository.softRemove(stockShipmentReturn);
    console.log('stockShipmentReturn Eliminado');
  }
}
