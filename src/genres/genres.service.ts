import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/genre.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private readonly prisma:PrismaService){}
  async createGenre(createGenreDto: CreateGenreDto) {
    return await this.prisma.genre.create({
      data: createGenreDto
    })
  }

  async findAll() {
    return await this.prisma.genre.findMany();
  }

  // async findOne(id: string) {
  //   return await this.prisma.genre.findUnique({
  //     where: {id}
  //   });
  // }

  //filter //post
  async findFilmByGenre(genreId: number[]){
    return await this.prisma.film.findMany({

      
    })
  }

  async findManyGenre(id:number){
    const getGenre =  await this.prisma.genre.findFirst({
      where: {id}
    })
  }

  async remove(id: number) {
    return await this.prisma.genre.delete({
      where: { id }
    });
  }
}
