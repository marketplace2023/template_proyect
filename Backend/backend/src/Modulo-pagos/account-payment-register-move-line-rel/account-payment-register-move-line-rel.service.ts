import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountPaymentRegisterMoveLineRelNotFoundException } from './error/account-payment-register-move-line-rel-not-found.exception';
import { AccountPaymentRegisterMoveLineRel } from './entities/account-payment-register-move-line-rel.entity';
import { UpdatedAccountPaymentRegisterMoveLineRelDto } from './dto/updated-account-payment-register-move-line-rel.dto';
import { CreatedAccountPaymentRegisterMoveLineRelDto } from './dto/created-account-payment-register-move-line-rel.dto';

@Injectable()
export class AccountPaymentRegisterMoveLineRelService {
  constructor(
    @InjectRepository(AccountPaymentRegisterMoveLineRel)
    private readonly accountPaymentRegisterMoveLineRelRepository: Repository<AccountPaymentRegisterMoveLineRel>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<AccountPaymentRegisterMoveLineRel[] | undefined> {
    const offset = (page - 1) * perPage;
    const accountPaymentRegisterMoveLineRel =
      await this.accountPaymentRegisterMoveLineRelRepository
        .createQueryBuilder('accountPaymentRegisterMoveLineRel')
        .take(perPage)
        .skip(offset)
        .getMany();
    return accountPaymentRegisterMoveLineRel;
  }

  async create(
    createAccountPaymentRegisterMoveLineRelDto: CreatedAccountPaymentRegisterMoveLineRelDto,
  ): Promise<AccountPaymentRegisterMoveLineRel> {
    const accountPaymentRegisterMoveLineRel =
      new AccountPaymentRegisterMoveLineRel(
        createAccountPaymentRegisterMoveLineRelDto,
      );
    return await this.accountPaymentRegisterMoveLineRelRepository.save(
      accountPaymentRegisterMoveLineRel,
    );
  }

  async findOne(id: number): Promise<AccountPaymentRegisterMoveLineRel> {
    const accountPaymentRegisterMoveLineRel =
      await this.accountPaymentRegisterMoveLineRelRepository
        .createQueryBuilder('accountPaymentRegisterMoveLineRel')
        .where('accountPaymentRegisterMoveLineRel.id = :id', { id })
        .getOne();
    if (!accountPaymentRegisterMoveLineRel) {
      throw new AccountPaymentRegisterMoveLineRelNotFoundException();
    }
    return accountPaymentRegisterMoveLineRel;
  }

  async updated(
    id: number,
    updatedAccountPaymentRegisterMoveLineRelDto: UpdatedAccountPaymentRegisterMoveLineRelDto,
  ): Promise<AccountPaymentRegisterMoveLineRel> {
    const accountPaymentRegisterMoveLineRel =
      await this.accountPaymentRegisterMoveLineRelRepository
        .createQueryBuilder('accountPaymentRegisterMoveLineRel')
        .where('accountPaymentRegisterMoveLineRel.id = :id', { id })
        .getOne();
    if (!accountPaymentRegisterMoveLineRel) {
      throw new AccountPaymentRegisterMoveLineRelNotFoundException();
    }
    Object.assign(
      accountPaymentRegisterMoveLineRel,
      updatedAccountPaymentRegisterMoveLineRelDto,
    );
    return await this.accountPaymentRegisterMoveLineRelRepository.save(
      accountPaymentRegisterMoveLineRel,
    );
  }

  async deleted(id: number): Promise<void> {
    const accountPaymentRegisterMoveLineRel =
      await this.accountPaymentRegisterMoveLineRelRepository
        .createQueryBuilder('accountPaymentRegisterMoveLineRel')
        .where('accountPaymentRegisterMoveLineRel.id = :id', { id })
        .getOne();
    if (!accountPaymentRegisterMoveLineRel) {
      throw new AccountPaymentRegisterMoveLineRelNotFoundException();
    }
    await this.accountPaymentRegisterMoveLineRelRepository.softRemove(
      accountPaymentRegisterMoveLineRel,
    );
    console.log('account Payment Group Icon Eliminado');
  }
}
