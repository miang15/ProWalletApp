import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Urls from './urls';

export async function signUp(RegisterData) {
  const options = {
    method: 'POST',
    data: {
      email: RegisterData.Email,
      first_name: RegisterData.firstName,
      last_name: RegisterData.lastName,
      password: RegisterData.password,
      phone_number: RegisterData.phone,
      device: RegisterData.device,
    },
    url: Urls.signUp,
    headers: {},
  };
  return await axios.request(options);
}

export async function login(loginData) {
  const options = {
    method: 'POST',
    data: {
      email: loginData.Email,
      password: loginData.password,
      device: loginData.device,
    },
    url: Urls.login,
    headers: {},
  };
  return await axios.request(options);
}

export async function forgotPassword(email) {
  const options = {
    method: 'POST',
    data: {
      email: email,
    },
    url: Urls.forgotPassword,
    headers: {},
  };
  return await axios.request(options);
}

export async function requestPhoneVerification() {
  var data = new FormData();
  data.append('id', `61e9053a9c291308887836e6`);
  data.append('phone', '3004699732');
  data.append('code', '+92');
  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.request_phone_verification,
  };
  return await axios.request(options);
}

export async function completePhoneVerification(signUp) {
  var data = new FormData();
  data.append('id', `61e9053a9c291308887836e6`);
  data.append('code', '866756');
  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.complete_phone_verification,
  };
  return await axios.request(options);
}
export async function chargeMoney() {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      currency: `XAF`,
      network: 'mobile_money_uganda',
      amount: '500',
      email: 'abcd@gmail.com',
      phone_number: '123456789',
      fullname: 'mian nouman',
    },
    url: Urls.charge_money,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function chargeBank() {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      currency: `NGN`,
      network: 'bank',
      account_bank: '044',
      amount: '200',
      email: 'xyz@gmail.com',
      phone_number: '123321123',
      fullname: 'mian nouman',
      type: 'debit_ng_account',
      account_number: '0690000037',
    },
    url: Urls.charge_bank,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function payoutBank() {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      currency: `NGN`,
      account_bank: '044',
      account_number: '0690000037',
      amount: '200',
      email: 'xyz@gmail.com',
      phone_number: '123321123',
      fullname: 'mian nouman',
    },
    url: Urls.payout_bank,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function moneyPayout() {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      currency: `NGN`,
      amount: '200',
      email: 'xyz@gmail.com',
      phone_number: '123321123',
      fullname: 'mian nouman',
    },
    url: Urls.money_payout,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function rate(from, to) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'Get',
    // data: {
    //   from: from,
    //   to: to,
    // },
    url: Urls.rate + `?from=${from}&to=${to}`,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function payoutFee(amount, currency, type) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'Get',
    // data: {
    //   amount: amount,
    //   currency: currency,
    //   type: type
    // },
    url:
      Urls.payout_fee + `?amount=${amount}&currency=${currency}&type=${type}`,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinPrices() {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'Get',
    url: Urls.coinPrices,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coin(coinId) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'Get',
    // data: {
    //   amount: amount,
    //   currency: currency,
    //   type: type
    // },
    url: Urls.coin + `?coin_id=${coinId}`,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinChart(coinId, day) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'Get',
    // data: {
    //   amount: amount,
    //   currency: currency,
    //   type: type
    // },
    url: Urls.coinChart + `?coin_id=${coinId}&days=${day}`,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinCharge() {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      currency: "BTC",
    },
    url: Urls.coinCharge,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinOrder() {

  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      type: "market",
      side: "sell",
      pair: "BTC-USD",
      amount: "1",
      price: ""
    },
    url: Urls.coinOrder,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}
