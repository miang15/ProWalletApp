const API_URL = 'http://52.14.18.78/api';

const Urls = {
  API_URL,
  signUp: `${API_URL}/xanpool/signup`,
  request_phone_verification: `${API_URL}/xanpool/phone/verify`,
  complete_phone_verification: `${API_URL}/xanpool/phone/verify/complete`,
  charge_money: `${API_URL}/flutter/charge/mobile`,
  charge_bank: `${API_URL}/flutter/charge/bank`,
  payout_bak: `${API_URL}/flutter/payout/bank`,
  money_payout: `${API_URL}/flutter/payout/mobile`,
  rate: `${API_URL}/flutter/rate`,
  payout_fee: `${API_URL}/flutter/payout/fee`,
};
export default Urls;
