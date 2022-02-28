import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 2rem;
    margin-top: -8rem;

    > div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        max-width:100%;


        header{
            display: flex;
            justify-content: space-between;
            > div{
            background: transparent;
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            }
        }

        
    

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }

    @media (max-width: 915px){
        grid-template-columns: 1fr;
        > div {
            flex-direction: column;
            >header{
                flex-direction: column;
                > div{
                    > strong {
                        font-size:1.5rem;
                    }
                }
            }
        }
            
              
        }
    }
`