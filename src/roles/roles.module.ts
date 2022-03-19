import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './service/roles/roles.service';
import { RolesController } from './controller/roles/roles.controller';
import { RoleEntity } from './entity/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoleEntity])
  ],
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}
