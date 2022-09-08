import { UserIcon } from '@heroicons/react/solid';
import { useRecoilState } from 'recoil';

import { billState, peopleState, tipPercentState } from '../atoms/inputAtoms';

const People = (props) => {
  const [people, setPeople] = useRecoilState(peopleState)
  const [tipPercent, setTipPercent] = useRecoilState(tipPercentState)
  const [bill, setBill] = useRecoilState(billState)

  const handlePeople = (e) => {
    setPeople(e.target.value)
  }
  console.log(people)

  return (
    <div className='flex flex-col space-y-2 '>
      <div className='flex justify-between items-center'>
        <label className='text-xs md:text-[10px] font-semibold tracking-wide opacity-60'>
          Number of People
        </label>
        {!people && tipPercent && bill && (
          <div className='pl-10 text-sm md:text-[10px] font-semibold  text-red-700 opacity-70'>
            {"Can't be zero"}
          </div>
        )}
      </div>

      <div className='inputs bg-SoftGreen rounded-xl p-1'>
        <div className='flex ml-2'>
          <span className='flex items-center'>
            <UserIcon className='h-5 md:h-3 lg:h-4 text-DirtyGreen' />
          </span>

          <input
            type='number'
            placeholder='0'
            value={people}
            className='w-11/12 text-2xl md:text-base font-semibold text-right text-VeryDarkCyan bg-SoftGreen bg-opacity-10 outline-none'
            onChange={handlePeople}
          />
        </div>
      </div>
    </div>
  )
}

export default People
