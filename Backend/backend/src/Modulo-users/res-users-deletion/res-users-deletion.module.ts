import { Module } from '@nestjs/common';
import { ResUsersDeletionController } from './res-users-deletion.controller';
import { ResUsersDeletionService } from './res-users-deletion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResUsersDeletion } from './entities/res-users-deletion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResUsersDeletion])],
  controllers: [ResUsersDeletionController],
  providers: [ResUsersDeletionService],
})
export class ResUsersDeletionModule {}
