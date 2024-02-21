export interface ShowProductProps {
  pageTile: string;
  navigationLink: string[][][][];
  routeText: string;
}

export interface ShowProductProductsProps {
  status: 'loading' | 'succeeded' | 'failed';
}
