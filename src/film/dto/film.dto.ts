import { OmitType } from '@nestjs/mapped-types';
import { FilmEntitiy } from '../entities/film.entity';
import { GenreEntity } from 'src/genres/entities/genre.entity';

export class CreateFilmDto extends OmitType(FilmEntitiy, ['id']) {
  imageUrl: string;
  title: string;
  synopsis: string;
  rating: number;
  year: string;
  genre: [];
}
export class UpdateFilmDto extends OmitType(FilmEntitiy, ['id']) {
  imageUrl: string;
  title: string;
  synopsis: string;
  rating: number;
  year: string;
  genre: [];
  //   genre: [];
}


