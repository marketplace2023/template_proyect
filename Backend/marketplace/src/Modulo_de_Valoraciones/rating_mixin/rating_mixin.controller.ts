import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RatingMixinService } from './rating_mixin.service';
import { CreateRatingMixinDto } from './dto/create-rating_mixin.dto';
import { UpdateRatingMixinDto } from './dto/update-rating_mixin.dto';

@Controller('rating-mixin')
export class RatingMixinController {
  constructor(private readonly ratingMixinService: RatingMixinService) {}

  @Post()
  create(@Body() createRatingMixinDto: CreateRatingMixinDto) {
    return this.ratingMixinService.create(createRatingMixinDto);
  }

  @Get()
  findAll() {
    return this.ratingMixinService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingMixinService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRatingMixinDto: UpdateRatingMixinDto,
  ) {
    return this.ratingMixinService.update(+id, updateRatingMixinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingMixinService.remove(+id);
  }
}
//configuracion-moderacion-valoraciones               # (rating.mixin)
//# Configura las opciones de moderación para las valoraciones de productos en el sistema.
