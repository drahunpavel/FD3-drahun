var React = require('react');
var ReactDOM = require('react-dom');

// var ee = new EventEmitter();

// var postal = require('postal');
// var channel = postal.channel();


var chat_messages = [
	{
		user: 'Саша Печкин',
		message: 'В четверг, четвертого числа...'
	},
	{
		user: 'Просто Вася',
		message: 'Считаю, что $ должен стоить 35 рублей.'
	},
	{
		user: 'Гость',
		message: 'Бесплатно. Скачать. Лучший сайт - http://codehand.ru'
	},
	{
		user: 'Гость42345',
		message: 'Ki:Theory – Enjoy The Silence (Depeche M'
	}
];

var users_array = [

	{
		user: 'Саша Печкин'
	},
	{
		user: 'Alex'
	},
	{
		user: 'Маша'
	},
	{
		user: 'Оксана'
	},
	{
		user: 'Просто Вася'
	}

];


/* Поле с сообщениями */
var ChatPanel = React.createClass({ 

	render : function () {

		var chat_messages = this.props.chat_messages;

		var	chatPanelTemplate = chat_messages.map( function(item, index) {
				
			return (
				<h4 key={index}>

					<span className="label label-info">{item.user}</span>
					<span style={{marginLeft: '10px'}}>{item.message}</span>

				</h4>
			)
		});
		
		return (
			<div id = "chatPanel" className="col-sm-7 col-sm-offset-1">

					{chatPanelTemplate}

			</div>
		);
	}
});

/* Список пользователей */
var UsersPanel = React.createClass({

	render : function () {
		var users_array = this.props.users_array;

		var usersPanelTemplate = users_array.map( function(item, index) {

			return (
				  <li className="list-group-item" key={index}>{item.user}</li>
				)
		} );

		return (
			<div id="users_panel" className="col-sm-3">
				<ul className="list-group" >

					{usersPanelTemplate}

				</ul>
			</div>
		);
	}
});

/* отправка сообщений  */
var CommunicationPanel = React.createClass({

	render : function() {
		return (
				<div id="communication"> 
					<div className="input-group">
					  	<span className ="input-group-addon" id="basic-addon1">User name</span>

					 	<input type ="text" 
					 			className="form-control" 
					 			placeholder="Message text" 
					 			id = "message_text"
					 			aria-describedby="basic-addon1" />

			      		<span className="input-group-btn">
				        	<button className = "btn btn-default" 
				        			id = "btn_send_message" 
				        			type = "button">Отправить сообщение</button>
				      	</span>
					</div>
				</div>
			)
	}

});

/* Авторизация */
var AuthorizationPanel = React.createClass({

	render : function(){
		return (
				<div id="authotize">
					<div className="input-group">
					 	<input type ="text" 
					 			className="form-control" 
					 			placeholder="Введите имя пользователя"
					 			id="input_auth_name" 
					 			aria-describedby="basic-addon1" />
					 	
			      		<span className="input-group-btn" id="authorization_point">
				        	<button className="btn btn-default"
				        			id="btn_authorize"  
				        			type="button">Войти</button>

				      	</span>
					</div>
				</div>
			)
	}

});

/* Расположение Авторизации и Коммуникации в одном месте, для позиционирования*/
// col-sm-6 - если привязывать css - position: fixed
var ControlRoom = React.createClass({

	render : function(){
		return (
			<div className="col-sm-8 col-sm-offset-2" id="controlRoom">

				<div className="well">

					<CommunicationPanel />

					<AuthorizationPanel />
				</div>
			</div>
		);
	}

});


/* Тело приложения */
var App = React.createClass({

	render : function(){
		return (
			<div className="container">
				<div className="app" className="">

					<ChatPanel chat_messages = {chat_messages} />

					<UsersPanel users_array = {users_array} />

					<ControlRoom />

				</div>
			</div>
		);
	}
});


ReactDOM.render(
	<App />
	,
	document.getElementById('root')
);