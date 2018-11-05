let Api = {
	add: 'review.add.json',
	delete: 'review.delete.json',
	list: 'review.list.json',
	submit: 'review.submit.json',
	error: 'error.json'
};
class Review {
	constructor() {
		this.itemsCount = 0;
		this.totalAmount = 0;
		this.items = [];
		this.data;
		this.dataSend;
		this.setEvents();
	}
	onAdd(event) {
		let id = $(event.currentTarget).attr('id');

		let dataSend = {
			userId: 123,
			userTextValue: $('#message').val(),
		};

		if (id) {
			this.request(Api.add, dataSend)
		};
	}
	onSubmit(event) {
		let dataSend = {
			id_comment: 123
		};
		this.request(Api.submit, dataSend);
	}
	onList(event) {
		this.request(Api.list);
	}
	onDelete(event) {
		let dataSend = {
			id_comment: $(event.currentTarget).attr('id')
		};
		console.log(dataSend)
		this.request(Api.delete, dataSend);
	}
	setEvents() {
		$('#btn-add').on('click', this.onAdd.bind(this));
		$('#btn-submit').on('click', this.onSubmit.bind(this));
		$('#btn-list').on('click', this.onList.bind(this));
		$('.btn-delete').on('click', this.onDelete.bind(this));
	}
	addReview() {
		$('#alert').html(this.data.userMessage);
		console.log(this.dataSend.userTextValue)
	}
	submitReview() {
		$('#alert').html(this.data.result);
		console.log(this.dataSend)
	}
	listReview() {
		$('.review').html('');
		for (let i = 0; i < this.data.comments.length; i++) {
			$('.review').html($('.review').html() + '<p class="reviewUnit">ID коментария ' + this.data.comments[i].id_comment + '<span class="btn-delete" id="comment' + (i + 1) + '">X</span> <br>' + this.data.comments[i].text + '</p>');
		};
		this.setEvents();
	}
	deleteReview() {
		$('#' + this.dataSend.id_comment).parent('p').remove();
	}
	process(url, data) {
		if (data.result) {
			switch (url) {
				case Api.add:
					this.addReview();
					break;
				case Api.delete:
					this.deleteReview();
					break;
				case Api.list:
					this.listReview();
					break;
				case Api.submit:
					this.submitReview();
					break;
				case Api.error:
					console.log(data.error_message)
					break;
			}
		}
	}
	request(url, dataSend) {
		$.post({
			url: url,
			dataType: 'json',
			context: this,
			success: function (data) {
				this.data = data;
				this.dataSend = dataSend;
				this.process(url, data, dataSend);
			},
			error: function (e) {
				this.request(Api.error);
			}
		});
	}
};

$(document).ready(function () {
	window.review = new Review();
});