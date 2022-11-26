import React from "react"

const PlusIcon: React.FC<any> = (props: any) =>{
  return (
    <svg viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
    </svg>
  )
}

export default PlusIcon
