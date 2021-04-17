declare type Task =  {
  id?: number,
  title: string,
  finished: boolean
}

declare type AppState = Array<Task>

declare type AppMsg = { type: 'AddTask'; task: Task } | { type: 'FinishTask', id: number }
