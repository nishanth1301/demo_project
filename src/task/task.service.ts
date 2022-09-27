import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
  create(params: TaskDto): any {
    return {
      sucess: true,
      data: params,
    };
  }
}
