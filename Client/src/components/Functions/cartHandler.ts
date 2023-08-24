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
        return { ...item, count: (piece?.count ?? 0) + 1 };
      } else return piece;
    })
  );
  //@ts-ignore
  !inCart && setCart((prev) => [...prev, { ...item, count: 1 }]);
}
export function removeFromCart({ item, cart, setCart }: Props) {
  if (item.count == 1) setCart(cart.filter((piece) => piece._id != item._id));
  else
    setCart(
      cart.map((piece) => {
        if (piece._id == item._id) {
          return { ...item, count: (piece?.count ?? 0) - 1 };
        } else return piece;
      })
    );
}
