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
    this.cityData;
    this.cityDataSort;
    this.cityAjax();
    self = this;
  }
  btn() {
    if (this.nameMessage.innerHTML == this.succes && this.mailMessage.innerHTML == this.succes && this.phoneMessage.innerHTML == this.succes) {
      btn.disabled = false;
    }
  }
  cityAjax() {
    $.ajax({
      url: 'city.json',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        self.cityData = data;
        self.citySort();
      },
      error: function (e) {
        console.log(e);
      }
    });
  }
  citySort() {
    this.cityDataSort = this.cityData['city'];
    this.cityDataSort.sort(function (a, b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    });
  }
  cityCheck() {
    this.val = document.getElementById('city').value;
    let cityHtml = document.getElementById('cityMessage');
    cityHtml.innerHTML = '';

    for (let i = 0; i < this.cityDataSort.length; i++) {
      if (this.val == this.cityDataSort[i].name.substring(0, this.val.length) && this.val.length > 1) {
        cityHtml.setAttribute('style', 'display: block');
        cityHtml.innerHTML += '<div>' + this.cityDataSort[i].name + '</div>';
      }
    };

    $('#cityMessage').click(function (e) {
      document.getElementById('city').value = e.target.innerHTML;
      cityHtml.innerHTML = '';
      cityHtml.setAttribute('style', 'display: none');
    });
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
      case 'city':
        self.cityCheck();
        break
      default:
        break
    };
  }
}

let checkForm = new Validate();
document.addEventListener('keyup', checkForm.init.bind(this));

for (let i = 0; i <= 4; i++) {
  $(document).on('click', '#topTab' + i, function (event) {
    $('.topTabActive').removeClass('topTabActive')
    $('#topTab' + i).addClass('topTabActive');
    $('.allTabActive').removeClass('allTabActive')
    $('#tab' + i).addClass('allTabActive');
  });
};