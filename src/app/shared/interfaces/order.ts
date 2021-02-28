export interface Order {
  id: number;
  clientId: number;
  duration: number;
  tva: number;
  tjmHt: number;
  comment: string;
  type: string;
  state: string;
}
