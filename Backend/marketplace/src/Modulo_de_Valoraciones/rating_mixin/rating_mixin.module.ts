import { Module } from '@nestjs/common';
import { RatingMixinService } from './rating_mixin.service';
import { RatingMixinController } from './rating_mixin.controller';

@Module({
  controllers: [RatingMixinController],
  providers: [RatingMixinService],
})
export class RatingMixinModule {}
