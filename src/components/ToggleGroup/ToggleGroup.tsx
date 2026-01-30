import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { AnimatePresence, motion, type Transition } from "motion/react";
import React from "react";
import { cn } from "../../utils/cn";

type ToggleGroupContextValue = {
  value?: string;
};

const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null);

function ToggleGroup({ children, value, ...props }: ToggleGroupPrimitive.ToggleGroupSingleProps) {
  return (
    <ToggleGroupContext.Provider value={{ value }}>
      <ToggleGroupPrimitive.Root value={value} {...props}>
        {children}
      </ToggleGroupPrimitive.Root>
    </ToggleGroupContext.Provider>
  );
}

type ToggleGroupHighlightProps = {
  children: React.ReactNode;
  transition?: Transition;
  className?: string;
};

function ToggleGroupHighlight({ children, transition, className }: ToggleGroupHighlightProps) {
  const context = React.useContext(ToggleGroupContext);
  const [bounds, setBounds] = React.useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!context?.value || !containerRef.current) {
      setBounds(null);
      return;
    }

    const activeElement = containerRef.current.querySelector<HTMLElement>(`[data-value="${context.value}"]`);
    if (!activeElement) return;

    const containerBounds = containerRef.current.getBoundingClientRect();
    const itemBounds = activeElement.getBoundingClientRect();

    setBounds({
      top: itemBounds.top - containerBounds.top,
      left: itemBounds.left - containerBounds.left,
      width: itemBounds.width,
      height: itemBounds.height,
    });
  }, [context?.value]);

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence initial={false}>
        {bounds && (
          <motion.div
            animate={{ ...bounds, opacity: 1 }}
            initial={{ ...bounds, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={transition ?? { type: "spring", stiffness: 400, damping: 30 }}
            className={cn("absolute", className)}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

function ToggleGroupItem({ children, className, value, ...props }: ToggleGroupPrimitive.ToggleGroupItemProps) {
  return (
    <ToggleGroupPrimitive.Item value={value} data-value={value} className={cn("relative z-10", className)} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupHighlight, ToggleGroupItem };

