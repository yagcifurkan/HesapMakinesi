function fonksiyon1() {
  var sifre = "";

  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789";

  for (let i = 1; i <= document.hesapmakinesi.sonuc.value; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    sifre += str.charAt(char);
  }

  document.hesapmakinesi.sonuc.value = sifre;
}

function fonksiyon2() {
  if(document.hesapmakinesi.sonuc.value%2==0){
    document.hesapmakinesi.sonuc.value = 0
  }

  if(document.hesapmakinesi.sonuc.value%2==1){
    document.hesapmakinesi.sonuc.value = 1
  }
}

function log10() {
  document.hesapmakinesi.sonuc.value = Math.log10(document.hesapmakinesi.sonuc.value);
}

function kok() {
  document.hesapmakinesi.sonuc.value = Math.sqrt(document.hesapmakinesi.sonuc.value);
}

function sin() {
  document.hesapmakinesi.sonuc.value = Math.sin(document.hesapmakinesi.sonuc.value);
}

function cos() {
  document.hesapmakinesi.sonuc.value = Math.cos(document.hesapmakinesi.sonuc.value);
}

function x10() {
  document.hesapmakinesi.sonuc.value = Math.pow(10, document.hesapmakinesi.sonuc.value);
}

function x2() {
  document.hesapmakinesi.sonuc.value = Math.pow(2, document.hesapmakinesi.sonuc.value);
}

function mutlakdeger() {
  document.hesapmakinesi.sonuc.value = Math.abs(document.hesapmakinesi.sonuc.value);
}

function yuzde() {
  document.hesapmakinesi.sonuc.value = document.hesapmakinesi.sonuc.value%10;
}

function sayi(value) {
  document.hesapmakinesi.sonuc.value += value;
}

function sil() {
  var a = document.hesapmakinesi.sonuc.value;
  document.hesapmakinesi.sonuc.value = a.substr(0, a.length - 1);
}

function sifirla() {
  document.hesapmakinesi.sonuc.value = "";
}

function esittir() {
  document.hesapmakinesi.sonuc.value = eval(document.hesapmakinesi.sonuc.value);
}
