import React from 'react'

const CardStudent = () => {
    return (
        <div className='relative group w-full hover:bg-white p-2 h-fit rounded hover:shadow-lg duration-300'>
            <img width="100%" className='h-[300px] transform group-hover:scale-95 duration-300 object-fit object-cover rounded-lg' src="https://images.unsplash.com/photo-1654684128827-743431765638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=954&q=80" alt="student" />
            <div className='w-full mt-2'>
                <h2 className='text-center text-xl font-bold mb-0'>Ogabek Yuldoshev</h2>
                <p className='text-center text-sm mb-0'>O’zbekiston Respublikasi birinchi prezidenti</p>
            </div>
        </div>
    )
}

export default CardStudent