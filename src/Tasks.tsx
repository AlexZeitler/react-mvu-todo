import React, { Dispatch, useContext, useState } from 'react'

import AppContext from './AppContext'

const AddTask = (props: { dispatch: Dispatch<AppMsg> }) => {
  const [title, setTitle] = useState('')
  const [newTask, setNewTask] = useState({ title, finished: false })
  return (
    <>
      <input
        type="text"
        className="rounded-md"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <button
        disabled={title.length === 0}
        className="bg-gray-900 text-gray-200 p-2 ml-1 rounded-md disabled:opacity-30 border-gray-900 border-2"
        onClick={() => {
          props.dispatch({
            type: 'AddTask',
            task: { ...newTask, title }
          })

          setNewTask({ title: '', finished: false })
          setTitle('')
        }}
      >
        Add Task
      </button>
    </>
  )
}
const FinishTask = (props: { dispatch: Dispatch<AppMsg>; id: number }) => (
  <button
    className="bg-green-500 text-green-100 p-2 rounded-sm text-xs"
    onClick={() => props.dispatch({ type: 'FinishTask', id: props.id })}
  >
    Done
  </button>
)

export default function () {
  const state = useContext(AppContext.state) as AppState

  const dispatch = useContext(AppContext.dispatch)

  console.log('state', state)

  return (
    <div>
      <ul className="text-gray-500">
        {state.map((task: Task) => {
          return (
            <li key={task.id} className="p-1">
              <span className="p-2">{task.title}</span>
              <FinishTask dispatch={dispatch} id={task.id!} />
            </li>
          )
        })}
      </ul>

      <AddTask dispatch={dispatch} />
    </div>
  )
}
