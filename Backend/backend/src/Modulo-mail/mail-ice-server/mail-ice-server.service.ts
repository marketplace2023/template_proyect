import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailIceServer } from './entities/mail-ice-server.entity';
import { Repository } from 'typeorm';
import { CreateMailIceServerDto } from './dto/create-mail-ice-server.dto';
import { MailIceServerNotFoundException } from './error/mail-ice-server-not-found.exception';
import { UpdatedMailIceServerDto } from './dto/updated-mail-ice-server.dto';

@Injectable()
export class MailIceServerService {
  constructor(
    @InjectRepository(MailIceServer)
    private readonly mailIceServerRepository: Repository<MailIceServer>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailIceServer[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailIceServer = await this.mailIceServerRepository
      .createQueryBuilder('mailIceServer')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailIceServer;
  }

  async create(
    createMailIceServerDto: CreateMailIceServerDto,
  ): Promise<MailIceServer> {
    const mailIceServer = new MailIceServer(createMailIceServerDto);
    return await this.mailIceServerRepository.save(mailIceServer);
  }

  async findOne(id: number): Promise<MailIceServer> {
    const mailIceServer = await this.mailIceServerRepository
      .createQueryBuilder('mailIceServer')
      .where('mailIceServer.id = :id', { id })
      .getOne();
    if (!mailIceServer) {
      throw new MailIceServerNotFoundException();
    }
    return mailIceServer;
  }

  async updated(
    id: number,
    updatedMailIceServerDto: UpdatedMailIceServerDto,
  ): Promise<MailIceServer> {
    const mailIceServer = await this.mailIceServerRepository
      .createQueryBuilder('mailIceServer')
      .where('mailIceServer.id = :id', { id })
      .getOne();
    if (!mailIceServer) {
      throw new MailIceServerNotFoundException();
    }
    Object.assign(mailIceServer, updatedMailIceServerDto);
    return await this.mailIceServerRepository.save(mailIceServer);
  }

  async deleted(id: number): Promise<void> {
    const mailIceServer = await this.mailIceServerRepository
      .createQueryBuilder('mailIceServer')
      .where('mailIceServer.id = :id', { id })
      .getOne();
    if (!mailIceServer) {
      throw new MailIceServerNotFoundException();
    }
    await this.mailIceServerRepository.softRemove(mailIceServer);
    console.log('mailIceServer Eliminado');
  }
}
