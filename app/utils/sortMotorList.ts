import { ProdukInterface } from '../components/Produk/Produk.interfaces';

type SortType = 'price-asc' | 'price-desc';

export function sortMotorList(
  list: ProdukInterface[],
  sortType: SortType
): ProdukInterface[] {
  const sortedList = [...list];

  if (sortType === 'price-asc') {
    sortedList.sort((a, b) => a.priceNum - b.priceNum);
  } else if (sortType === 'price-desc') {
    sortedList.sort((a, b) => b.priceNum - a.priceNum);
  }

  return sortedList;
}
