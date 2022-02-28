import { Container, Content } from './styles'
import {MdOutlineLightMode,MdOutlineNightlight} from 'react-icons/md'

import logoImg from '../../assets/logo.svg'




interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    themeToggler: () => void;
    theme: string;
}

export function Header({ onOpenNewTransactionModal,themeToggler,theme }: HeaderProps) {


    return (
        <Container>
            <Content>

                <img src={logoImg} alt="dtmoney" />
                {theme ==='light'?(
                    <button
                    type="button"
                    onClick={themeToggler}
                    >
                    <MdOutlineNightlight/>
                    </button>
                ): (<button
                    type="button"
                    onClick={themeToggler}
                    >
                        <MdOutlineLightMode/>
                    </button>)}
                <button 
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    Nova transação
                </button>
                

            </Content>
        </Container>
    )
}