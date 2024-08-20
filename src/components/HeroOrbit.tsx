
import { PropsWithChildren } from 'react'



// animate-spin [animation-duration:5s]
// <StarIcon className="size-28 text-emerald-300" />
export const HeroOrbit = ({ children, size, rotation }: PropsWithChildren<{ size: number; rotation: number; }>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div 
        className=''
        style={{
          transform: `rotate(${rotation}deg)`, 
          height: `${size}px`,
          width: `${size}px`,
        }}  
      >
        <div 
          className='inline-flex'
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}  
        >
          { children }
        </div>
      </div>
    </div>
  )
}

