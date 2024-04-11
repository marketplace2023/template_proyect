import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockShipmentVolume } from './entities/stock-shipment-volume.entity';
import { Repository } from 'typeorm';
import { CreateStockShipmentVolumeDto } from './dto/created-stock-shipment-volume.dto';
import { UpdatedStockShipmentVolumeDto } from './dto/updated-stock-shipment-volume.dto';
import { StockShipmentvolumeNotFoundException } from './error/stock-shipment-volume-not-found.exception';
import { OrderLine } from '../order-line/entities/order-line.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from '../stock-move/entities/stock-move.entity';
import { StockPickingPackageLine } from '../stock-picking-package-line/entities/stock-picking-package-line.entity';
import { StockPickingPackage } from '../stock-picking-package/entities/stock-picking-package.entity';
import { StockPickingType } from 'src/Modulo-store/stock-picking-type/entities/stock-picking-type.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';

@Injectable()
export class StockShipmentVolumeService {
  constructor(
    @InjectRepository(StockShipmentVolume)
    private readonly stockShipmentVolumeRepository: Repository<StockShipmentVolume>,
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
  ): Promise<StockShipmentVolume[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockShipmentVolume = await this.stockShipmentVolumeRepository
      .createQueryBuilder('stockShipmentVolume')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockShipmentVolume;
  }

  async create(
    createStockShipmentVolumeDto: CreateStockShipmentVolumeDto,
  ): Promise<StockShipmentVolume> {
    const stockShipmentVolume = new StockShipmentVolume(
      createStockShipmentVolumeDto,
    );

    //relacion de orderLine
    const OrderL = await this.ordenLineRepository
      .createQueryBuilder('orderLine')
      .whereInIds(createStockShipmentVolumeDto.orderLineIds)
      .getMany();
    stockShipmentVolume.orderLine = OrderL;

    //relacion de ProductTemplate
    const ProductT = await this.productTemplateRepository
      .createQueryBuilder('productTemplate')
      .whereInIds(createStockShipmentVolumeDto.productTemplateIds)
      .getMany();
    stockShipmentVolume.productTemplate = ProductT;

    //relacion de resPartner
    const ResP = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createStockShipmentVolumeDto.res_partnerIds)
      .getMany();
    stockShipmentVolume.resPartner = ResP;

    //relacion de stock.picking.line
    const StockPL = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .whereInIds(createStockShipmentVolumeDto.stockPickingLine_Ids)
      .getMany();
    stockShipmentVolume.stockPickingLine = StockPL;

    //relacion de stockMove
    const StockM = await this.stockMoveRepository
      .createQueryBuilder('StockMove')
      .whereInIds(createStockShipmentVolumeDto.stockMove_Ids)
      .getMany();
    stockShipmentVolume.stockMove = StockM;

    //relacion de stockPicking
    const StockP = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .whereInIds(createStockShipmentVolumeDto.stockPicking_Ids)
      .getMany();
    stockShipmentVolume.stockPicking = StockP;

    //relacion de stockPickingType
    const StockPType = await this.stockPickingTypeRepository
      .createQueryBuilder('StockPickingType')
      .whereInIds(createStockShipmentVolumeDto.stockPickingType_Ids)
      .getMany();
    stockShipmentVolume.stockPickingType = StockPType;

    //relacion de stockPickingPackage
    const StockPPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .whereInIds(createStockShipmentVolumeDto.stockPickingPackage_Ids)
      .getMany();
    stockShipmentVolume.stockPickingPackage = StockPPackage;

    //relacion de stockPickingPackageLine
    const StockPPackagePackageLine =
      await this.stockPickingPackageLineRepository
        .createQueryBuilder('stockPickingPackageLine')
        .whereInIds(createStockShipmentVolumeDto.stockPickingPackageLine_Ids)
        .getMany();
    stockShipmentVolume.stockPickingPackageLine = StockPPackagePackageLine;

    return await this.stockShipmentVolumeRepository.save(stockShipmentVolume);
  }

  async findOne(id: number): Promise<StockShipmentVolume> {
    const stockShipmentVolume = await this.stockShipmentVolumeRepository
      .createQueryBuilder('stockShipmentVolume')
      .where('stockShipmentVolume.id = :id', { id })
      .getOne();
    if (!stockShipmentVolume) {
      throw new StockShipmentvolumeNotFoundException();
    }
    return stockShipmentVolume;
  }

  async updated(
    id: number,
    updatedStockShipmentVolumeDto: UpdatedStockShipmentVolumeDto,
  ): Promise<StockShipmentVolume> {
    const stockShipmentVolume = await this.stockShipmentVolumeRepository
      .createQueryBuilder('stockShipmentVolume')
      .where('stockShipmentVolume.id = :id', { id })
      .getOne();
    if (!stockShipmentVolume) {
      throw new StockShipmentvolumeNotFoundException();
    }
    Object.assign(stockShipmentVolume, updatedStockShipmentVolumeDto);
    return await this.stockShipmentVolumeRepository.save(stockShipmentVolume);
  }

  async deleted(id: number): Promise<void> {
    const stockShipmentVolume = await this.stockShipmentVolumeRepository
      .createQueryBuilder('stockShipmentVolume')
      .where('stockShipmentVolume.id = :id', { id })
      .getOne();
    if (!stockShipmentVolume) {
      throw new StockShipmentvolumeNotFoundException();
    }
    await this.stockShipmentVolumeRepository.softRemove(stockShipmentVolume);
    console.log('stockShipmentVolume Eliminado');
  }
}
