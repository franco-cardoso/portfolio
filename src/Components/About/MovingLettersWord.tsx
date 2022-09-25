import MovingLetter from "./MovingLetter";

const MovingLettersWord = (props: { word: string }) => {
  const word = props.word.split("");

  return (
    <span className="funkySpan">
      {word.map((l) => (
        <MovingLetter letter={l} />
      ))}
    </span>
  );
};

export default MovingLettersWord;
