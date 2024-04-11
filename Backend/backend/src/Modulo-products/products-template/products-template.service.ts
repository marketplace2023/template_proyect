import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsTemplateNotFoundException } from './error/products-template-not-found.exception';
import { UpdatedProductsTemplateDto } from './dto/updated-products-template.dto';
import { ProductsTemplate } from './entities/products-template.entity';
import { Repository } from 'typeorm';
import { CreateProductsTemplateDto } from './dto/create-products-template.dto';
import { ChooseDeliveryPackage } from 'src/Modulo-Envio/choose-delivery-package/entities/choose-delivery-package.entity';
import { ChooseDeliveryCarrier } from 'src/Modulo-Envio/choose-delivery-carrier/entities/choose-delivery-carrier.entity';
import { DeliveryCarrier } from 'src/Modulo-Pedidos/delivery-carrier/entities/delivery-carrier.entity';
import { DeliveryPackage } from 'src/Modulo-Pedidos/delivery-package/entities/delivery-package.entity';
import { DeliveryShipment } from 'src/Modulo-Pedidos/delivery-shipment/entities/delivery-shipment.entity';
import { OrderLine } from 'src/Modulo-Envio/order-line/entities/order-line.entity';
import { ResPartner } from 'src/Modulo-users/res-partner/entities/res-partner.entity';
import { StockPickingLine } from 'src/Modulo-store/stock-picking-line/entities/stock-picking-line.entity';
import { StockMove } from 'src/Modulo-Envio/stock-move/entities/stock-move.entity';
import { StockPicking } from 'src/Modulo-store/stock-picking/entities/stock-picking.entity';

@Injectable()
export class ProductsTemplateService {
  constructor(
    @InjectRepository(ProductsTemplate)
    private readonly productsTemplateRepository: Repository<ProductsTemplate>,
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
    @InjectRepository(ResPartner)
    private readonly resPartnerRepository: Repository<ResPartner>,
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
  ): Promise<ProductsTemplate[] | undefined> {
    const offset = (page - 1) * perPage;
    const productsTemplate = await this.productsTemplateRepository
      .createQueryBuilder('productsTemplate')
      .take(perPage)
      .skip(offset)
      .getMany();
    return productsTemplate;
  }

  async create(
    createProductsTemplateDto: CreateProductsTemplateDto,
  ): Promise<ProductsTemplate> {
    const productsTemplate = new ProductsTemplate(createProductsTemplateDto);

    //relacion de chooseDeliveryPackage
    const chooseDeliveryP = await this.chooseDeliveryPackageRepository
      .createQueryBuilder('chooseDeliveryPackage')
      .whereInIds(createProductsTemplateDto.choose_delivery_package_Ids)
      .getMany();
    productsTemplate.chooseDeliveryPackage = chooseDeliveryP;

    //relacion de chooseDeliveryCarrier
    const chooseDeliveryC = await this.chooseDeliveryCarrierRepository
      .createQueryBuilder('chooseDeliveryCarrier')
      .whereInIds(createProductsTemplateDto.choose_delivery_carrier_Ids)
      .getMany();
    productsTemplate.chooseDeliveryCarrier = chooseDeliveryC;

    //relacion de DeliveryCarrier
    const deliveryC = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .whereInIds(createProductsTemplateDto.delivery_carrier_Ids)
      .getMany();
    productsTemplate.deliveryCarrier = deliveryC;

    //relacion de DeliveryPackage
    const deliveryP = await this.deliveryPackageRepository
      .createQueryBuilder('deliveryPackage')
      .whereInIds(createProductsTemplateDto.delivery_package_Ids)
      .getMany();
    productsTemplate.deliveryPackage = deliveryP;

    //relacion de DeliveryShipment
    const deliveryS = await this.deliveryShipmentRepository
      .createQueryBuilder('deliveryShipment')
      .whereInIds(createProductsTemplateDto.delivery_shipment_Ids)
      .getMany();
    productsTemplate.deliveryShipment = deliveryS;

    //relacion de OrderLine
    const orderL = await this.orderLineRepository
      .createQueryBuilder('orderLine')
      .whereInIds(createProductsTemplateDto.order_line_Ids)
      .getMany();
    productsTemplate.orderLine = orderL;

    //relacion de resPartner
    const resP = await this.resPartnerRepository
      .createQueryBuilder('resPartner')
      .whereInIds(createProductsTemplateDto.res_partner_Ids)
      .getMany();
    productsTemplate.resPartner = resP;

    //relacion de stockPickingLine
    const stockPl = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .whereInIds(createProductsTemplateDto.delivery_carrier_Ids)
      .getMany();
    productsTemplate.stockPickingLine = stockPl;

    //relacion de stockMove
    const stockM = await this.stockMoveRepository
      .createQueryBuilder('stockMove')
      .whereInIds(createProductsTemplateDto.stock_move_Ids)
      .getMany();
    productsTemplate.stockMove = stockM;

    //relacion de StockPicking
    const stockP = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .whereInIds(createProductsTemplateDto.stock_picking_Ids)
      .getMany();
    productsTemplate.stockPicking = stockP;

    return await this.productsTemplateRepository.save(productsTemplate);
  }

  async findOne(id: number): Promise<ProductsTemplate> {
    const productsTemplate = await this.productsTemplateRepository
      .createQueryBuilder('productsTemplate')
      .where('productsTemplate.id = :id', { id })
      .getOne();
    if (!productsTemplate) {
      throw new ProductsTemplateNotFoundException();
    }
    return productsTemplate;
  }

  async updated(
    id: number,
    updatedProductsTemplateDto: UpdatedProductsTemplateDto,
  ): Promise<ProductsTemplate> {
    const productsTemplate = await this.productsTemplateRepository
      .createQueryBuilder('productsTemplate')
      .where('productsTemplate.id = :id', { id })
      .getOne();
    if (!productsTemplate) {
      throw new ProductsTemplateNotFoundException();
    }
    Object.assign(productsTemplate, updatedProductsTemplateDto);
    return await this.productsTemplateRepository.save(productsTemplate);
  }

  async deleted(id: number): Promise<void> {
    const productsTemplate = await this.productsTemplateRepository
      .createQueryBuilder('productsTemplate')
      .where('productsTemplate.id = :id', { id })
      .getOne();
    if (!productsTemplate) {
      throw new ProductsTemplateNotFoundException();
    }
    await this.productsTemplateRepository.softRemove(productsTemplate);
    console.log('Productos Eliminado');
  }
}
