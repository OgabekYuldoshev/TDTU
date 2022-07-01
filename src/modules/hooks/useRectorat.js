// import get from "lodash/get";
import { useQuery } from "react-query"
import * as Api from "../api"
import * as Mappers from "../mapper"
import { get } from "lodash"

const useList = () => {
    const { data, ...args } = useQuery(
        ["RECTORAT", "list"],
        async () => {
            const { data } = await Api.Rectoret()
            const items = get(data, 'data') || []

            return { items: items.map(item => Mappers.Rectorat(item)) }
        },
        { keepPreviousData: true, retry: false }
    )

    return { ...data, ...args }
}

export default useList
