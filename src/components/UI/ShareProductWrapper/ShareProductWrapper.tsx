import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from "..";
import { Check, Clipboard, Copy } from "lucide-react";
import { TbShare3 } from "react-icons/tb";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ShareProduct = (
  setClipboardClicked: React.Dispatch<React.SetStateAction<boolean>>,
  link: string,
) => {
  setClipboardClicked(true);
  navigator.clipboard.writeText(link);
  setTimeout(() => {
    setClipboardClicked(false);
  }, 1000);
};

const ShareProductWrapper = () => {
  const [ClipboardClicked, setClipboardClicked] = React.useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <TbShare3 size={25} />
          <span>Share</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="share__wrapper">
        <DialogHeader>
          <DialogTitle>Share</DialogTitle>
        </DialogHeader>
        <div>
          <div className="share__wrapper__buttons">
            <Button variant={"outline"}>
              <Clipboard size={27} />
            </Button>
            <Button variant={"outline"}>
              <FaWhatsapp size={27} />
            </Button>
            <Button variant={"outline"}>
              <RiTwitterXFill size={27} />
            </Button>
            <Button variant={"outline"}>
              <FaFacebookF size={27} />
            </Button>
            <Button variant={"outline"}>
              <MdEmail size={27} />
            </Button>
            <Button variant={"outline"}>
              <FaTelegramPlane size={27} />
            </Button>
            <Button variant={"outline"}>
              <FaFacebookMessenger size={27} />
            </Button>
          </div>

          <div className="share__wrapper__input">
            <Input value={window.location.href} />
            <Button
              variant={"default"}
              disabled={ClipboardClicked}
              onClick={() =>
                ShareProduct(setClipboardClicked, window.location.href)
              }
            >
              {!ClipboardClicked ? <Copy size={18} /> : <Check size={18}/>}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareProductWrapper;
