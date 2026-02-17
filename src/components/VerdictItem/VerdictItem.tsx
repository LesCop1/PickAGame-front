import { cva } from "class-variance-authority";
import Avatar, { type Props as AvatarProps } from "../Avatar/Avatar";
import { Award } from "lucide-react";
import { cn } from "../../utils/cn";

interface Props extends AvatarProps {
  interested: boolean;
  achievementsProgress?: number;
  className?: string;
}

const verdictItemVariants = cva("flex w-full justify-between rounded-pag-sm border p-pag-spacing-50", {
  variants: {
    interested: {
      true: "border-pag-border-success-light bg-pag-bg-success-light",
      false: "border-pag-border-error-light bg-pag-bg-error-light",
    },
  },
});

export default function VerdictItem({ interested, achievementsProgress, value, className, ...avatarProps }: Props) {
  return (
    <div className={cn(verdictItemVariants({ interested }), className)}>
      <div className="flex items-center gap-pag-spacing-25">
        <Avatar size={"sm"} value={value} {...avatarProps} />
        <span className="text-pag-md text-pag-text-primary">{value}</span>
      </div>
      {achievementsProgress !== undefined && (
        <div className="flex items-center">
          <span className="text-pag-sm text-pag-text-primary">{achievementsProgress}%</span>
          <Award size={20} strokeWidth={1} className={interested ? "text-pag-icon-success" : "text-pag-icon-error"} />
        </div>
      )}
    </div>
  );
}
