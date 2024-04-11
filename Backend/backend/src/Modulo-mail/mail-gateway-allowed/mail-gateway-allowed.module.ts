import { Module } from '@nestjs/common';
import { MailGatewayAllowedService } from './mail-gateway-allowed.service';
import { MailGatewayAllowedController } from './mail-gateway-allowed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailGatewayAllowed } from './entities/mail-gateway-allowed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailGatewayAllowed])],
  controllers: [MailGatewayAllowedController],
  providers: [MailGatewayAllowedService],
})
export class MailGatewayAllowedModule {}
