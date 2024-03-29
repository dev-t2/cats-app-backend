import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { CatsModule } from 'src/cats/cats.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentsRepository } from './comments.repository';

@Module({
  imports: [PrismaModule, CatsModule],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsRepository],
})
export class CommentsModule {}
