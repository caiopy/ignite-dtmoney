import Modal from 'react-modal'
import { darkTheme, GlobalStyle, lightTheme } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'
import { useState } from 'react'
import usePersistedState from './hooks/usePersistedState'
import { TransactionsProvider } from './hooks/useTransactions'
import {ThemeProvider} from 'styled-components'


Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const [theme, setTheme] = usePersistedState('theme','light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  //o header precisa receber a prop onOpenNewTransactionModal(que é atribuida a funçao de abrir o modal, definida acima): o componente filho(header) esta alterando o componente pai(useState).
  return (
    <ThemeProvider theme={theme==='light'? lightTheme : darkTheme}>
    <TransactionsProvider >
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} themeToggler={themeToggler} theme={theme}/>
  
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />

    </TransactionsProvider>
    </ThemeProvider>
  )
}
