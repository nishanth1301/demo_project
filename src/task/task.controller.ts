/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { upadateTaskDto } from './dto/updatetask.dto';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/')
  async create(@Body() task: TaskDto): Promise<any> {
    return await this.taskService.create(task);
  }
  @Put('/:id')
  async update(@Param('id')id:string, @Body() params: upadateTaskDto): Promise<any> {
    return await this.taskService.update(id, params);
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