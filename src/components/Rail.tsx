/** The 56px vermilion band down the right edge of every page. */
export const Rail = ({ text }: { text: string }) => (
  <div aria-hidden="true" className="fixed inset-y-0 right-0 z-40 flex w-rail items-center justify-center bg-vermilion text-ink">
    <span className="voice whitespace-nowrap text-[18px] font-medium tracking-[0.01em] [writing-mode:vertical-rl]">{text}</span>
  </div>
);
