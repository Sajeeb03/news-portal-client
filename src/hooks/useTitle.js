import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} news-portal`;
    }, [title])
}

export default useTitle;