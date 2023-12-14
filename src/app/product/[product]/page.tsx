"use client";
import Container from "@/app/container/Container";
import { products } from "../../data/home/plans";
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";

export async function generateStaticParams() {
  return products.map((item: any) => ({
    product: item.slug,
  }));
}

export default function Page({ params }: { params: any }) {
  const { product } = params;

  const foundProduct = products.find((item) => {
    const foundNestedProduct = item.nestedPlans?.find(
      (item2) => item2.slug === product
    );

    if (item.slug === product) {
      return item;
    } else if (foundNestedProduct) {
      return foundNestedProduct;
    }
  });

  return (
    <div className="mb-10">
      <Container>
        <Banner data={foundProduct} />
        <Tabs data={foundProduct} />
      </Container>
    </div>
  );
}
