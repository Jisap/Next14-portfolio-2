
import { PropsWithChildren } from 'react'




export const HeroOrbit = ({ children, size, rotation }: PropsWithChildren<{ size: number; rotation: number; }>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div 
        className='flex items-start justify-start'
        style={{
          transform: `rotate(${rotation}deg)`, // Lo que este dentro rota alrededor de su centro
          height: `${size}px`,
          width: `${size}px`,
        }}  
      >
        <div 
          className='inline-flex'
          style={{
            transform: `rotate(${rotation * -1}deg)`, // Cuando se aplica una rotación negativa = rotación + del contenedorppal se cancela el efecto de rotación
          }}                                          // lo que resulta en una orientación final de 0 grados. Las estrellas apuntan hacia arriba.
        >
          { children }
        </div>
      </div>
    </div>
  )
}

