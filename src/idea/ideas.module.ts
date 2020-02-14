import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaEntity } from './idea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity])],
  providers: [],
})
export class IdeasModule {}
