import {Action} from './action';
import {SecurityAccess} from '../security-access';

export interface ProtocolServerAdapter {
  create: (
    actions: Map<string, Action>,
    securityAccess: SecurityAccess,
    app: any
  ) => void;
}
