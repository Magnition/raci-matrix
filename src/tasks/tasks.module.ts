import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './service/tasks/tasks.service';
import { TasksController } from './controller/tasks/tasks.controller';
import { TaskEntity } from './entity/task.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity])
  ],
  providers: [TasksService],
  controllers: [TasksController]
})
export class TasksModule {}
