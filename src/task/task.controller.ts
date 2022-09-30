/* eslint-disable prettier/prettier */
import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { upadateTaskDto } from './dto/updatetask.dto';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Post('/')
  async create(@Body() task: TaskDto): Promise<any> {
    try{
    return await this.taskService.create(task);
  }
    catch{
    throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
  }

  }
  @Put('/:id')
  async update(@Param('id')id:string, @Body() params: upadateTaskDto): Promise<any> {
  try{  return await this.taskService.update(id, params);
  }catch{
    throw new HttpException('forbidden',HttpStatus.FORBIDDEN)
  }
}
  @Get('/')
  async findAll() {
       return await this.taskService.getAll();
  }

  @Get('/:id')
  async findOne(@Param('id') taskId:string) {
    try{
    return await this.taskService.getOne(taskId);
}
catch{
  throw new HttpException('Invalid ID', HttpStatus.FORBIDDEN);
}
}}