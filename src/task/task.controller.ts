/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/')
  async create(@Body() task: TaskDto): Promise<any> {
    return await this.taskService.create(task);
  }
  @Get('/')
  async findAll() {
    return await this.taskService.getAll();
  }

  @Get('/:id')
  async findOne(@Param('id') taskId:string) {
    return await this.taskService.getOne(taskId);
}
}