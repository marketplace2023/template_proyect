import { PartialType } from '@nestjs/mapped-types';
import { CreateMailNotificationDto } from './create-mail_notification.dto';

export class UpdateMailNotificationDto extends PartialType(CreateMailNotificationDto) {}
