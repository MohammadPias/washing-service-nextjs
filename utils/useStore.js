import { useContext } from "react"
import { Store } from "./Store"

const useContextApi = () => {
    return useContext(Store)
}

export default useContextApi;