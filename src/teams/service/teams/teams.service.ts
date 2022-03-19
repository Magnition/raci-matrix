import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamDto } from 'src/teams/dto/team.dto';
import { Repository } from 'typeorm';
import { TeamEntity } from 'src/teams/entity/team.entity';

@Injectable()
export class TeamsService {
    //private readonly teamsRepository: Repository<TeamEntity>;
    constructor(
        @InjectRepository(TeamEntity)
        private teamRepository: Repository<TeamDto>
    ){}

    create(team: TeamDto): Promise<TeamDto> {
        return this.teamRepository.save(team);
    }
    
    async findAll(): Promise<TeamDto[]> {
        return this.teamRepository.find();
    }
}
