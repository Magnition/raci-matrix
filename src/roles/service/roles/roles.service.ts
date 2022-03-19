import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleDto } from 'src/roles/dto/role.dto';
import { Repository } from 'typeorm';
import { RoleEntity } from 'src/roles/entity/role.entity';

@Injectable()
export class RolesService {
    //private readonly rolesRepository: Repository<RoleEntity>;
    constructor(
        @InjectRepository(RoleEntity)
        private roleRepository: Repository<RoleEntity>
    ){}

    create(role: RoleDto): Promise<RoleDto> {
        return this.roleRepository.save(role);
    }

    async findAll(): Promise<RoleDto[]> {
        return this.roleRepository.find();
    }
}
