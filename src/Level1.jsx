import React from 'react'

const Level1 = (prop) => {
  return (
    <>
        my name is : {prop.nm} <br />
        my course is : {prop.cou} <br />
        current salary : {prop.sl} <br />
        current status : {prop.st}
    </>
  )
}

export default Level1