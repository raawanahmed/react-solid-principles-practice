import { Bad } from "./Bad";
import { Good } from "./good";

export function ISP() {
  const PRODUCT = {
    title: "Iphone 14 pro max",
    id: "4",
    rating: { rate: 5 },
    price: 200,
    image: "example.com/image",
  };
  return <Good product={PRODUCT} />;
}
