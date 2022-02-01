const API_URL = 'http://52.14.18.78/api';

const Urls = {
  API_URL,
  signUp: `${API_URL}/signup`,
  login: `${API_URL}/login`,
  forgotPassword: `${API_URL}/forgot/password`,
  request_phone_verification: `${API_URL}/xanpool/phone/verify`,
  complete_phone_verification: `${API_URL}/xanpool/phone/verify/complete`,
  charge_money: `${API_URL}/cash/charge/mobile`,
  charge_bank: `${API_URL}/cash/charge/bank`,
  payout_bank: `${API_URL}/cash/payout/bank`,
  money_payout: `${API_URL}/cash/payout/mobile`,
  cashPay: `${API_URL}/cash/pay`,
  cashWithdraw: `${API_URL}/cash/withdraw`,
  rate: `${API_URL}/cash/rate`,
  payout_fee: `${API_URL}/cash/payout/fee`,

  coinPrices: `${API_URL}/coin/prices`,
  coin: `${API_URL}/coin/coin`,
  coinChart: `${API_URL}/coin/coin/chart`,
  coinCharge: `${API_URL}/coin/charge`,
  coinOrder: `${API_URL}/coinbase/order`,
  coinWithdraw: `${API_URL}/coin/withdraw`,


};
export default Urls;
