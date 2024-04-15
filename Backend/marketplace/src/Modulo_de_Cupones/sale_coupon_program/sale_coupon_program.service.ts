import { Injectable } from '@nestjs/common';
import { CreateSaleCouponProgramDto } from './dto/create-sale_coupon_program.dto';
import { UpdateSaleCouponProgramDto } from './dto/update-sale_coupon_program.dto';

@Injectable()
export class SaleCouponProgramService {
  create(createSaleCouponProgramDto: CreateSaleCouponProgramDto) {
    return 'This action adds a new saleCouponProgram';
  }

  findAll() {
    return `This action returns all saleCouponProgram`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponProgram`;
  }

  update(id: number, updateSaleCouponProgramDto: UpdateSaleCouponProgramDto) {
    return `This action updates a #${id} saleCouponProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponProgram`;
  }
}
