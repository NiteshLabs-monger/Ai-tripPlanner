import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
const budgetTracker = () => {
    const [totalspent,settotalspent] = useState(0)
    const [spent,setspent] = useState('')
    const [spentArray,setSpentArray] = useState([])
  return (
    <Card>
        <CardHeader>
            <p>Budget Tracker</p>
            <p>Total Spent :  {totalspent}</p>
        </CardHeader>
        <CardContent>
            <input 
             type='text'
             value={spent}
             onChange={(e)=>{setspent(e.target.value)}}
             placeholder='type your spent...'
              />
              <div>
                <div className='spentSubjects'>{spentArray.map()}</div>
                <div className=""></div>
              </div>
        </CardContent>
    </Card>
    
  )
}

export default budgetTracker