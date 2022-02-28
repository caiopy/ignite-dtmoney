import {useEffect, useState} from 'react'

function usePersistedState(key: string, initialState: any){
  const [state, setState] = useState(() => {
    const storageValueTheme = localStorage.getItem(key)

    if (storageValueTheme){
      return (storageValueTheme)
    } else {
      return initialState
    }
  })

  useEffect(()=> {
    localStorage.setItem(key,state)
  },[key,state])

  return [state,setState]
}

export default usePersistedState