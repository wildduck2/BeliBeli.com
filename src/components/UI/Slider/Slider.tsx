import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'yrelative yflex yw-full ytouch-none yselect-none yitems-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="yrelative yh-2 yw-full ygrow yoverflow-hidden yrounded-full ybg-secondary">
      <SliderPrimitive.Range className="yabsolute yh-full ybg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="yblock yh-5 yw-5 yrounded-full yborder-2 yborder-primary ybg-background yring-offset-background ytransition-colors focus-visible:youtline-none focus-visible:yring-2 focus-visible:yring-ring focus-visible:yring-offset-2 disabled:ypointer-events-none disabled:yopacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
