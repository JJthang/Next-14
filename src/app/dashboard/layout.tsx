import React from 'react'

type Props = {
    children : React.ReactNode,
    notification: React.ReactNode,
    revenue: React.ReactNode,
    user: React.ReactNode
}

const layout = ({children,notification,revenue,user}: Props) => {
  return (
    <div className=''>
        <div>{children}</div>
        <div className="flex">
            <div className="flex flex-col">
                {user}
                {revenue}
            </div>
            <div className='flex flex-1'>
                {notification}
            </div>
        </div>
    </div>
  )
}

export default layout