import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';

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
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto:CreateTaskDto):Task {

    return this.tasksService.createTask(createTaskDto);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id:string):void{
    this.tasksService.deleteById(id);
  }
}
