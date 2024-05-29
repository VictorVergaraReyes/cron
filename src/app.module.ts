import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from '@nestjs/schedule';


@Module({
  imports: [TasksModule,ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
