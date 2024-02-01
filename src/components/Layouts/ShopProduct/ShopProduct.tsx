import React from "react";
import { useShopProductData } from "@/hooks";
import { useParams } from "react-router-dom";
import { NavigationHeaderLooping } from "@/utils";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI";
import { Label } from "@radix-ui/react-select";
// import { AsyncImage } from "loadable-image";
import CardInfo from "../Swiper/CardInfo";
import { AsyncImage } from "..";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";

const ShopProduct = () => {
  const id = useParams();
  const satatus = useSelector((state: RootState) => state.data.satatus);

  const products = useSelector((state: RootState) => state.data.products);
  const [ShopProductData, status] = useShopProductData({
    id: id.id,
  });
  console.log(satatus, status);

  return (
    <>
      <main className="products-shop">
        <span>{ShopProductData.pageTilte}</span>

        <div className="products-shop__wrapper">
          <aside className="products-shop__wrapper__sidebar">
            <ul>
              {Object.entries(ShopProductData.navigationLink).map(
                ([key, value]) => (
                  <div key={key}>
                    <li>{key}</li>
                    <ul>
                      {value.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </ul>
          </aside>

          <section className="products-shop__wrapper__content">
            <h1>{id.id?.toUpperCase()}</h1>

            <div className="products-shop__wrapper__content__filter">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevence">Relevance</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="new in">New in</SelectItem>
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Price</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Make Price range</DialogTitle>
                    <DialogDescription>
                      Make changes to your budget here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex gap-4 py-4">
                    <Input
                      placeholder="Enter the minimum price"
                      required
                      type="number"
                      min={0}
                      max={6000}
                    />
                    <Input
                      placeholder="Enter the maximum price"
                      required
                      type="number"
                      min={300}
                      max={6000}
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="products-shop__wrapper__content__products">
              {status &&
                satatus === "succeeded" &&
                products?.map((item, index) => (
                  <div className="swiper__card" key={index}>
                    <div className="img__wrapper">
                      <AsyncImage
                        src={item.product_type[0].top_imgs["1"]}
                        style={{ width: 254, height: 350 }}
                      />
                    </div>
                    {/*card information */}
                    <CardInfo
                      choosen={item?.choosen}
                      discount={item.product_type[0].sizes[0]?.discount}
                      price={item.product_type[0].sizes[0]?.price}
                      title={item.title}
                    />
                  </div>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ShopProduct;
