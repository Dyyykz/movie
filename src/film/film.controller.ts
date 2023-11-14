import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto, UpdateFilmDto } from './dto/film.dto';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post('create')
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.createFilm(createFilmDto);
  }

  @Get('all')
  async findAll() {
    return await this.filmService.findAll();
  }

  @Get('find/genre/:genreId')
  async findAllByGenre(@Param('genreId') genreId: number) {
    return await this.filmService.findAllByGenre(genreId);
  }

  @Get('find/year/:year')
  async findAllByYear(@Param('year') year: string) {
    return await this.filmService.findAllByYear(year);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.updateFilm(id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(id);
  }
}
