"use client";
import CardProduct from "@/components/card/CardProduct";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = "https://fakestoreapi.com/products/";

export default function Service() {
  const [products, setProduct] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="container mx-auto h-screen grid grid-cols-3 mt-8 p-16">
      {products.map((products: any, index) => (
        <CardProduct
          onClick={() => router.push(`/service/${products.id}`)}
          key={index}
          title={products.title}
          price={products.price}
          image={products.image}
        />
      ))}
    </div>
  );
}
