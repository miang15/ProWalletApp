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

export async function resetPassword(mydata) {
  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.resetPassword,
    headers: {},
  };
  return await axios.request(options);
}

export async function validateOTP(mydata) {
  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.validateOTP,
    headers: {},
  };
  return await axios.request(options);
}

export async function resendOTP(mydata) {
  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.resendOTP,
    headers: {},
  };
  return await axios.request(options);
}

export async function getUsers(email) {
  const options = {
    method: 'Get',
    data: {
      email: email,
    },
    url: Urls.getUsers + `?email=${email}`,
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
export async function chargeMoney(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.charge_money,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function chargeBank(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.charge_bank,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function payoutBank(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', mydata);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.payout_bank,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function moneyPayout(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.money_payout,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function cashPay(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.cashPay,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function cashWithdraw(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');
  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.cashWithdraw,
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
    url: Urls.coinChart + `?coin_id=${coinId}&days=${day}`,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinCharge(currency) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: {
      currency: currency,
    },
    url: Urls.coinCharge,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinOrder(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.coinOrder,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}

export async function coinWithdraw(mydata) {
  let token = await AsyncStorage.getItem('LOGINTOKEN');

  console.log('BODY DATA', token);

  const options = {
    method: 'POST',
    data: mydata,
    url: Urls.coinWithdraw,
    headers: {
      Authorization: token,
    },
  };
  return await axios.request(options);
}
