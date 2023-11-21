import browser from 'webextension-polyfill'
import { useState, useEffect } from 'react'

import Moment from 'moment'
import Display from './components/Display'

const App = () => {
    
    const [history, setHistory] = useState([])

    useEffect( async () => {
        const response1 = await browser.history
            .search({
                text: "",
                startTime: 0,
                maxResults: 1000, // Number.MAX_SAFE_INTEGER
            })
        setHistory(response1)
        console.log(response1)

        const remapping = response1.map( (HistoryItem) => {
            return Moment(HistoryItem.lastVisitTime).format("MMDDYYYY")
        })
        console.log(remapping)
        console.log('Favicon Errors:')  
    }, [])
    

    return (
        <div>
            <Display history={history} />
        </div>
    )
}

export default App