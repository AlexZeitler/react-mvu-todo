import { Dispatch, createContext } from 'react'

export const defaultAppState: AppState = []

export default {
  state: createContext<AppState>([] as AppState),
  dispatch: createContext<Dispatch<AppMsg>>(() => [])
}
