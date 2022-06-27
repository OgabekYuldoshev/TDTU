
const HistoryCard = () => {
    return (
        <div>
            <div className="w-full rounded-lg shadow-lg bg-white h-20 flex items-center px-3">
                <img
                    className={"rounded-full w-24 mx-4 object-cover object-center"}
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="graduates" />
                <div className="flex flex-col py-2">
                    <span className={"md:text-lg text-base font-medium"}>Islom karimov Abdug’aniyevich</span>
                    <span className={"lg:block hidden text-base font-normal"}>O’zbekiston Respublikasi birinchi prezidenti</span>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard