const btnFree = document.getElementById('btnFree');
const btnPro = document.getElementById('btnPro');
const btnPremium = document.getElementById('btnPremium');

const free = document.getElementById('free');
const pro = document.getElementById('pro');
const premium = document.getElementById('premium');

const vibralText = document.getElementById('vibralText');
const orderBtn = document.getElementById('orderBtn');

let selectedTariff = 'Pro';

vibralText.textContent = 'Вы выбрали: ' + selectedTariff;
orderBtn.textContent = 'Оформить ' + selectedTariff;
free.classList.remove('tariff_active');
pro.classList.add('tariff_active');
premium.classList.remove('tariff_active');

btnFree.addEventListener('click', () => {
  selectedTariff = 'Free';

  vibralText.textContent = 'Вы выбрали: ' + selectedTariff;
  orderBtn.textContent = 'Оформить ' + selectedTariff;

  free.classList.add('tariff_active');
  pro.classList.remove('tariff_active');
  premium.classList.remove('tariff_active');
});
btnPro.addEventListener('click', () => {
  selectedTariff = 'Pro';

  vibralText.textContent = 'Вы выбрали: ' + selectedTariff;
  orderBtn.textContent = 'Оформить ' + selectedTariff;

  free.classList.remove('tariff_active');
  pro.classList.add('tariff_active');
  premium.classList.remove('tariff_active');
});
btnPremium.addEventListener('click', () => {
  selectedTariff = 'Premium';

  vibralText.textContent = 'Вы выбрали: ' + selectedTariff;
  orderBtn.textContent = 'Оформить ' + selectedTariff;

  free.classList.remove('tariff_active');
  pro.classList.remove('tariff_active');
  premium.classList.add('tariff_active');
});


