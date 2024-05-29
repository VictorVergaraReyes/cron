import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import {CronJob} from 'cron'
import { Cron,CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  constructor(private schedulerRegistry:SchedulerRegistry) {}
  private tasks: Task[] = [
    {
      time:"",
      id: "1",
      date: "20/05/2024",
      sendBy: "Admin",
      template: "<div>center this div!!!</div>",
      subject: "vvergara@ahorra.io",
      status: TaskStatus.IN_PROGRESS,
    },
  ];


  getAllTasks() {
    return this.tasks;
  }

  createTask(time:any,id:string,emails:string,subject:string,text:string,html:string,user:string){
    let strArr = time.split(',')
   
   const numberArray = [];
    for (const element of strArr) {
      numberArray.push(parseInt(element));
    }
   

   let date = new Date(numberArray[0],numberArray[1],numberArray[2],numberArray[3],numberArray[4])
   console.log("fecha",date,date.getHours());
   const job = new CronJob(date,()=>{
      console.log("cron job registrado a ",time)
   },
   'America/Mexico_City') 
   let currentDate = new Date()
   console.log("currentDate",currentDate, "hora",currentDate.getHours());
//   const job = new CronJob(`${time}`,()=>{
//     console.log("cron job registrado a ",time)
//  }) 
   this.schedulerRegistry.addCronJob(id,job);
   job.start()
     const cron = {
      time,
      id,
      date: time,
      sendBy: user,
      template: html,
      subject: emails,
      status: TaskStatus.IN_PROGRESS,
    };
   this.tasks.push(cron);
     return cron;
  }

  updateTask() {}

  deleteTask(id:string) {
    //lista las tareas SIN la tarea del id
    this.tasks = this.tasks.filter(task => task.id != id)
    this.schedulerRegistry.deleteCronJob(id)
    return this.tasks
  }
}
