import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { billState, peopleState, tipPercentState } from '../atoms/inputAtoms';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import Results from '../components/Results';

export default function Home() {
  const [bill, setBill] = useRecoilState(billState)
  const [people, setPeople] = useRecoilState(peopleState)
  const [tipPercent, setTipPercent] = useRecoilState(tipPercentState)

  const billFloat = parseFloat(bill)
  const peopleFloat = parseFloat(people)
  const tipPercentFloat = parseFloat(tipPercent)

  console.log(billFloat, tipPercentFloat, peopleFloat)

  return (
    <div className='flex flex-col md:min-w-full md:min-h-screen md:justify-center md:items-center lg:max-w-2xl'>
      <div className='m-8'>
        <Header />
      </div>
      <div className='max-w-sm md:max-w-lg lg:max-w-xl md:flex mx-auto bg-white rounded-3xl border-4 border-orange-400 '>
        <Inputs />
        <Results />
      </div>
    </div>
  )
}
