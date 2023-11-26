import styled from 'styled-components'

import HistoryComp from './HistoryComp'

const StyledHistoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    background-color: #39485b;

    padding: 1rem 0rem;
`

const Display = ({ groupKeys, grouping }) => {
    
    const temp = groupKeys.map( (dateKey) => {
        return grouping[dateKey][0].title
    })

    console.log(grouping[groupKeys[0]])
    console.log('temp arr', temp)
    console.log('length temp', temp.length)

    return (
        <>
            <StyledHistoryList>
                {
                    groupKeys.map( (dateKey) => {
                        return (
                            <HistoryComp date={dateKey} groupedByDate={grouping[dateKey]} />
                        )
                    })
                }
            </StyledHistoryList>
        </>
    )
}

export default Display