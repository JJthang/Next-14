import Link from 'next/link'
import React from 'react'

type Props = {}

const F1Page = (props: Props) => {
  return (
    <div>F1Page <Link href={'/f1/f2'}>F2</Link></div>
  )
}

export default F1Page