import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
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
import { useUser } from "@/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { handleSubmit } from "@/utils";
import { Icons } from "@/components/Layouts/Log/Icons";

const WriteReviewWrapper: React.FC<WriteReviewWrapperProps> = ({
  img,
  lowImg,
  title,
  productId,
  setAllReviews,
}) => {
  const [trueToSize, setTrueToSize] = React.useState<
    "small" | "normal" | "large"
  >("small");
  const [fit, setFit] = React.useState<"tight" | "normal" | "large">("tight");
  const [lenght, setLenght] = React.useState<"small" | "normal" | "large">(
    "small",
  );
  const [reviewTitle, setReviewTitle] = React.useState<string>("");
  const [reviewDiscription, setReviewDiscription] = React.useState<string>("");
  const [nickname, setNickname] = React.useState<string>("");
  const [rate, setRate] = React.useState<number>(0);
  const [productRecommended, setProductRecommended] =
    React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const logged = useSelector((state: RootState) => state.data.logged);
  const user = useUser({ signedout: logged });

  const dialogClose = useRef<HTMLButtonElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"}>Write a review</Button>
      </DialogTrigger>
      <DialogContent className="write-review">
        <DialogHeader>
          <DialogTitle className="write-review__title">
            Write a review for this product
          </DialogTitle>
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
              <div className="rating">
                <Label htmlFor="rating">Overall Rating *</Label>
                <Box component="fieldset" borderColor="transparent">
                  <Rating
                    name="customized-empty"
                    defaultValue={4}
                    emptyIcon={<Star />}
                    onChange={(event, value) => setRate(value!)}
                  />
                </Box>
              </div>

              <div className="info">
                <Input
                  type="text"
                  id="title"
                  placeholder="Review Title"
                  onChange={(e) => setReviewTitle(e.target.value)}
                />
                <Textarea
                  id="title"
                  placeholder="Review Description"
                  onChange={(e) => setReviewDiscription(e.target.value)}
                />
              </div>

              <div className="recommend">
                <Label>Would you recommend this product to a friend?</Label>
                <div>
                  <Button variant={"outline"}>Yes</Button>
                  <Button variant={"outline"}>No</Button>
                </div>
              </div>

              <div className="user">
                <Label>User Basic Info *</Label>

                <div>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Nickname"
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <Input
                    type="text"
                    id="name"
                    value={"wezonaser50@gmail.com"}
                    disabled
                  />
                </div>
              </div>

              <div className="product">
                <Label>Product *</Label>

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
                          <RadioGroupItem value="tight" id="s1" />
                          <Label htmlFor="s1">tight</Label>
                        </div>
                        <div onClick={() => setFit("normal")}>
                          <RadioGroupItem value="normal" id="s2" />
                          <Label htmlFor="s2">normal</Label>
                        </div>
                        <div onClick={() => setFit("large")}>
                          <RadioGroupItem value="large" id="s3" />
                          <Label htmlFor="s3">large</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name">Length:</Label>

                    <div>
                      <RadioGroup defaultValue={lenght}>
                        <div onClick={() => setLenght("small")}>
                          <RadioGroupItem value="small" id="a1" />
                          <Label htmlFor="a1">small</Label>
                        </div>
                        <div onClick={() => setLenght("normal")}>
                          <RadioGroupItem value="normal" id="a2" />
                          <Label htmlFor="a2">normal</Label>
                        </div>
                        <div onClick={() => setLenght("large")}>
                          <RadioGroupItem value="large" id="a3" />
                          <Label htmlFor="a3">large</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <DialogFooter className="write-review__wrapper__footer">
          {nickname !== "" ||
          reviewDiscription !== "" ||
          reviewTitle !== "" ||
          productRecommended ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"outline"}>Cancel</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <DialogClose asChild>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </DialogClose>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <DialogClose asChild>
              <Button variant={"outline"}>Cancel</Button>
            </DialogClose>
          )}

          <Button
            variant={"default"}
            onClick={() => {
              setLoading(true);
              handleSubmit({
                fit,
                nickname,
                trueToSize,
                productRecommended,
                rate,
                lenght,
                product_id: productId,
                reviewDiscription,
                reviewTitle,
                userId: user[0]!.id!,
                email: user[0]!.email!,
                setLoading,
                dialogClose,
                setAllReviews,
              });
            }}
            disabled={loading}
          >
            {loading ? <Icons.spinner className="animate-spin" /> : "Submit"}

            <DialogClose asChild ref={dialogClose} aria-hidden hidden>
              <span>2</span>
            </DialogClose>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WriteReviewWrapper;
