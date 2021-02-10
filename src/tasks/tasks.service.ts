import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
    private tasks:Task[] = [];
    getAllTasks():Task[]{
        return this.tasks;
    }
    
    getTaskById(id:string):Task{
        const found = this.tasks.find(task=>  task.id === id);
        if(!found){
            throw new NotFoundException(`task with ${id} is not found`);
        }
        return found;
    }

    deleteById(id:string):void{
        const found =  this.getTaskById(id);
        
        if(!found){
            throw new NotFoundException(`task with ${id} is not found`);
        }
        this.tasks =  this.tasks.filter(task=>task.id !== id);
    }

    createTask(createTask:CreateTaskDto):Task{
        console.log("uuidv1()", uuid());
        const {title, description} = createTask;
        const task:Task = {
            id:uuid(),
            title,
            description,
            status:TaskStatus.OPEN,
        }
        this.tasks.push(task);
        return task;
    }
    //5432
}
