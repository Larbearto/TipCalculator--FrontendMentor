import { useRecoilState } from 'recoil';

import { billState } from '../atoms/inputAtoms';

function Bill() {
  const [bill, setBill] = useRecoilState(billState)

  const handleBill = (e) => {
    setBill(e.target.value)
  }
  console.log(bill)

  return (
    <div className=''>
      <div className=''>
        <label className='font-semibold tracking-wide text-base opacity-60 md:text-xs '>
          Bill
        </label>
      </div>

      <div className='flex justify-between py-1.5 '>
        <div className='flex justify-center w-full bg-opacity-30 rounded-xl bg-SoftGreen md:m-1 lg:m-0'>
          <span className='text-2xl md:text-sm lg:text-xl opacity-30'>$</span>

          <input
            type='number'
            placeholder='0'
            className='text-xl md:text-sm lg:text-lg font-semibold text-right font-SpaceMono text-VeryDarkCyan bg-SoftGreen bg-opacity-10'
            value={bill}
            onChange={handleBill}
          />
        </div>
      </div>
    </div>
  )
}

export default Bill
