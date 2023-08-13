import { Item } from "../../Types";

type Props = {
  item: Item;
  cart: Item[];
  setCart: React.Dispatch<React.SetStateAction<Item[] | null>>;
};

export function addToCart({ item, cart, setCart }: Props) {
  let inCart = false;
  setCart(
    cart.map((piece) => {
      if (piece._id == item._id) {
        inCart = true;
        return { ...item, count: piece.count + 1 };
      } else return piece;
    })
  );
  !inCart && setCart((prev) => [...prev, { ...item, count: 1 }]);
}
