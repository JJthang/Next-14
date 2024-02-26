import Link from 'next/link'
import React from 'react'

type Props = {}

const ArchivedNotification = (props: Props) => {
  return (
    <div className='p-[100px] flex justify-center items-center m-3 border border-[#474F7A]'>
        NotificationDefault <Link href={'/dashboard/settings'}>SettingPage</Link>
        </div>
  )
}

export default ArchivedNotification