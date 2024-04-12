import { Injectable } from '@nestjs/common';
import { CreatePaymentAcquirerDto } from './dto/create-payment_acquirer.dto';
import { UpdatePaymentAcquirerDto } from './dto/update-payment_acquirer.dto';

@Injectable()
export class PaymentAcquirerService {
  create(createPaymentAcquirerDto: CreatePaymentAcquirerDto) {
    return 'This action adds a new paymentAcquirer';
  }

  findAll() {
    return `This action returns all paymentAcquirer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentAcquirer`;
  }

  update(id: number, updatePaymentAcquirerDto: UpdatePaymentAcquirerDto) {
    return `This action updates a #${id} paymentAcquirer`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentAcquirer`;
  }
}
