'use client'
 
type Props ={
    error : Error,
    reset : () => void
}
export default function GlobalError({
  error,
  reset,
}: Props) {
  return (
    <html>
      <body>
        <h2>{error.message}</h2>
       <button onClick={() => reset()}>Try again</button> 
      </body>
    </html>
  )
}