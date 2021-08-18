import { EMAIL } from '../actionTypes';
import { generateWatcher } from './_generate';
import services from 'store/services';

export const verify = generateWatcher({
  actionType: EMAIL.VERIFY,
  service: services.email.verify,
});

export const findSingle = generateWatcher({
  actionType: EMAIL.FIND_SINGLE,
  service: services.email.find,
});

export const findBulk = generateWatcher({
  actionType: EMAIL.FIND_BULK,
  service: services.email.find,
});
