import React from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Textarea,
} from "..";
import { WriteReviewWrapperProps } from "./WriteReviewWrapper.types";
import { AsyncImage as LazyImg } from "@/components/Layouts";
import { Box, Rating } from "@mui/material";
import { Star } from "lucide-react";

const WriteReviewWrapper: React.FC<WriteReviewWrapperProps> = ({
  img,
  lowImg,
  title,
}) => {
  const [trueToSize, setTrueToSize] = React.useState<
    "small" | "normal" | "large"
  >("small");
  const [fit, setFit] = React.useState<"tight" | "normal" | "large">("tight");
  const [lenght, setLenght] = React.useState<"small" | "normal" | "large">(
    "small",
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Write a review</Button>
      </DialogTrigger>
      <DialogContent className="write-review">
        <DialogHeader>
          <DialogTitle>Write a review</DialogTitle>
        </DialogHeader>
        <div className="write-review__wrapper">
          <div className="write-review__wrapper__img">
            <LazyImg
              src={img}
              srcSet={lowImg}
              alt={title}
              style={{ width: "100%", height: "500px" }}
              draggable={false}
            />
            <h2>{title}</h2>
          </div>

          <div className="write-review__wrapper__form">
            <form action="post">
              <div>
                <Label htmlFor="rating">Overall Rating *</Label>
                <Box component="fieldset" borderColor="transparent">
                  <Rating
                    name="customized-empty"
                    defaultValue={4}
                    emptyIcon={<Star />}
                  />
                </Box>
              </div>

              <div>
                <Input type="text" id="title" placeholder="Review Title" />
                <Textarea id="title" placeholder="Review" />
              </div>

              <div className="recommend">
                <Label>Would you recommend this product to a friend?</Label>
                <div>
                  <Button variant={"outline"}>Yes</Button>
                  <Button variant={"outline"}>No</Button>
                </div>
              </div>

              <div className="user">
                <Label>User Basic Info</Label>

                <div>
                  <Input type="text" id="name" placeholder="Nickname" />
                  <Input
                    type="text"
                    id="name"
                    value={"wezonaser50@gmail.com"}
                    disabled
                  />
                </div>
              </div>

              <div className="product">
                <Label>Product</Label>

                <div>
                  <div>
                    <Label htmlFor="name">True to Size:</Label>

                    <div>
                      <RadioGroup defaultValue={trueToSize}>
                        <div onClick={() => setTrueToSize("small")}>
                          <RadioGroupItem value="small" id="r1" />
                          <Label htmlFor="r1">small</Label>
                        </div>
                        <div onClick={() => setTrueToSize("normal")}>
                          <RadioGroupItem value="normal" id="r2" />
                          <Label htmlFor="r2">normal</Label>
                        </div>
                        <div onClick={() => setTrueToSize("large")}>
                          <RadioGroupItem value="large" id="r3" />
                          <Label htmlFor="r3">large</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name">Fit:</Label>

                    <div>
                      <RadioGroup defaultValue={fit}>
                        <div onClick={() => setFit("tight")}>
                          <RadioGroupItem value="tight" id="r1" />
                          <Label htmlFor="r1">tight</Label>
                        </div>
                        <div onClick={() => setFit("normal")}>
                          <RadioGroupItem value="normal" id="r2" />
                          <Label htmlFor="r2">normal</Label>
                        </div>
                        <div onClick={() => setFit("large")}>
                          <RadioGroupItem value="large" id="r3" />
                          <Label htmlFor="r3">large</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name">Length:</Label>

                    <div>
                      <RadioGroup defaultValue={lenght}>
                        <div onClick={() => setLenght("small")}>
                          <RadioGroupItem value="small" id="r1" />
                          <Label htmlFor="r1">small</Label>
                        </div>
                        <div onClick={() => setLenght("normal")}>
                          <RadioGroupItem value="normal" id="r2" />
                          <Label htmlFor="r2">normal</Label>
                        </div>
                        <div onClick={() => setLenght("large")}>
                          <RadioGroupItem value="large" id="r3" />
                          <Label htmlFor="r3">large</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>

          <Button variant={"default"}>Post review</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WriteReviewWrapper;
