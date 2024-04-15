import { PartialType } from '@nestjs/mapped-types';
import { CreateMailFollowerDto } from './create-mail_follower.dto';

export class UpdateMailFollowerDto extends PartialType(CreateMailFollowerDto) {}
