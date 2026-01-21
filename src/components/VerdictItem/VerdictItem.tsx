import { cva } from "class-variance-authority";
import Avatar, { type Props as AvatarProps } from "../Avatar/Avatar";
import { Award } from "lucide-react";

interface Props extends AvatarProps {
  interested: boolean;
  achievementsProgress?: number;
}

const verdictItemVariants = cva("flex w-full justify-between rounded-pag-sm border p-pag-spacing-50", {
  variants: {
    interested: {
      false: "border-pag-border-success-light bg-pag-bg-success-light",
      true: "border-pag-border-error-light bg-pag-bg-error-light",
    },
  },
});

export default function VerdictItem({ interested, achievementsProgress, value, ...avatarProps }: Props) {
  return (
    <div className={verdictItemVariants({ interested })}>
      <div className="flex items-center gap-pag-spacing-25">
        <Avatar size={"sm"} value={value} {...avatarProps} />
        <span className="text-pag-md text-pag-text-primary">{value}</span>
      </div>
      {achievementsProgress && (
        <div className="flex items-center">
          <span className="text-pag-sm text-pag-text-primary">{achievementsProgress}%</span>
          <Award size={20} strokeWidth={1} className={interested ? "text-pag-icon-error" : "text-pag-icon-success"} />
        </div>
      )}
    </div>
  );
}
