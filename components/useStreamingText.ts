"use client";

import { useEffect, useState } from "react";

type Options = {
  charsPerTick?: number;
  tickMs?: number;
  enabled?: boolean;
};

export function useStreamingText(
  source: string | null,
  { charsPerTick = 2, tickMs = 16, enabled = true }: Options = {},
) {
  const initialDone = !source || !enabled;
  const initialText = !source ? "" : enabled ? "" : source;

  const [text, setText] = useState(initialText);
  const [done, setDone] = useState(initialDone);
  const [lastSource, setLastSource] = useState(source);
  const [lastEnabled, setLastEnabled] = useState(enabled);

  if (source !== lastSource || enabled !== lastEnabled) {
    setLastSource(source);
    setLastEnabled(enabled);
    setText(!source ? "" : enabled ? "" : source);
    setDone(!source || !enabled);
  }

  useEffect(() => {
    if (!source || !enabled) return;

    let i = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const step = () => {
      i = Math.min(i + charsPerTick, source.length);
      setText(source.slice(0, i));
      if (i < source.length) {
        timer = setTimeout(step, tickMs);
      } else {
        setDone(true);
      }
    };

    timer = setTimeout(step, tickMs);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [source, charsPerTick, tickMs, enabled]);

  return { text, done };
}
