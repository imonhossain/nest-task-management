import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '../../dist/tasks/task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
  
  @Get('/:id')
  getTaskById(@Param('id') id:string):Task{
    console.log("id", id);
    return this.tasksService.getTaskById(id);
  } 

  @Post()
  createTask(
    @Body() createTaskDto:CreateTaskDto
    
  ):Task {

    return this.tasksService.createTask(createTaskDto);
  }
}
