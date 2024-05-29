import { Controller,Get,Post,Body,Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateCronDto } from './dto/task.dto'
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    }

    @Post()
    addCronJob(@Body() cronDto:CreateCronDto){
        const {time,id,emails,subject,text,html,user} = cronDto
        return this.tasksService.createTask(time,id,emails,subject,text,html,user)
    }

    @Delete(':id')
    deleteCronJob(@Param('id') id:string){
        return this.tasksService.deleteTask(id)
    }
    
}
