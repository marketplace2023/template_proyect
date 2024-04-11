import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResPartnerNotFoundException } from './error/res_partner-not-found.exception';
import { ResPartner } from './entities/res-partner.entity';
import { UpdatedResPartnerDto } from './dto/updated-res-partner.dto';
import { Repository } from 'typeorm';
import { CreateResPartnerDto } from './dto/create-res-partner.dto';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';
import { ProductsTemplate } from 'src/Modulo-products/products-template/entities/products-template.entity';

@Injectable()
export class ResPartnerService {
  constructor(
    @InjectRepository(ResPartner)
    private readonly resPartnerRepository: Repository<ResPartner>,
    @InjectRepository(ChooseDeliveryPackage)
    private readonly chooseDeliveryPackageRepository: Repository<ChooseDeliveryPackage>,
    @InjectRepository(ChooseDeliveryCarrier)
    private readonly chooseDeliveryCarrierRepository: Repository<ChooseDeliveryCarrier>,
    @InjectRepository(DeliveryCarrier)
    private readonly deliveryCarrierRepository: Repository<DeliveryCarrier>,
    @InjectRepository(DeliveryPackage)
    private readonly deliveryPackageRepository: Repository<DeliveryPackage>,
    @InjectRepository(DeliveryShipment)
    private readonly deliveryShipmentRepository: Repository<DeliveryShipment>,
    @InjectRepository(OrderLine)
    private readonly orderLineRepository: Repository<OrderLine>,
    @InjectRepository(ProductsTemplate)
    private readonly productsTemplateRepository: Repository<ProductsTemplate>,
    @InjectRepository(StockPickingLine)
    private readonly stockPickingLineRepository: Repository<StockPickingLine>,
    @InjectRepository(StockMove)
    private readonly stockMoveRepository: Repository<StockMove>,
    @InjectRepository(StockPicking)
    private readonly stockPickingRepository: Repository<StockPicking>,
  ) {}

  async paginate(
    page: number,
    perPage: number,
  ): Promise<ResPartner[] | undefined> {
    const offset = (page - 1) * perPage;
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .take(perPage)
      .skip(offset)
      .getMany();
    return resPartner;
  }

  async create(createResPartnerDto: CreateResPartnerDto): Promise<ResPartner> {
    const resPartner = new ResPartner(createResPartnerDto);

    //relacion de chooseDeliveryPackage
    const chooseDeliveryP = await this.chooseDeliveryPackageRepository
      .createQueryBuilder('chooseDeliveryPackage')
      .whereInIds(createResPartnerDto.choose_delivery_package_Ids)
      .getMany();
    resPartner.chooseDeliveryPackage = chooseDeliveryP;

    //relacion de chooseDeliveryCarrier
    const chooseDeliveryC = await this.chooseDeliveryCarrierRepository
      .createQueryBuilder('chooseDeliveryCarrier')
      .whereInIds(createResPartnerDto.choose_delivery_carrier_Ids)
      .getMany();
    resPartner.chooseDeliveryCarrier = chooseDeliveryC;

    //relacion de DeliveryCarrier
    const deliveryC = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .whereInIds(createResPartnerDto.delivery_carrier_Ids)
      .getMany();
    resPartner.deliveryCarrier = deliveryC;

    //relacion de DeliveryPackage
    const deliveryP = await this.deliveryPackageRepository
      .createQueryBuilder('deliveryPackage')
      .whereInIds(createResPartnerDto.delivery_package_Ids)
      .getMany();
    resPartner.deliveryPackage = deliveryP;

    //relacion de DeliveryShipment
    const deliveryS = await this.deliveryShipmentRepository
      .createQueryBuilder('deliveryShipment')
      .whereInIds(createResPartnerDto.delivery_shipment_Ids)
      .getMany();
    resPartner.deliveryShipment = deliveryS;

    //relacion de OrderLine
    const orderL = await this.orderLineRepository
      .createQueryBuilder('orderLine')
      .whereInIds(createResPartnerDto.order_line_Ids)
      .getMany();
    resPartner.orderLine = orderL;

    //relacion de ProductsTemplate
    const resP = await this.productsTemplateRepository
      .createQueryBuilder('productsTemplate')
      .whereInIds(createResPartnerDto.product_template_Ids)
      .getMany();
    resPartner.productsTemplate = resP;

    //relacion de stockPickingLine
    const stockPl = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .whereInIds(createResPartnerDto.delivery_carrier_Ids)
      .getMany();
    resPartner.stockPickingLine = stockPl;

    //relacion de stockMove
    const stockM = await this.stockMoveRepository
      .createQueryBuilder('stockMove')
      .whereInIds(createResPartnerDto.stock_move_Ids)
      .getMany();
    resPartner.stockMove = stockM;

    //relacion de StockPicking
    const stockP = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .whereInIds(createResPartnerDto.stock_picking_Ids)
      .getMany();
    resPartner.stockPicking = stockP;

    return await this.resPartnerRepository.save(resPartner);
  }

  async findOneByEmail(email: string): Promise<ResPartner | undefined> {
    return await this.resPartnerRepository.findOne({ where: { email } });
  }

  async findOne(id: number): Promise<ResPartner> {
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .where('resPartner.id = :id', { id })
      .getOne();
    if (!resPartner) {
      throw new ResPartnerNotFoundException();
    }
    return resPartner;
  }

  async updated(
    id: number,
    updatedResPartnerDto: UpdatedResPartnerDto,
  ): Promise<ResPartner> {
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .where('resPartner.id = :id', { id })
      .getOne();
    if (!resPartner) {
      throw new ResPartnerNotFoundException();
    }
    Object.assign(resPartner, updatedResPartnerDto);
    return await this.resPartnerRepository.save(resPartner);
  }

  async deleted(id: number): Promise<void> {
    const resPartner = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .where('resPartner.id = :id', { id })
      .getOne();
    if (!resPartner) {
      throw new ResPartnerNotFoundException();
    }
    await this.resPartnerRepository.softRemove(resPartner);
    console.log('users_partner Eliminado');
  }
}
