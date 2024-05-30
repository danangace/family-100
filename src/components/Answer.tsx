import { cn } from "@/lib/utils"

type AnswerProps = {
  answer: string
  score: number
  isCorrect: boolean
  onClick: () => void
}

function Answer({ answer, score, isCorrect, onClick }: AnswerProps) {
  return (
    <div
      className={cn(
        " w-full cursor-pointer bg-white relative border transform transition ease-in-out shadow-md [transform-style:preserve-3d] duration-1000 p-4 rounded-md",
        isCorrect && "[transform:rotateY(180deg)]"
      )}
      onClick={isCorrect ? undefined : onClick}
    >
      <div className="text-center">????</div>
      <div className="bg-black text-white rounded-md shadow-md absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-between px-4">
        <p className=" font-serif font-semibold">{answer}</p>
        <p className=" font-bold">{score}</p>
      </div>
    </div>
  )
}

export default Answer
