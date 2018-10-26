var text = "'Isn't this game really cool' - he asked.\nShe said: 'Well, it's so hard and I can't pass the first level!'";

text = text.replace(/\'(?![a-z])/g, '\"');

console.log(text);


class Validate {
  constructor() {
    this.namePattern = /^[A-ZА-ЯЁ][a-zа-яё]{1,20}$/;
    this.mailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,5}$/;
    this.phonePattern = /^\+\d\(\d{3}\)\d{3}\-\d{4}$/;
    this.val = '';
    this.mailMessage = document.getElementById('mailMessage');
    this.nameMessage = document.getElementById('nameMessage');
    this.phoneMessage = document.getElementById('phoneMessage');
    this.succes = 'ok';
    this.error = 'no';
    self = this;
  }
  btn() {
    if (this.nameMessage.innerHTML == this.succes && this.mailMessage.innerHTML == this.succes && this.phoneMessage.innerHTML == this.succes) {
      btn.disabled = false;
    }
  }
  mailCheck() {
    this.val = document.getElementById('mail').value;

    if (this.mailPattern.test(this.val)) {
      this.mailMessage.innerHTML = this.succes;
      self.btn();
    } else {
      this.mailMessage.innerHTML = this.error
    };
  }
  nameCheck() {
    this.val = document.getElementById('name').value;

    if (this.namePattern.test(this.val)) {
      this.nameMessage.innerHTML = this.succes
      self.btn();
    } else {
      this.nameMessage.innerHTML = this.error
    };
  }
  phoneCheck() {
    this.val = document.getElementById('phone').value;

    if (this.phonePattern.test(this.val)) {
      this.phoneMessage.innerHTML = this.succes
      self.btn();
    } else {
      this.phoneMessage.innerHTML = this.error
    };
  }
  init(e) {
    switch (e.path[0].id) {
      case 'mail':
        self.mailCheck();
        break
      case 'name':
        self.nameCheck();
        break
      case 'phone':
        self.phoneCheck();
        break
      default:
        break
    };
  }
}

let checkForm = new Validate();
document.addEventListener('keyup', checkForm.init.bind(this));