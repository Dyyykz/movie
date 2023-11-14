import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AdminModule } from './admin/admin.module';
import { FilmModule } from './film/film.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [PrismaModule, AdminModule, FilmModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
