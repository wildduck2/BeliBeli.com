import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { cn } from "@/utils"


const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "yrelative yz-10 yflex ymax-w-max yflex-1 yitems-center yjustify-center",
      className
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "ygroup yflex yflex-1 ylist-none yitems-center yjustify-center yspace-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
  "ygroup yinline-flex yh-10 yw-max yitems-center yjustify-center yrounded-md ybg-background ypx-4 ypy-2 ytext-sm yfont-medium ytransition-colors hover:ybg-accent hover:ytext-accent-foreground focus:ybg-accent focus:ytext-accent-foreground focus:youtline-none disabled:ypointer-events-none disabled:yopacity-50 data-[active]:ybg-accent/50 data-[state=open]:ybg-accent/50"
)

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "ygroup", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="yrelative ytop-[1px] yml-1 yh-3 yw-3 ytransition yduration-200 group-data-[state=open]:yrotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "yleft-0 ytop-0 yw-full data-[motion^=from-]:yanimate-in data-[motion^=to-]:yanimate-out data-[motion^=from-]:yfade-in data-[motion^=to-]:yfade-out data-[motion=from-end]:yslide-in-from-right-52 data-[motion=from-start]:yslide-in-from-left-52 data-[motion=to-end]:yslide-out-to-right-52 data-[motion=to-start]:yslide-out-to-left-52 md:yabsolute md:yw-auto y",
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("yabsolute yleft-0 ytop-full yflex yjustify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "yorigin-top-center yrelative ymt-1.5 yh-[var(--radix-navigation-menu-viewport-height)] yw-full yoverflow-hidden yrounded-md yborder ybg-popover ytext-popover-foreground yshadow-lg data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-90 md:yw-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "ytop-full yz-[1] yflex yh-1.5 yitems-end yjustify-center yoverflow-hidden data-[state=visible]:yanimate-in data-[state=hidden]:yanimate-out data-[state=hidden]:yfade-out data-[state=visible]:yfade-in",
      className
    )}
    {...props}
  >
    <div className="yrelative ytop-[60%] yh-2 yw-2 yrotate-45 yrounded-tl-sm ybg-border yshadow-md" />
  </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
