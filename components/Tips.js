import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { customTipState, tipPercentState } from '../atoms/inputAtoms';

function Tips() {
  const [tipPercent, setTipPercent] = useRecoilState(tipPercentState)
  const [customTip, setCustomTip] = useRecoilState(customTipState)

  const handleTipClick = (e) => {
    setTipPercent(e.target.value)
  }
  console.log(tipPercent)

  return (
    <div className='space-y-3 '>
      <div className='font-semibold md:text-xs lg:text-xs tracking-tight opacity-60'>
        Select Tip %
      </div>
      <div className='grid grid-cols-2 gap-4 m-2 md:grid-cols-3 md:gap-2 md:m-0 '>
        <button value={0.05} onClick={handleTipClick}>
          5%
        </button>
        <button value={0.1} onClick={handleTipClick}>
          10%
        </button>
        <button value={0.15} onClick={handleTipClick}>
          15%
        </button>
        <button value={0.25} onClick={handleTipClick}>
          25%
        </button>
        <button value={0.5} onClick={handleTipClick}>
          50%
        </button>
        <input
          className='text-xl md:text-base font-semibold text-center rounded-lg bg-opacity-30 bg-SoftGreen placeholder-DirtyGreen text-DarkGrayGreen hover:ring-4 hover:ring-Aqua focus:outline-StrongCyan'
          placeholder='Custom'
          type='number'
          id='customPercent'
          name='percent'
          value={customTip}
          onChange={(e) => setCustomTip(e.currentTarget.value)}
        />
      </div>
    </div>
  )
}
export default Tips
