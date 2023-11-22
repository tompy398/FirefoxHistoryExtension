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
    
    row-gap: .3rem;
    //background-color: #DDE6ED;
    background-color: #1b2735;
`
const HistoryComp = ({ date, groupedByDate }) => {
    // title, time, url
    console.log(date + ':', groupedByDate)
    return (
        <>
            <h1>{date}</h1>
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