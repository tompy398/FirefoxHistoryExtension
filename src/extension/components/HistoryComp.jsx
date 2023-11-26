import styled from 'styled-components'

import HistoryItem from './HistoryItem'

const StyledHistoryComp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    background-color: #1b2735;
    margin: 10px;

`

const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    row-gap: .2rem;
    //background-color: #DDE6ED;
    background-color: #1b2735;
    min-width: 55%;
    max-width: 55%;
    min-height: 30%;
    flex: 1;

    padding: .75rem 0 1.25rem 0;
    margin: 0 0 .15rem 0;
    border-radius: 0 0 20px 20px;
    //box-shadow: 0 10px 10px -6px lightblue;
    box-shadow: 0 5px 15px rgb(0 0 0 / 0.2);
`
const StyledH1 = styled.h1`
    font-weight: normal;
    color: #e1e9f5;
    font-family: Monospace;
    font-size: 1.25rem;

    text-align: center;

    min-width: 55%;
    background-color: #1b2735;
    padding: 5px 0px;

    margin: 10px 0 0 0;

    border-radius: 20px 20px 0 0;
    border-bottom: 2px solid rgba(77, 95, 117, 0.3);
`

const HistoryComp = ({ date, groupedByDate }) => {
    // title, time, url
    console.log(date + ':', groupedByDate)
    return (
        <>
            <StyledH1>{date}</StyledH1>
            <StyledUL>
                {   
                    groupedByDate.map( (Item) => {
                        return <HistoryItem title={Item.title} time={Item.time} url={Item.url} />
                    })
                }
            </StyledUL>
        </>
    )
    
}

export default HistoryComp