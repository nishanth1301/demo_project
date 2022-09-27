import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/')
  create(@Body() task: TaskDto): any {
    return this.taskService.create(task);
  }
}
