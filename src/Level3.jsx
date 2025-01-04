import React from 'react'

const Level3 = (prop) => {
  return (
    <>
       <h3>Employee name : {prop.nm}</h3>
       <h3>Employee designation    :{prop.dn}</h3>
       <h3>Employee salary  :{prop.sl}</h3>
       <h3>Employee Technology set  :{prop.ts}</h3>
       <hr />
       
    </>
  )
}

export default Level3