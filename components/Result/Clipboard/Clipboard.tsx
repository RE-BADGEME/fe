import { Switch, Tooltip } from '@material-tailwind/react';
import React, { useState } from 'react';
import { debounce } from 'lodash-es';
import CopySVG from '@/public/svg/svgReactComponent/CopySVG';

const ClipBoard = ({
  markdown,
  view,
  fn,
}: {
  markdown: string;
  view: boolean;
  fn: () => void;
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyClibBoard = debounce(async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      setCopied(false);
    }
  }, 300);

  return (
    <div className="flex items-center relative w-full p-3 h-16 bg-gray-300 justify-between">
      <div className="flex items-center gap-2">
        <p>MARKDOWN</p>
        <Switch
          crossOrigin="anonymous"
          checked={view}
          onChange={fn}
          label={`${view ? 'table' : 'raw'} view`}
        />
      </div>

      {copied ? (
        <p className="absolute right-3">Copied!</p>
      ) : (
        <Tooltip content={`Copy`} className=" bg-gray-400 text-black">
          <button
            type="button"
            onMouseOverCapture={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onClick={handleCopyClibBoard}
            className="w-8 h-8"
          >
            <CopySVG mouseOver={mouseOver} />
            {''}
          </button>
        </Tooltip>
      )}
    </div>
  );
};

export default ClipBoard;
