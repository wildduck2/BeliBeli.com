import React from 'react';
import { useShopProductData } from '@/hooks';
import { useParams } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Link,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/UI';
import ShopProductProducts from './ShopProductProducts';

const ShopProduct = () => {
  const id = useParams();

  const [ShopProductData, status] = useShopProductData({
    id: id.id
  });

  return (
    <>
      <main className="products-shop">
        <span>{ShopProductData.routeText}</span>

        <div className="products-shop__wrapper">
          <aside className="products-shop__wrapper__sidebar">
            <ul>
              {Object.entries(ShopProductData.navigationLink).map(
                ([key, value]) => (
                  <li key={key}>
                    <h4>{key}</h4>
                    <ul>
                      {value.map((item, index) => (
                        <li key={index}>
                          <Link href={`/${item}`}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </aside>

          <section className="products-shop__wrapper__content">
            <h1>{id.id?.toUpperCase()}</h1>

            <div className="products-shop__wrapper__content__filter">
              <div className="products-shop__wrapper__content__filter__select">
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
              </div>
              <div className="products-shop__wrapper__content__filter__price">
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
                    <div className="products-shop__wrapper__content__filter__price__input">
                      <Input
                        placeholder="Enter the minimum price"
                        required
                        type="number"
                        min={300}
                        max={6000}
                      />
                      <Input
                        placeholder="Enter the maximum price"
                        required
                        type="number"
                        min={1000}
                        max={6000}
                      />
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="submit">Save changes</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <ShopProductProducts status={status} />
          </section>
        </div>
      </main>
    </>
  );
};

export default ShopProduct;
