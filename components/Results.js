import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { billState, peopleState, tipPercentState } from '../atoms/inputAtoms';

function Results() {
  const [bill, setBill] = useRecoilState(billState)
  const [people, setPeople] = useRecoilState(peopleState)
  const [tipPercent, setTipPercent] = useRecoilState(tipPercentState)

  const [tipAmount, setTipAmount] = useState()

  const [total, setTotal] = useState()
  const [totalSplit, setTotalSplit] = useState()

  const billFloat = parseFloat(bill)
  const peopleFloat = parseFloat(people)
  const tipPercentFloat = parseFloat(tipPercent)

  const handleReset = () => {
    if (totalSplit) {
      setBill('')
      setPeople('')
      setTipPercent('')
    }
  }

  useEffect(() => {
    const tipAmount = billFloat * tipPercentFloat
    return setTipAmount(tipAmount)
  }, [tipPercent, billFloat, tipPercentFloat, setTipAmount])

  useEffect(() => {
    const total = billFloat + tipAmount
    return setTotal(total)
  }, [billFloat, tipAmount, setTotal])

  useEffect(() => {
    const totalSplit = parseFloat(total) / peopleFloat
    return setTotalSplit(totalSplit)
  }, [peopleFloat, total, setTotalSplit])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div className='flex flex-col rounded-xl bg-VeryDarkCyan'>
      <div className='flex flex-col m-6'>
        <div className='flex justify-between pt-4'>
          <div className='flex flex-col font-semibold '>
            <p className='text-white text-small '>Tip Amount </p>
            <p className='text-xs text-StrongCyan opacity-60'>/ person</p>
          </div>

          {tipAmount ? (
            <div className='text-3xl font-semibold text-StrongCyan'>
              {formatter.format(tipAmount)}
            </div>
          ) : (
            <div className='text-3xl font-semibold text-StrongCyan '>$0.00</div>
          )}
        </div>
        <div className='flex justify-between pt-6'>
          <div className='font-semibold text-white '>
            <p className='text-sm'>Total</p>
            <p className='text-xs font-semibold text-StrongCyan opacity-60'>
              / person
            </p>
          </div>
          {totalSplit ? (
            <div className='text-3xl font-semibold text-StrongCyan font-SpaceMono'>
              {formatter.format(totalSplit)}
            </div>
          ) : (
            <div className='text-3xl font-semibold text-StrongCyan'>$0.00</div>
          )}
        </div>
      </div>
      <div className='flex items-center justify-center m-5'>
        <button
          className='w-full text-lg tracking-wider uppercase bg-StrongCyan text-VeryDarkCyan'
          onClick={handleReset}
        >
          reset
        </button>
      </div>
    </div>
  )
}

export default Results
