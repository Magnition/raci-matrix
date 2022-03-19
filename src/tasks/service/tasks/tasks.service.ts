import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from 'src/tasks/dto/task.dto';
import { Repository } from 'typeorm';
import { TaskEntity } from 'src/tasks/entity/task.entity';

@Injectable()
export class TasksService {
    //private readonly tasksRepository: Repository<TaskEntity>;
    constructor(
        @InjectRepository(TaskEntity)
       private tasksRepository: Repository<TaskEntity>
    ){}

    create(task: TaskDto): Promise<TaskEntity> {
        return this.tasksRepository.save(task);
    }

    async findAll(): Promise<TaskDto[]> {
        return this.tasksRepository.find();
    }
}
