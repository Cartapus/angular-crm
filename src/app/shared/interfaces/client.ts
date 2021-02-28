import { ClientState } from "../enums/client-state.enum";

export interface Client {
  name: string;
  email: string;
  comment: string;
  state: ClientState;
  id? : number;
}
