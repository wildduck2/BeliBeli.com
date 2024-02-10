import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/utils"
import { Dialog, DialogContent } from "../Dialog/Dialog"


const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "yflex yh-full yw-full yflex-col yoverflow-hidden yrounded-md ybg-popover ytext-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="yoverflow-hidden yp-0 yshadow-lg">
        <Command className="[&_[cmdk-group-heading]]:ypx-2 [&_[cmdk-group-heading]]:yfont-medium [&_[cmdk-group-heading]]:ytext-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:ypt-0 [&_[cmdk-group]]:ypx-2 [&_[cmdk-input-wrapper]_svg]:yh-5 [&_[cmdk-input-wrapper]_svg]:yw-5 [&_[cmdk-input]]:yh-12 [&_[cmdk-item]]:ypx-2 [&_[cmdk-item]]:ypy-3 [&_[cmdk-item]_svg]:yh-5 [&_[cmdk-item]_svg]:yw-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="yflex yitems-center yborder-b ypx-3" cmdk-input-wrapper="">
    <Search className="ymr-2 yh-4 yw-4 yshrink-0 yopacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "yflex yh-11 yw-full yrounded-md ybg-transparent ypy-3 ytext-sm youtline-none placeholder:ytext-muted-foreground disabled:ycursor-not-allowed disabled:yopacity-50",
        className
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("ymax-h-[300px] yoverflow-y-auto yoverflow-x-hidden", className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="ypy-6 ytext-center ytext-sm"
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "yoverflow-hidden yp-1 ytext-foreground [&_[cmdk-group-heading]]:ypx-2 [&_[cmdk-group-heading]]:ypy-1.5 [&_[cmdk-group-heading]]:ytext-xs [&_[cmdk-group-heading]]:yfont-medium [&_[cmdk-group-heading]]:ytext-muted-foreground",
      className
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("y-mx-1 yh-px ybg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "yrelative yflex ycursor-default yselect-none yitems-center yrounded-sm ypx-2 ypy-1.5 ytext-sm youtline-none aria-selected:ybg-accent aria-selected:ytext-accent-foreground data-[disabled]:ypointer-events-none data-[disabled]:yopacity-50",
      className
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "yml-auto ytext-xs ytracking-widest ytext-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
