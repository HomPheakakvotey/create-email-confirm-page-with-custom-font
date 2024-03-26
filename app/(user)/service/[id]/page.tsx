import CardProductDetail from "@/components/card/CardProductDetail";
import React from "react";
type PropsParams = {
  params: {
    id: number;
  };
  searchParam: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

export const getData = async (id: number) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = await res.json();
  return data;
};

export default async function Detail(props: any) {
  let data = await getData(props.params.id);
  console.log(data);
  return (
    <div className="h-screen grid place-content-center">
      <CardProductDetail
        title={data?.title || "No title"}
        description={data?.description || "No Description"}
        image={data?.image || "https://imgs.search.brave.com/bVggFXOuk9Uz6x__RJgvWLVRssSROI43dGl9LPdnzrU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA1/MzMvMjA4OS9maWxl/cy9wbGFjZWhvbGRl/ci1pbWFnZXMtaW1h/Z2VfbGFyZ2UucG5n/P2Zvcm1hdD1qcGcm/cXVhbGl0eT05MCZ2/PTE1MzAxMjkwODE"}
      />
    </div>
  );
}
