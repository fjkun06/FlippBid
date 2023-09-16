import React from 'react'

const Content = ({children}:{children?:React.ReactNode}) => {
  return (
    <div className="bg-blue-300 w-full h-full">
      {children}
    </div>
  )
}

export default Content
