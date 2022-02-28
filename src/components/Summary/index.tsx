import { Container } from "./styles";
import incomesImg from "../../assets/income.svg"
import outcomesImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";

//forma antiga de utilizar o contexto
//<TransactionsContext.Consume>
//  {(data) => {console.log(data) return <p>p</p>}}
//</TransactionsContext.Consume>

export function Summary() {
    const { transactions } = useTransactions()

    // const totalDeposits = transactions.reduce((acc, transaction) =>{
    //     if(transaction.type === 'deposit'){
    //         return acc += transaction.amount;
    //     }

    //     return acc
    // })

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount
        } else {
            acc.withdraws -= transaction.amount
            acc.total -= transaction.amount
        }
        return acc

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <div>
                    <img src={incomesImg} alt="Entradas" />
                    <strong>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.deposits)}
                    </strong>
                    </div>
                </header>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <div>
                    <img src={outcomesImg} alt="Saídas" />
                    <strong>
                        - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.withdraws)}
                    </strong>
                    </div>
                </header>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <div>
                    <img src={totalImg} alt="Total" />
                    <strong>
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(summary.total)}
                    </strong>
                    </div>
                </header>
            </div>
        </Container>

    )
}