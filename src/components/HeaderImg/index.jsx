import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const HeaderImg = ({ text, paths = [] }) => {
    const { t } = useTranslation()

    return (
        <div className=''>
            <div
                style={{
                    background: "url(https://images.unsplash.com/photo-1655940646105-3f1afd0ecf72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
                className={"bg-contain bg-center bg-no-repeat md:h-[600px] h-[200px] min-h-[200px] flex items-center justify-center relative"}>
                <div className='text-white absolute lg:top-16 lg:right-36 md:top-16 md:right-16 top-4 right-8'>
                    <div className='flex items-end gap-1font-semibold'>
                        <Link className='text-white' to="/">
                            {t('home')}
                        </Link>
                        {
                            paths?.map(path => (
                                <>
                                    {"/"}{
                                        path?.path ? <Link className='text-white mb-0 pb-0' to={path?.path}>{t(path?.title)}</Link> : <span className='text-white mb-0 pb-0'>{t(path?.title)}</span>
                                    }
                                </>
                            ))
                        }
                    </div>
                </div>
                <div
                    className="sm:grid-cols-2 grid-cols-1 gap-5 flex flex-col justify-center items-center text-center">
                    <span className={"font-extrabold md:text-3xl sm:tex-xl text-lg text-white uppercase"}>{t(`${text}`)}</span>
                    <svg className='m-auto mx-12 px-12 w-full h-4' viewBox="0 0 1137 33" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2.5H527L567.75 30.5L608.5 2.5H1134.5" stroke="white" stroke-width="4"
                            stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default HeaderImg