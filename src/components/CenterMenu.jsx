import React from 'react'

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"
  return (
    <div className="menu flex">
        <ul className='flex w-[100%] justify-between'>
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Sobre</li>
            <li className={liStyle}>Pré-forma</li>
            <li className={liStyle}>Agenda de eventos</li>
        </ul>
    </div>
    )
}

export default CenterMenu