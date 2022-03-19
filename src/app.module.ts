import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TeamsModule } from './teams/teams.module';
import { RolesModule } from './roles/roles.module';
//import ormconfig from './ormconfig';

@Module({
  imports: [
    //TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres_user',
      password: 'postgres_password',
      database: 'raci',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TasksModule,
    TeamsModule,
    RolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
