// import get from "lodash/get";
import { useQuery } from "react-query"
import * as Api from "../api"
import * as Mappers from "../mapper"
import { get } from "lodash"

const useList = () => {
    const { data, ...args } = useQuery(
        ["GRANDUATES", "list"],
        async () => {
            const { data } = await Api.Graduats()
            const items = get(data, 'data') || []

            return { items: items.map(item => Mappers.Granduates(item)) }
        },
        { keepPreviousData: true, retry: false }
    )

    return { ...data, ...args }
}

export default useList
