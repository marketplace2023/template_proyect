import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockShipmentTracking } from './entities/stock-shipment-tracking.entity';
import { Repository } from 'typeorm';
import { StockShipmentTrackingNotFoundException } from './error/stock-shipment-tracking-not-found.exception';
import { UpdatedStockShipmentTrackingDto } from './dto/updated-stock-shipment-tracking.dto';
import { CreateStockShipmentTrackingDto } from './dto/created-stock-shipment-tracking.dto';
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
export class StockShipmentTrackingService {
  constructor(
    @InjectRepository(StockShipmentTracking)
    private readonly stockShipmentTrackingRepository: Repository<StockShipmentTracking>,
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
  ): Promise<StockShipmentTracking[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockShipmentTracking = await this.stockShipmentTrackingRepository
      .createQueryBuilder('stockShipmentTracking')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockShipmentTracking;
  }

  async create(
    createStockShipmentTrackingDto: CreateStockShipmentTrackingDto,
  ): Promise<StockShipmentTracking> {
    const stockShipmentTracking = new StockShipmentTracking(
      createStockShipmentTrackingDto,
    );

    //relacion de orderLine
    const OrderL = await this.ordenLineRepository
      .createQueryBuilder('orderLine')
      .whereInIds(createStockShipmentTrackingDto.orderLineIds)
      .getMany();
    stockShipmentTracking.orderLine = OrderL;

    //relacion de ProductTemplate
    const ProductT = await this.productTemplateRepository
      .createQueryBuilder('productTemplate')
      .whereInIds(createStockShipmentTrackingDto.productTemplateIds)
      .getMany();
    stockShipmentTracking.productsTemplate = ProductT;

    //relacion de resPartner
    const ResP = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createStockShipmentTrackingDto.res_partnerIds)
      .getMany();
    stockShipmentTracking.resPartner = ResP;

    //relacion de stock.picking.line
    const StockPL = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .whereInIds(createStockShipmentTrackingDto.stockPickingLine_Ids)
      .getMany();
    stockShipmentTracking.stockPickingLine = StockPL;

    //relacion de stockMove
    const StockM = await this.stockMoveRepository
      .createQueryBuilder('StockMove')
      .whereInIds(createStockShipmentTrackingDto.stockMove_Ids)
      .getMany();
    stockShipmentTracking.stockMove = StockM;

    //relacion de stockPicking
    const StockP = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .whereInIds(createStockShipmentTrackingDto.stockPicking_Ids)
      .getMany();
    stockShipmentTracking.stockPicking = StockP;

    //relacion de stockPickingType
    const StockPType = await this.stockPickingTypeRepository
      .createQueryBuilder('StockPickingType')
      .whereInIds(createStockShipmentTrackingDto.stockPickingType_Ids)
      .getMany();
    stockShipmentTracking.stockPickingType = StockPType;

    //relacion de stockPickingPackage
    const StockPPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .whereInIds(createStockShipmentTrackingDto.stockPickingPackage_Ids)
      .getMany();
    stockShipmentTracking.stockPickingPackage = StockPPackage;

    //relacion de stockPickingPackageLine
    const StockPPackagePackageLine =
      await this.stockPickingPackageLineRepository
        .createQueryBuilder('stockPickingPackageLine')
        .whereInIds(createStockShipmentTrackingDto.stockPickingPackageLine_Ids)
        .getMany();
    stockShipmentTracking.stockPickingPackageLine = StockPPackagePackageLine;

    return await this.stockShipmentTrackingRepository.save(
      stockShipmentTracking,
    );
  }

  async findOne(id: number): Promise<StockShipmentTracking> {
    const stockShipmentTracking = await this.stockShipmentTrackingRepository
      .createQueryBuilder('stockShipmentTracking')
      .where('stockShipmentTracking.id = :id', { id })
      .getOne();
    if (!stockShipmentTracking) {
      throw new StockShipmentTrackingNotFoundException();
    }
    return stockShipmentTracking;
  }

  async updated(
    id: number,
    updatedStockShipmentTrackingDto: UpdatedStockShipmentTrackingDto,
  ): Promise<StockShipmentTracking> {
    const stockShipmentTracking = await this.stockShipmentTrackingRepository
      .createQueryBuilder('stockShipmentTracking')
      .where('stockShipmentTracking.id = :id', { id })
      .getOne();
    if (!stockShipmentTracking) {
      throw new StockShipmentTrackingNotFoundException();
    }
    Object.assign(stockShipmentTracking, updatedStockShipmentTrackingDto);
    return await this.stockShipmentTrackingRepository.save(
      stockShipmentTracking,
    );
  }

  async deleted(id: number): Promise<void> {
    const stockShipmentTracking = await this.stockShipmentTrackingRepository
      .createQueryBuilder('stockShipmentTracking')
      .where('stockShipmentTracking.id = :id', { id })
      .getOne();
    if (!stockShipmentTracking) {
      throw new StockShipmentTrackingNotFoundException();
    }
    await this.stockShipmentTrackingRepository.softRemove(
      stockShipmentTracking,
    );
    console.log('stockShipmentTracking Eliminado');
  }
}
