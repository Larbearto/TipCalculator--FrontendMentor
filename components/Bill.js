import { useRecoilState } from 'recoil';

import { billState } from '../atoms/inputAtoms';

function Bill() {
  const [bill, setBill] = useRecoilState(billState)

  const handleBill = (e) => {
    setBill(e.target.value)
  }
  console.log(bill)

  return (
    <div className='flex-col m-2 space-y-2'>
      <div className='flex'>
        <label className='font-semibold tracking-wide text-md opacity-70'>
          Bill
        </label>
      </div>

      <div className='flex justify-between py-1.5 '>
        <div className='flex justify-center w-full bg-opacity-30 rounded-xl bg-SoftGreen'>
          <span className='text-2xl opacity-30'>$</span>

          <input
            type='number'
            placeholder='0'
            className='text-xl font-semibold text-right font-SpaceMono text-VeryDarkCyan bg-SoftGreen bg-opacity-10'
            value={bill}
            onChange={handleBill}
          />
        </div>
      </div>
    </div>
  )
}

export default Bill
