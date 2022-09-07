import { atom } from 'recoil';

export const billState = atom({
  key: 'billState',
  default: '',
  placeholder: '0'
})

export const peopleState = atom({
  key: 'peopleState',
  default: '',
  placeholder: '0'
})

export const tipPercentState = atom({
  key: 'tipPercentState',
  default: ''
})

export const customTipState = atom({
  key: 'customTipState',
  default: ''
})
