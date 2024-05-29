export class Task{
    time:string
    id:string
    date:string         //timestamp en db
    sendBy:string
    template:string
    subject:string
    status:TaskStatus
}

// Status de las request
export enum TaskStatus{
    DONE = "DONE",
    IN_PROGRESS = "IN_PROGRESS",
    FAILED = "FAILED"
}