//Описание React-компонента, опция propTypes
var AllGoodsComponent = React.createClass({

displayName: 'AllGoodsComponent',

//проверку типов для props компонента

propTypes: {
  //React.PropTypes.arrayOf(React.PropTypes.тип) — массив значений указанного типа
  goods:React.PropTypes.arrayOf(React.PropTypes.shape({//React.PropTypes.shape({имя:тип,...}) — объект (хэш) с указанными типами значений
  code:React.PropTypes.number.isRequired,
  title:React.PropTypes.string.isRequired,
  price:React.PropTypes.number.isRequired,
  url:React.PropTypes.string.isRequired,
  quantity:React.PropTypes.number.isRequired,
  })), 
  title:React.PropTypes.shape({
    code:React.PropTypes.number.isRequired,
    title:React.PropTypes.string.isRequired,
    price:React.PropTypes.number.isRequired,
    url:React.PropTypes.string.isRequired,
    quantity:React.PropTypes.number.isRequired,
  }),
},
//.isRequired — если указание какого-либо значения для данного свойства обязательно

render:function(){

//head
var title = this.props.title;
var title = React.DOM.tr({key:title.code, className:"tableHead"},
  React.DOM.td(null,title.title),
  React.DOM.td(null,title.price),
  React.DOM.td(null,title.url),
  React.DOM.td(null,title.quantity),
);   

//body
  var goodsCode=[];//массив под весь товар
  goodsCode.push(title);
  this.props.goods.map((v) => {     //карточка товара  
    var itemCode = React.DOM.tr({key:v.code},
        React.DOM.td(null,v.title),
        React.DOM.td(null,v.price),
        React.DOM.td(null, React.DOM.a({href:v.url},"Фото")),
        React.DOM.td(null,v.quantity),
);
  goodsCode.push(itemCode);//
});


   return React.DOM.table(null,  
    React.DOM.tbody(null, goodsCode),          
  );
},

});