import { useRecoilState } from 'recoil';

import { tipPercentState } from '../atoms/inputAtoms';

function Tips() {
  const [tipPercent, setTipPercent] = useRecoilState(tipPercentState)

  const handleTipClick = (e) => {
    setTipPercent(e.target.value)
  }
  console.log(tipPercent)

  return (
    <div className='pt-10 m-1 '>
      <div className='font-semibold tracking-tight opacity-70'>
        Select Tip %
      </div>
      <div className='grid grid-cols-2 gap-4 py-1.5 m-3'>
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
          className='text-xl font-semibold text-center rounded-lg bg-opacity-30 bg-SoftGreen placeholder-DirtyGreen text-DarkGrayGreen hover:ring-4 hover:ring-Aqua focus:outline-StrongCyan'
          placeholder='Custom'
          type='number'
          id='customPercent'
          name='percent'
          onChange={() => {}}
        />
      </div>
    </div>
  )
}
export default Tips
