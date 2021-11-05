import {Action} from './action';

export interface ProtocolServerAdapter {
  create: (
    actions: Map<string, Action>,
    app: any
  ) => void;
}
