import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailGatewayAllowedNotFoundException } from './error/mail-gateway-allowed-not-found.exception';
import { MailGatewayAllowed } from './entities/mail-gateway-allowed.entity';
import { UpdatedMailGatewayAllowedDto } from './dto/updated-mail-gateway-allowed.dto';
import { CreateMailGatewayAllowedDto } from './dto/create-mail-gateway-allowed.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MailGatewayAllowedService {
  constructor(
    @InjectRepository(MailGatewayAllowed)
    private readonly mailGatewayAllowedRepository: Repository<MailGatewayAllowed>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailGatewayAllowed[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailGatewayAllowed = await this.mailGatewayAllowedRepository
      .createQueryBuilder('mailGatewayAllowed')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailGatewayAllowed;
  }

  async create(
    createMailGatewayAllowedDto: CreateMailGatewayAllowedDto,
  ): Promise<MailGatewayAllowed> {
    const mailGatewayAllowed = new MailGatewayAllowed(
      createMailGatewayAllowedDto,
    );
    return await this.mailGatewayAllowedRepository.save(mailGatewayAllowed);
  }

  async findOne(id: number): Promise<MailGatewayAllowed> {
    const mailGatewayAllowed = await this.mailGatewayAllowedRepository
      .createQueryBuilder('mailGatewayAllowed')
      .where('mailGatewayAllowed.id = :id', { id })
      .getOne();
    if (!mailGatewayAllowed) {
      throw new MailGatewayAllowedNotFoundException();
    }
    return mailGatewayAllowed;
  }

  async updated(
    id: number,
    updatedMailGatewayAllowedDto: UpdatedMailGatewayAllowedDto,
  ): Promise<MailGatewayAllowed> {
    const mailGatewayAllowed = await this.mailGatewayAllowedRepository
      .createQueryBuilder('mailGatewayAllowed')
      .where('mailGatewayAllowed.id = :id', { id })
      .getOne();
    if (!mailGatewayAllowed) {
      throw new MailGatewayAllowedNotFoundException();
    }
    Object.assign(mailGatewayAllowed, updatedMailGatewayAllowedDto);
    return await this.mailGatewayAllowedRepository.save(mailGatewayAllowed);
  }

  async deleted(id: number): Promise<void> {
    const mailGatewayAllowed = await this.mailGatewayAllowedRepository
      .createQueryBuilder('mailGatewayAllowed')
      .where('mailGatewayAllowed.id = :id', { id })
      .getOne();
    if (!mailGatewayAllowed) {
      throw new MailGatewayAllowedNotFoundException();
    }
    await this.mailGatewayAllowedRepository.softRemove(mailGatewayAllowed);
    console.log('mailGatewayAllowed Eliminado');
  }
}
