import React, { useState } from 'react'
import JeuDe from './JeuDe'

function App() {
    const [cache, setCache] = useState('')

    const handleCache = (event) => {
        const value = event.target.value
        if (value === '' || (value >= 1 && value <= 6)) {
            setCache(value)
        }
    }

    const resetCache = () => {
        setCache('')
    }

    return (
        <>
            <JeuDe cache={cache} handleCache={handleCache} resetCache={resetCache}></JeuDe>
        </>
    )
}

export default App
