import Bill from './Bill';
import People from './People';
import Tips from './Tips';

function Input() {
  return (
    <div className='m-8 space-y-6 md:m-3 lg:m-6 md:flex md:flex-col md:w-1/2 '>
      <Bill />
      <Tips />
      <People />
    </div>
  )
}

export default Input
