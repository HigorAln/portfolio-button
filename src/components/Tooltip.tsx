import * as TooltipRadix from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  content: string;
}

export function Tooltip({ children, content }: Props) {
  return (
    <TooltipRadix.Provider delayDuration={100}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content className="select-none bg-style-g-2 text-sm text-white px-4 py-1 rounded-md">
            {content}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
