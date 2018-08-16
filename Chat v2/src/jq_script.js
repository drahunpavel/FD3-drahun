import $ from "jquery";


/* Предварительно скрываем поле для комуникации */
$('div#communication').hide();


/* Выбираем пользователя, которому будем слать сообщение */
$('li.list-group-item').click(function(){

	var userName = $(this).text();

	$('span#basic-addon1').text(userName);
});


/* Отправляем сообщение */
$('#btn_send_message').click(function(){
	
	var userName = $('span#basic-addon1').text();
	var textMessage = $('input#message_text').val();

	var message = '<h4>\
						<span class="label label-info">' + userName +'</span>\
						<span>' + textMessage + '</span>\
				  </h4>';

	$('div#chatPanel').append(message);

	$('input#message_text').val('');
});


/* авторизация */
$('button#btn_authorize').click(function(){

	var authorizedName = $('input#input_auth_name').val();

	// alert(authorizedName);

	if (authorizedName !== '' && authorizedName !== undefined ) {

		var authorizedUserItem = $('<li class="list-group-item">' + authorizedName + '</li>');

		$('div#users_panel > ul').append(authorizedUserItem);

		/*  подписываем новый элемент на событие */
		authorizedUserItem.on('click', 
				function(){
					var userName = $(this).text();

					$('span#basic-addon1').text(userName);
				}
			);

		/* скрываем поле авторизации */
		$('div#authotize').hide();

		/* отображаем поле для коммуникции */
		$('div#communication').show();

	} else {
		alert('Поле не может быть пустым');
	}

});
