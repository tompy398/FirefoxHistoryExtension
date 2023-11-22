import browser from 'webextension-polyfill'
import { useState, useEffect } from 'react'

import Moment from 'moment'
import Display from './components/Display'

const App = () => {

    const [grouping, setGrouping] = useState({})
    const [groupKeys, setGroupKeys] = useState([])

    useEffect( async () => {
        const originalHistory = await browser.history
            .search({
                text: "",
                startTime: 0,
                maxResults: 1000, // Number.MAX_SAFE_INTEGER
            })

        console.log(originalHistory)
        const modifiedHistory = originalHistory.map( (HistoryItem) => { // Adds date and time properties
            return { 
                ...HistoryItem, 
                date: Moment(HistoryItem.lastVisitTime).format("MMMM DD, YYYY"),
                time: Moment(HistoryItem.lastVisitTime).format("hh:mm A")
            }
        })
        console.log(modifiedHistory)
        
        const grouped = Object.groupBy(modifiedHistory, (HistoryItem) => HistoryItem.date)
        const keysGroupped = Object.keys(grouped)
        
        console.log('grouped:', grouped)
        console.log('keys for groups:', keysGroupped)

        setGrouping(grouped)
        setGroupKeys(keysGroupped)
    
        console.log('Favicon Errors:')  
    }, [])
   
    return (
        <div>
            <Display groupKeys={groupKeys} grouping={grouping} />
        </div>
    )
    
}

export default App