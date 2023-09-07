import {LOGINED} from './Constants';
export function logined(status) {
  return {
    type: LOGINED,
    data: status,
  };
}
