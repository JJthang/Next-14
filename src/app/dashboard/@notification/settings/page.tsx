import Link from 'next/link'
import React from 'react'

type Props = {}

const SettingPage = (props: Props) => {
  return (
    <div className='p-[100px] flex justify-center items-center m-3 border border-[#474F7A]'>SettingPage <Link href={'/dashboard'}>DefaultDashboardPage</Link></div>
  )
}

export default SettingPage