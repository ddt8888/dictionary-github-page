import { useState, useEffect } from 'react'

function useRandomNumber(minNun, maxNun) {
    const [number, setNumber] = useState(0)
    const pickRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const showRandomNumber = () => {
        setNumber(pickRandomNumber(minNun, maxNun))
    }

    useEffect(() => {
        const countID = setInterval(showRandomNumber, 1000) // 타이머 설정 
        return () => {
            clearInterval(countID) // 타이머 해제 
        }
    })

    return number
}

export default useRandomNumber