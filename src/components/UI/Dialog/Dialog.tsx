import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'yfixed yinset-0 yz-50 ybg-black/80 y data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'yfixed yleft-[50%] ytop-[50%] yz-50 ygrid yw-full ymax-w-lg ytranslate-x-[-50%] ytranslate-y-[-50%] ygap-4 yborder ybg-background yp-6 yshadow-lg yduration-200 data-[state=open]:yanimate-in data-[state=closed]:yanimate-out data-[state=closed]:yfade-out-0 data-[state=open]:yfade-in-0 data-[state=closed]:yzoom-out-95 data-[state=open]:yzoom-in-95 data-[state=closed]:yslide-out-to-left-1/2 data-[state=closed]:yslide-out-to-top-[48%] data-[state=open]:yslide-in-from-left-1/2 data-[state=open]:yslide-in-from-top-[48%] sm:yrounded-lg',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="yabsolute yright-4 ytop-4 yrounded-sm yopacity-70 yring-offset-background ytransition-opacity hover:yopacity-100 focus:youtline-none focus:yring-2 focus:yring-ring focus:yring-offset-2 disabled:ypointer-events-none data-[state=open]:ybg-accent data-[state=open]:ytext-muted-foreground">
        <X className="yh-4 yw-4" />
        <span className="ysr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'yflex yflex-col yspace-y-1.5 ytext-center sm:ytext-left',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'yflex yflex-col-reverse sm:yflex-row sm:yjustify-end sm:yspace-x-2',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      'ytext-lg yfont-semibold yleading-none ytracking-tight',
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('ytext-sm ytext-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};
