import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post('create')
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genresService.createGenre(createGenreDto);
  }

  @Get()
  findAll() {
    return this.genresService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.genresService.findOne(+id);
  // }

  @Delete(':id')
  remove(@Param(':id') id: number) {
    return this.genresService.remove(id);
  }
}
