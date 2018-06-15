//Описание React-компонента, опция propTypes
var Allgoods = React.createClass({

    displayName: 'Allgoods',

    propTypes: {

        goods: React.PropTypes.arrayOf( //React.PropTypes.arrayOf(React.PropTypes.тип) — массив значений указанного типа
            React.PropTypes.shape({//React.PropTypes.shape({имя:тип,...}) — объект (хэш) с указанными типами значений
                keys: React.PropTypes.number.isRequired,
                title: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                quantity: React.PropTypes.number.isRequired,
            })
        ),

        title: React.PropTypes.shape({
            keys: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.string.isRequired,
            url: React.PropTypes.string.isRequired,
            quantity: React.PropTypes.string.isRequired,
        })

    },

    render: function () {

        var goods = this.props.goods;

        var title = this.props.title;

        var goodsKey = React.DOM.table({ className: 'GoodsTable' },
        
            React.DOM.thead({ key: title.keys, className: 'Title' },
                React.DOM.tr(null,
                    React.DOM.td(null, title.title),
                    React.DOM.td(null, title.url),
                    React.DOM.td(null, title.price),
                    React.DOM.td(null, title.quantity), ), ),

            React.DOM.tbody({ className: 'Goods' },
                goods.map(function (v, i) {
                    return React.DOM.tr({ key: v.keys, className: 'Goods' + v.keys },
                        React.DOM.td(null, v.title),
                        React.DOM.td(null, React.DOM.a({ href: v.url }, 'url')),
                        React.DOM.td(null, v.price),
                        React.DOM.td(null, v.quantity),
                    )
                })
            )
        );

        return React.DOM.div(null,
            React.DOM.div({ className: 'Shop' }, this.props.shop),
            React.DOM.div(null, goodsKey),
        );

    },



});