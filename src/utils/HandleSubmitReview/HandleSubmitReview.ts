import { toast } from "sonner";
import { supabase } from "@/supabase/supabase";
import { v4 as ID } from "uuid";
import { handleSubmitProps } from "./HandleSubmitReview.types";

export const handleSubmit = async ({
  fit,
  lenght,
  rate,
  nickname,
  reviewDiscription,
  reviewTitle,
  trueToSize,
  email,
  userId,
  productRecommended,
  product_id,
  setLoading,
  dialogClose,
  setAllReviews,
}: handleSubmitProps) => {
  const product_review = {
    id: ID(),
    created_at: new Date(),
    email: email,
    user_id: userId,
    overall_rating: rate,
    review_title: reviewTitle,
    review_discription: reviewDiscription,
    product_recommended: productRecommended,
    nickname: nickname,
    true_to_size: trueToSize,
    fit: fit,
    lenght: lenght,
    this_review_was_helpufll: [],
  };

  if (nickname !== "" && reviewDiscription !== "" && reviewTitle !== "") {
    setLoading(true);
    const promise = new Promise((resolve, reject) => {
      const cb = async () => {
        try {
          const { data: existingData, error } = await supabase
            .from("products")
            .select("*")
            .eq("id", product_id);

          if (error) {
            reject(error);
            throw error;
          }

          const product_reviews = [
            ...existingData[0].product_reviews,
            product_review,
          ];

          const { data: updatedRow, error: updateError } = await supabase
            .from("products")
            .update({ product_reviews: product_reviews })
            .eq("id", product_id)
            .select();

          if (updateError) {
            reject(error);
            throw updateError;
          }

          resolve(updatedRow);
          setLoading(false);
          dialogClose.current?.click();
          setAllReviews(updatedRow[0].product_reviews);

          console.log("Updated row:", updatedRow, updateError);
        } catch (error) {
          console.error("Error updating row:", error as string);
        }
      };

      cb();
    });

    toast.promise(
      promise,

      {
        success: "Thank you for your review!",
        loading: "Waiting to submit your review...",
        error: "Something went wrong!",
      },
    );
  } else {
    toast.error("Please fill in all the fields");
    setLoading(false);
  }
};
