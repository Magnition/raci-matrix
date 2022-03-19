import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeamDto } from 'src/teams/dto/team.dto';
import { TeamsService } from 'src/teams/service/teams/teams.service';
@Controller('teams')
export class TeamsController {
    constructor(private teamsService: TeamsService){}

    @Post('/')
    create(@Body() team: TeamDto): Promise<TeamDto> {
        return this.teamsService.create(team);
    }

    @Get('/')
    async findAll(): Promise<TeamDto[]> {
        return this.teamsService.findAll();
    }
}
