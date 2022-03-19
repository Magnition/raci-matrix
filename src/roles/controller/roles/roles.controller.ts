import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleDto } from 'src/roles/dto/role.dto';
import { RolesService } from 'src/roles/service/roles/roles.service';

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService){}

    @Post('/')
    create(@Body() role: RoleDto): Promise<RoleDto> {
        return this.rolesService.create(role);
    }

    @Get('/')
    async findAll(): Promise<RoleDto[]> {
        return this.rolesService.findAll();
    }
}
