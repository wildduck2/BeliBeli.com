export interface UseShopProductDataProps {
  id: string | undefined
}

export interface ProductShoptData {
  routeText: string
  pageTilte: string
  navigationLink: {
    Women: string[]
    Divided: string[]
    Men: string[]
    Kids: string[]
    Baby: string[]
    'H&M Home': string[]
    Sport: string[]
  }
}
