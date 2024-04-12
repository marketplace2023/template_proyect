import { PartialType } from '@nestjs/mapped-types';
import { CreateResUsersLogDto } from './create-res_users_log.dto';

export class UpdateResUsersLogDto extends PartialType(CreateResUsersLogDto) {}
