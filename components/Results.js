import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  billState,
  customTipState,
  peopleState,
  tipPercentState,
} from '../atoms/inputAtoms';

function Results() {
  const [bill, setBill] = useRecoilState(billState)
  const [people, setPeople] = useRecoilState(peopleState)
  const [tipPercent, setTipPercent] = useRecoilState(tipPercentState)
  const [customTip, setCustomTip] = useRecoilState(customTipState)

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

  useEffect(() => {
    const tipCustom = customTip / 100
    setTipPercent(tipCustom)
  }, [customTip, setTipPercent])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div className='m-7 md:m-3 md:w-1/2 md:mt-4 lg:my-4 lg:mx-3 lg:w-96 rounded-xl bg-VeryDarkCyan'>
      <div className='p-5'>
        <div className='md:m-5 md:pt-5 lg:m-4 space-y-7 md:space-y-8'>
          <div className='flex justify-between'>
            <div className='flex flex-col font-semibold '>
              <p className='text-white text-small md:text-xs lg:text-xs '>
                Tip Amount{' '}
              </p>
              <p className='text-xs md:text-[10px] text-StrongCyan opacity-60'>
                / person
              </p>
            </div>

            {tipAmount ? (
              <div className='text-3xl font-semibold text-StrongCyan'>
                {formatter.format(tipAmount)}
              </div>
            ) : (
              <div className='text-3xl md:text-xl lg:text-3xl font-semibold text-StrongCyan '>
                $0.00
              </div>
            )}
          </div>
          <div className='flex justify-between'>
            <div className='font-semibold text-white '>
              <p className='text-sm md:text-xs lg:text-xs'>Total</p>
              <p className='text-xs md:text-[10px] font-semibold text-StrongCyan opacity-60'>
                / person
              </p>
            </div>
            {totalSplit ? (
              <div className='text-3xl font-semibold text-StrongCyan font-SpaceMono'>
                {formatter.format(totalSplit)}
              </div>
            ) : (
              <div className='text-3xl md:text-xl lg:text-3xl md:mb-16 font-semibold text-StrongCyan'>
                $0.00
              </div>
            )}
          </div>

          <button
            className='resetBtn w-full tracking-widest font-bold text-lg md:text-sm lg:text-base uppercase bg-StrongCyan text-VeryDarkCyan hover:bg-MatteAqua '
            onClick={handleReset}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results
