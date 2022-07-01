// import get from "lodash/get";
import { useQuery } from "react-query"
import * as Api from "../api"
import * as Mappers from "../mapper"
import { get } from "lodash"

const useList = () => {
    const { data, ...args } = useQuery(
        ["NETWORKS", "list"],
        async () => {
            const { data } = await Api.Networks()
            const item = get(data, 'data[0]') || []

            return { items: Mappers.Networks(item) }
        },
        { keepPreviousData: true, retry: false }
    )

    return { ...data, ...args }
}

export default useList
