import styled from 'styled-components'

import HistoryComp from './HistoryComp'

const StyledHistoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
            <h1>History:</h1>

                {
                    groupKeys.map( (dateKey) => {
                        return (
                            <HistoryComp date={dateKey} groupedByDate={grouping[dateKey]} />
                        )
                    })
                }
        </>
    )
}

export default Display