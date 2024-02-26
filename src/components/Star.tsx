import React from 'react'


const Star = (props : any) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#474F7A"
      d="M2.856 11.501a.913.913 0 0 1-.9-1.067l.519-3.027-2.2-2.144a.913.913 0 0 1 .506-1.557l3.04-.442L5.18.51a.914.914 0 0 1 1.638 0l1.359 2.754 3.04.442a.913.913 0 0 1 .506 1.557l-2.2 2.144.519 3.027a.913.913 0 0 1-1.325.962L5.998 9.967 3.28 11.396a.916.916 0 0 1-.424.105Z"
      data-name="Path 5269"
    />
  </svg>
  )
}

export default Star