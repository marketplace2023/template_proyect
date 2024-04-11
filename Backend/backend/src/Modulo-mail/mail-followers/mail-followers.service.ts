import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailFollowers } from './entities/mail-followers.entity';
import { Repository } from 'typeorm';
import { CreateMailFollowersDto } from './dto/create-mail-followers.dto';
import { MailFollowersNotFoundException } from './error/mail-followers-not-found.exception';
import { UpdatedMailFollowersDto } from './dto/updated-mail-followers.dto';

@Injectable()
export class MailFollowersService {
  constructor(
    @InjectRepository(MailFollowers)
    private readonly mailFollowersRepository: Repository<MailFollowers>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<MailFollowers[] | undefined> {
    const offset = (page - 1) * perPage;
    const mailFollowers = await this.mailFollowersRepository
      .createQueryBuilder('mailFollowers')
      .take(perPage)
      .skip(offset)
      .getMany();
    return mailFollowers;
  }

  async create(
    createMailFollowersDto: CreateMailFollowersDto,
  ): Promise<MailFollowers> {
    const mailFollowers = new MailFollowers(createMailFollowersDto);
    return await this.mailFollowersRepository.save(mailFollowers);
  }

  async findOne(id: number): Promise<MailFollowers> {
    const mailFollowers = await this.mailFollowersRepository
      .createQueryBuilder('mailFollowers')
      .where('mailFollowers.id = :id', { id })
      .getOne();
    if (!mailFollowers) {
      throw new MailFollowersNotFoundException();
    }
    return mailFollowers;
  }

  async updated(
    id: number,
    updatedMailFollowersDto: UpdatedMailFollowersDto,
  ): Promise<MailFollowers> {
    const mailFollowers = await this.mailFollowersRepository
      .createQueryBuilder('mailFollowers')
      .where('mailFollowers.id = :id', { id })
      .getOne();
    if (!mailFollowers) {
      throw new MailFollowersNotFoundException();
    }
    Object.assign(mailFollowers, updatedMailFollowersDto);
    return await this.mailFollowersRepository.save(mailFollowers);
  }

  async deleted(id: number): Promise<void> {
    const mailFollowers = await this.mailFollowersRepository
      .createQueryBuilder('mailFollowers')
      .where('mailFollowers.id = :id', { id })
      .getOne();
    if (!mailFollowers) {
      throw new MailFollowersNotFoundException();
    }
    await this.mailFollowersRepository.softRemove(mailFollowers);
    console.log('mailFollowers Eliminado');
  }
}
