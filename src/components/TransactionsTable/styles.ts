import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            font-weight: 400;

            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;

        }

        tbody{
            border-radius: 0.5rem;
            > tr{
            border-radius: 0.5rem;
            background-color: rgba(0,0,0,0.1);
            }
        }
        
        td{
            padding: 1rem 2rem;
            border: 0;

            background: transparent;
            color: var(--text-body);
            

            

            

            &.deposit{
                color: var(--green);
            }
            &.withdraw{
                color: var(--red);
            }
        }
    }

    @media(max-width:500px){
        overflow-x: scroll;
    }
`