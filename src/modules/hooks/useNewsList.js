// import get from "lodash/get";
import { useQuery } from "react-query"
import * as Api from "../api"
import * as Mappers from "../mapper"
import { get } from "lodash"

const useList = () => {
    const { data, ...args } = useQuery(
        ["NEWS", "list"],
        async () => {
            const { data } = await Api.NewsList()
            const items = get(data, 'data.data') || []
            const meta = get(data, 'data') || {}

            console.log(Mappers.Meta(meta))

            return { items: items.map(item => Mappers.News(item)), meta: Mappers.Meta(meta) }
        },
        { keepPreviousData: true, retry: false }
    )

    return { ...data, ...args }
}

export default useList
