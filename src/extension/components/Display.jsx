import Moment from 'moment'
import styled from 'styled-components'

import HistoryComp from './HistoryComp'

const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;

    row-gap: .3rem;
    margin: 0 .5rem;
    padding: 1rem 20%;
    border-radius: 1rem;
    //background-color: #DDE6ED;
    background-color: #1b2735;
`

const Display = ({ history }) => {
    return (
        <>
            <h1>History Items:</h1>
            <StyledUL>
                {history.map( (HistoryItem) => {
                    let unixTime = HistoryItem.lastVisitTime
                    //unixTime = Moment(unixTime).format("M/D/YYYY h:mm:ss a") [For Reference] To get the date alongside it
                    unixTime = Moment(unixTime).format("hh:mm A")

                    return (
                        <HistoryComp title={HistoryItem.title} time={unixTime} url={HistoryItem.url} />
                    )   
                   
                })}
            </StyledUL>
        </>
    )
}

export default Display