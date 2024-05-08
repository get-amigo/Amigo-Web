import { useEffect, useRef } from "react";

const TextRevealEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const textRevealContainer = useRef<HTMLDivElement>(null);
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (!textRevealContainer.current) return;

    const container = textRevealContainer.current;
    const words =
      textRevealContainer.current.querySelectorAll<HTMLSpanElement>(`p span`);

    function revealText() {
      const y = window.scrollY - container.offsetTop + 400;

      // not scrolled enough
      if (y < 0) return;
      const scrolledPercentage = y / container.offsetHeight;
      const nWordsToReveal = Math.floor(
        scrolledPercentage * wordsArray.length * 0.8
      );

      words.forEach((word, idx) => {
        if (idx < nWordsToReveal) word.style.opacity = "1";
        else word.style.opacity = "0.4";
      });
    }

    window.addEventListener("scroll", revealText);
    return () => {
      window.removeEventListener("scroll", revealText);
    };
  }, [wordsArray.length]);

  const renderWords = () => {
    return (
      <p ref={textRevealContainer}>
        {wordsArray.map((word, idx) => {
          return (
            <span key={word + idx} className="opacity-40">
              {word}{" "}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <section className={`font-medium font-serif w-full py-40  ${className}`}>
      <div className="relative isolate">
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-x-0 -top-80 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50% - 15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875]"
          />
        </div>
      </div>
      <div className="mx-20 md:mx-auto max-w-2xl text-center">
        <div className="text-white text-5xl md:text-7xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </section>
  );
};

export default TextRevealEffect;
