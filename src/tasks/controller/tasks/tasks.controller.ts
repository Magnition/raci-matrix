import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskDto } from 'src/tasks/dto/task.dto';
import { TasksService } from 'src/tasks/service/tasks/tasks.service';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Post('/')
    create(@Body() task: TaskDto): Promise<TaskDto> {
        return this.tasksService.create(task);
    }

    @Get('/')
    async findAll(): Promise<TaskDto[]> {
        return this.tasksService.findAll();
    }
}
