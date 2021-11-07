import { Action } from './action';
import { SecurityAccess } from '../security-access';
export interface ProtocolServerAdapter {
    create: (actions: Map<string, Action>, config: unknown, securityAccess: SecurityAccess, app: any) => void;
}
