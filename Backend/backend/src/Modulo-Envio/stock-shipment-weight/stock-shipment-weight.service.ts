import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockShipmentWeightNotFoundException } from './error/stock-shipment-weight-not-found.exception';
import { UpdatedStockShipmentWeightDto } from './dto/updated-stock-shipment-weight.dto';
import { StockShipmentWeight } from './entities/stock-shipment-weight.entity';
import { CreateStockShipmentWeightDto } from './dto/created-stock-shipment-weight.dto';
import { Repository } from 'typeorm';
import { OrderLine } from '../order-line/entities/order-line.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from '../stock-move/entities/stock-move.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPickingPackage } from '../stock-picking-package/entities/stock-picking-package.entity';
import { StockPickingPackageLine } from '../stock-picking-package-line/entities/stock-picking-package-line.entity';

@Injectable()
export class StockShipmentWeightService {
  constructor(
    @InjectRepository(StockShipmentWeight)
    private readonly stockShipmentWeightRepository: Repository<StockShipmentWeight>,
    @InjectRepository(OrderLine)
    private readonly orderLineRepository: Repository<OrderLine>,
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
  ): Promise<StockShipmentWeight[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockShipmentWeight = await this.stockShipmentWeightRepository
      .createQueryBuilder('stockShipmentWeight')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockShipmentWeight;
  }

  async create(
    createStockShipmentWeightDto: CreateStockShipmentWeightDto,
  ): Promise<StockShipmentWeight> {
    const stockShipmentWeight = new StockShipmentWeight(
      createStockShipmentWeightDto,
    );

    //relacion de orderLine
    const OrderL = await this.orderLineRepository
      .createQueryBuilder('orderLine')
      .whereInIds(createStockShipmentWeightDto.orderLineIds)
      .getMany();
    stockShipmentWeight.orderLine = OrderL;

    //relacion de ProductTemplate
    const ProductT = await this.productTemplateRepository
      .createQueryBuilder('productTemplate')
      .whereInIds(createStockShipmentWeightDto.productTemplateIds)
      .getMany();
    stockShipmentWeight.productTemplate = ProductT;

    //relacion de resPartner
    const ResP = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createStockShipmentWeightDto.res_partnerIds)
      .getMany();
    stockShipmentWeight.resPartner = ResP;

    //relacion de stock.picking.line
    const StockPL = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .whereInIds(createStockShipmentWeightDto.stockPickingLine_Ids)
      .getMany();
    stockShipmentWeight.stockPickingLine = StockPL;

    //relacion de stockMove
    const StockM = await this.stockMoveRepository
      .createQueryBuilder('StockMove')
      .whereInIds(createStockShipmentWeightDto.stockMove_Ids)
      .getMany();
    stockShipmentWeight.stockMove = StockM;

    //relacion de stockPicking
    const StockP = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .whereInIds(createStockShipmentWeightDto.stockPicking_Ids)
      .getMany();
    stockShipmentWeight.stockPicking = StockP;

    //relacion de stockPickingType
    const StockPType = await this.stockPickingTypeRepository
      .createQueryBuilder('StockPickingType')
      .whereInIds(createStockShipmentWeightDto.stockPickingType_Ids)
      .getMany();
    stockShipmentWeight.stockPickingType = StockPType;

    //relacion de stockPickingPackage
    const StockPPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createStockShipmentWeightDto.stockPickingPackage_Ids)
      .getMany();
    stockShipmentWeight.stockPickingPackage = StockPPackage;

    //relacion de stockPickingPackageLine
    const StockPPackagePackageLine =
      await this.stockPickingPackageLineRepository
        .createQueryBuilder('resPartner')
        .whereInIds(createStockShipmentWeightDto.stockPickingPackageLine_Ids)
        .getMany();
    stockShipmentWeight.stockPickingPackageLine = StockPPackagePackageLine;

    return await this.stockShipmentWeightRepository.save(stockShipmentWeight);
  }

  async findOne(id: number): Promise<StockShipmentWeight> {
    const stockShipmentWeight = await this.stockShipmentWeightRepository
      .createQueryBuilder('stockShipmentWeight')
      .where('stockShipmentWeight.id = :id', { id })
      .getOne();
    if (!stockShipmentWeight) {
      throw new StockShipmentWeightNotFoundException();
    }
    return stockShipmentWeight;
  }

  async updated(
    id: number,
    updatedStockShipmentWeightDto: UpdatedStockShipmentWeightDto,
  ): Promise<StockShipmentWeight> {
    const stockShipmentWeight = await this.stockShipmentWeightRepository
      .createQueryBuilder('stockShipmentWeight')
      .where('stockShipmentWeight.id = :id', { id })
      .getOne();
    if (!stockShipmentWeight) {
      throw new StockShipmentWeightNotFoundException();
    }
    Object.assign(stockShipmentWeight, updatedStockShipmentWeightDto);
    return await this.stockShipmentWeightRepository.save(stockShipmentWeight);
  }

  async deleted(id: number): Promise<void> {
    const stockShipmentWeight = await this.stockShipmentWeightRepository
      .createQueryBuilder('stockShipmentWeight')
      .where('stockShipmentWeight.id = :id', { id })
      .getOne();
    if (!stockShipmentWeight) {
      throw new StockShipmentWeightNotFoundException();
    }
    await this.stockShipmentWeightRepository.softRemove(stockShipmentWeight);
    console.log('stockShipmentWeight Eliminado');
  }
}
