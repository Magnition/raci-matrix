import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsService } from './service/teams/teams.service';
import { TeamsController } from './controller/teams/teams.controller';
import { TeamEntity } from './entity/team.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity])
  ],
  providers: [TeamsService],
  controllers: [TeamsController]
})
export class TeamsModule {}
