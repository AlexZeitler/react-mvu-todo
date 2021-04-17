import React, { useReducer } from 'react'
import AppContext from './AppContext'
import Tasks from './Tasks'
import { useLocalStorage } from './LocalStorage'
import Update from './Update'

function App() {
  const [persistedState, setPersistedState] = useLocalStorage('State', [] as AppState)
  const updateAndPersistState = (state: AppState, msg: AppMsg) => {
    const updatedState = Update(state, msg)
    setPersistedState(updatedState)
    return updatedState
  }

  const [state, dispatch] = useReducer(updateAndPersistState, persistedState)

  return (
    <AppContext.dispatch.Provider value={dispatch}>
      <AppContext.state.Provider value={state}>
        <div className="p-4">
          <h1 className="text-xl">Tasks</h1>
          <Tasks />
        </div>
      </AppContext.state.Provider>
    </AppContext.dispatch.Provider>
  )
}

export default App
