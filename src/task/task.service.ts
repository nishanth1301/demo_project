import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { upadateTaskDto } from './dto/updatetask.dto';

@Injectable()
export class TaskService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}
  async create(params: TaskDto): Promise<any> {
    return await this.taskModel.create(params);
  }
  async update(id: string, params: upadateTaskDto): Promise<any> {
    const task = await this.taskModel.findByIdAndUpdate(id, params);
    return { sucess: true, task: await this.taskModel.findById(id) };
  }
  async getAll() {
    return await this.taskModel.find();
  }
  async getOne(taskId) {
    return await this.taskModel.findById(taskId);
  }
}
