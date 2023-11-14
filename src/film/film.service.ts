import { Injectable } from '@nestjs/common';
import { CreateFilmDto, UpdateFilmDto } from './dto/film.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class FilmService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.film.findMany({
      include: {
        genre: true,
      },
    });
  }

  async findOne(id: string) {
    const findOne = await this.prisma.film.findUnique({
      where: { id },
    });

    if (findOne) {
      await this.prisma.film.update({
        where: { id },
        data: {
          views: findOne.views + 1,
        },
      });
    }
  }

  //genre
  async createFilm(createFilmDto: CreateFilmDto) {
    const existingGenres = await this.prisma.genre.findMany({
      // masukin nama dari model genre ke createfilmdto
      where: { name: { in: createFilmDto.genre } },
    });

    return await this.prisma.film.create({
      data: {
        ...createFilmDto,
        genre: {
          connect: existingGenres.map((genre) => ({ id: genre.id })),
        },
      },
      include: {
        genre: true,
      },
    });
  }
  async findFilmByGenre(name: string){
    const existingGenres = await this.prisma.genre.findMany({
     
    })
  }

  async updateFilm(id: string, updateDto: UpdateFilmDto) {
    const existingGenres = await this.prisma.genre.findMany({
      where: { name: { in: updateDto.genre } },
    });
    return await this.prisma.film.update({
      where: { id },
      data: {
        ...updateDto,
        genre: {
          connect: existingGenres.map((genre) => ({ id: genre.id })),
        },
      },
    });
  }


  async findAllByGenre(genreId: number) {
    return await this.prisma.genre.findMany({
      where: { id: genreId },
      include: {
        film: {
          select: { title: true },
        },
      },
    });
  }

  


  async findAllByYear(year: string) {
    return await this.prisma.film.findMany({
      where: { year },
    });
  }

  async remove(id: string) {
    return await this.prisma.film.delete({
      where: { id }
    });
  }
}
