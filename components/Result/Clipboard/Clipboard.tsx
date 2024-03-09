import { Switch, Tooltip } from '@material-tailwind/react';
import React, { useState } from 'react';
import { debounce } from 'lodash-es';
import { useRecoilState } from 'recoil';
import CopySVG from '@/public/svg/svgReactComponent/CopySVG';
import { categorySelectorAtom } from '@/atom/categoryAtom';

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
  const [simpleView, setSimpleView] = useRecoilState(categorySelectorAtom);

  const changeView = () => {
    setSimpleView((prev) => !prev);
  };

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
      <div className="flex flex-col gap-2">
        <p>MARKDOWN</p>
        <div className="flex items-center gap-5">
          <Tooltip
            content={`Change badge Table Style to ${
              simpleView ? 'simple' : 'table'
            } form`}
            className=" bg-gray-400 text-black"
          >
            <Switch
              crossOrigin="anonymous"
              checked={simpleView}
              onChange={changeView}
              label={`${simpleView ? 'table' : 'simple'} form`}
            />
          </Tooltip>
          <Tooltip content={`Change view to ${view ? 'image' : 'text'} view`}>
            <Switch
              crossOrigin="anonymous"
              checked={view}
              onChange={fn}
              label={`${view ? 'table' : 'text'} view`}
            />
          </Tooltip>
        </div>
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
