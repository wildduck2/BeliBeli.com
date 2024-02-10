import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/utils"


const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "ypeer yh-4 yw-4 yshrink-0 yrounded-sm yborder yborder-primary yring-offset-background focus-visible:youtline-none focus-visible:yring-2 focus-visible:yring-ring focus-visible:yring-offset-2 disabled:ycursor-not-allowed disabled:yopacity-50 data-[state=checked]:ybg-primary data-[state=checked]:ytext-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("yflex yitems-center yjustify-center ytext-current")}
    >
      <Check className="yh-4 yw-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
