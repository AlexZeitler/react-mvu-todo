export default function (state: AppState, msg: AppMsg): AppState {
  switch (msg.type) {
    case 'AddTask':
      const task = { ...msg.task, id: state.length + 1 }
      return [...state, task]
    case 'FinishTask':
      return state.filter((task) => task.id !== msg.id)
  }
}
