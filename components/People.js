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
    <div className='flex-col m-2 space-y-2 opacity-80'>
      <div className='flex'>
        <label className='text-sm font-semibold tracking-thin opacity-60'>
          Number of People
        </label>
        {!people && tipPercent && bill && (
          <div className='pl-10 text-sm font-semibold text-red-700 tracking-thin'>
            {"Can't be zero"}
          </div>
        )}
      </div>

      <div className='flex justify-between px-2 py-1.5 '>
        <div className='flex items-center justify-center w-full bg-SoftGreen bg-opacity-30 rounded-xl'>
          <span className=''>
            <UserIcon className='h-5 text-DirtyGreen' />
          </span>

          <input
            type='number'
            placeholder='0'
            value={people}
            className='text-2xl font-semibold text-right text-VeryDarkCyan bg-SoftGreen bg-opacity-10'
            onChange={handlePeople}
          />
        </div>
      </div>
    </div>
  )
}

export default People
