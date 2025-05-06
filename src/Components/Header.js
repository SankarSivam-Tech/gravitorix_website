import React from 'react'

const Header = ({text1, text2}) => {
    return (
        <>
            <div className="flex flex-col leading-50 mt-8">
                <p className="text-3xl">{text1}</p>
                <p className="text-3xl font-bold mt-4">{text2}</p>
            </div>
        </>
    )
}

export default Header