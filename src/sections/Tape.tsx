import StarIcon from '@/assets/icons/star.svg'

const words = [
  "performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
]

export const TapeSection = () => {
  return (
    <div>
      <div>
        {words.map((word) => (
          <div key={word}>
            <span>{word}</span>
            <StarIcon />
          </div>
        ))}
      </div>
    </div>
  )
};
