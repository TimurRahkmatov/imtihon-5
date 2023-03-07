import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetPostdata = (url) => {
    const [data, setData] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [isError, setisError] = useState(false)
    const [error, seterror] = useState(null)
    useEffect(() => {
        (async function () {
            try {
                setLoading(true)
                const { data } = await axios.post(url)
                setData(data)
            } catch (error) {
                setisError(true);
                seterror(error)
                console.log(error);
            } finally {
                setLoading(false)
            }
        })();
    }, [url])
    return { data, Loading, isError, error }
}

export default useGetPostdata
