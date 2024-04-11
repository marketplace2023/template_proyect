import { Module } from '@nestjs/common';
import { MailFollowersController } from './mail-followers.controller';
import { MailFollowersService } from './mail-followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailFollowers } from './entities/mail-followers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MailFollowers])],
  controllers: [MailFollowersController],
  providers: [MailFollowersService],
})
export class MailFollowersModule {}
