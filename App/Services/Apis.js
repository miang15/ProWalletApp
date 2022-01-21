import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Urls from './urls';

export async function signUp(signUp) {
  var data = new FormData();
  let number = Math.floor(Math.random() * 100) + 1;
  data.append('email', `pepperPro${number}@gmail.com`);
  data.append('firstName', 'test');
  data.append('lastName', 'test');
  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.signUp,
    headers: {},
  };
  return await axios.request(options);
}

export async function requestPhoneVerification(signUp) {
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
export async function chargeMoney(signUp) {
  var data = new FormData();
  data.append('currency', `XAF`);
  data.append('network', 'mobile_money_uganda');
  data.append('amount', '100');
  data.append('email', 'test@gmail.com');
  data.append('phone_number', '123123123');
  data.append('fullname', 'test test');

  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.charge_money,
  };
  return await axios.request(options);
}

export async function chargeBank(signUp) {
  var data = new FormData();
  data.append('currency', `NGN`);
  data.append('network', 'bank');
  data.append('account_bank', '044');
  data.append('amount', '100');
  data.append('email', 'test@gmail.com');
  data.append('phone_number', '123123123');
  data.append('fullname', 'test test');
  data.append('type', 'debit_ng_account');
  data.append('account_number', '0690000037');

  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.charge_bank,
  };
  return await axios.request(options);
}

export async function payoutBank(signUp) {
  var data = new FormData();
  data.append('currency', `NGN`);
  data.append('network', 'bank');
  data.append('account_bank', '044');
  data.append('amount', '100');
  data.append('email', 'test@gmail.com');
  data.append('phone_number', '123123123');
  data.append('fullname', 'test test');
  data.append('type', 'debit_ng_account');
  data.append('account_number', '0690000037');

  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.payout_bak,
  };
  return await axios.request(options);
}

export async function moneyPayout(signUp) {
  var data = new FormData();
  data.append('currency', `NGN`);
  data.append('amount', '100');
  data.append('email', 'test@gmail.com');
  data.append('phone_number', '123123123');
  data.append('fullname', 'test test');

  console.log('BODY DATA', data);

  const options = {
    method: 'POST',
    data: data,
    url: Urls.money_payout,
  };
  return await axios.request(options);
}

export async function rate(from, to) {
  var data = new FormData();
  data.append('from', `XAF`);
  data.append('to', 'USD');

  console.log('BODY DATA', data);

  const options = {
    method: 'Get',
    data: data,
    url: Urls.rate + `?from=${from}&to=${to}`,
  };
  return await axios.request(options);
}

export async function payoutFee(amount, currency, type) {
  var data = new FormData();
  data.append('amount', `100`);
  data.append('currency', 'NGN');
  data.append('type', 'account');

  console.log('BODY DATA', data);

  const options = {
    method: 'Get',
    data: data,
    url:
      Urls.payout_fee + `?amount=${amount}&currency=${currency}&type=${type}`,
  };
  return await axios.request(options);
}
