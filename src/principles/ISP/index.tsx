import { Bad } from "./Bad";

export function ISP() {
  const PRODUCT = {
    title: "Iphone 14 pro max",
    id: "4",
    rating: { rate: 5 },
    price: 200,
    image: "example.com/image",
  };
  return <Bad product={PRODUCT} />;
}
