import React from 'react'

const UI = () => {
  return (
    <main
        className='pointer-events-none fixed z-10 inset-0 p-10'
    >
        <div className='mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <a 
                    className='pointer-events-auto'
                    href=""
                >
                    <img className='w-20' src='/images/gudetama.png' />
                </a>
            </div>
        </div>
    </main>
  )
}

export default UI