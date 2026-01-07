export const metadata = {
  title: 'Quotes - Guillermo Basterra',
  description: 'Favorite quotes',
};

const quotes = [
  {
    text: "“But I don’t want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.” “In fact,” said Mustapha Mond, “you’re claiming the right to be unhappy.” “All right then,” said the Savage defiantly, “I’m claiming the right to be unhappy.” “Not to mention the right to grow old and ugly and impotent; the right to have syphilis and cancer; the right to have too little to eat; the right to be lousy; the right to live in constant apprehension of what may happen tomorrow; the right to catch typhoid; the right to be tortured by unspeakable pains of every kind.” There was a long silence. “I claim them all,” said the Savage at last.",
    author: "Aldous Huxley",
    work: "Brave New World",
  },
  {
    text: "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
    author: "Theodore Roosevelt",
    work: "The Man in the Arena",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    work: null,
  },
];

export default function Quotes() {
  return (
    <div className="p-16 pt-16">
      <div className="max-w-2xl">
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          These are some of my favorite quotes. I think they speak to who I am, or who I aspire to be.
        </p>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6 py-2">
              <p className="text-black text-lg mb-3 leading-relaxed">
                "{quote.text}"
              </p>
              <div className="text-gray-500 text-base">
                <span className="font-medium">{quote.author}</span>
                {quote.work && (
                  <span className="italic"> — {quote.work}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
