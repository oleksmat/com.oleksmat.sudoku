import './stytes.css';

export function Combos() {
  return <div className={"combos"}>
    {...new Array(33 * 21).fill(1).map((val, idx) => {
      let skip = false;
      const col = idx % 21;
      const row = (idx - col) / 21;

      if (row < 6 && col > 8 && col < 12) {
        skip = true;
      }
      if (row > 26 && col > 8 && col < 12) {
        skip = true;
      }
      if (col < 6 && row > 8 && row < 12) {
        skip = true;
      }
      if (col > 14 && row > 8 && row < 12) {
        skip = true;
      }
      if (col < 6 && row > 20 && row < 24) {
        skip = true;
      }
      if (col > 14 && row > 20 && row < 24) {
        skip = true;
      }
      if (row > 14 && row < 18 && col > 8 && col < 12) {
        skip = true;
      }

      return <div className={skip ? 'skip' : undefined}>
        {!skip ? col : undefined}
      </div>;
    })}
  </div>;
}
