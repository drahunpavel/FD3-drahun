var Goodsblock = React.createClass({

    displayName: "Goodsblock",

    render:function(){
        //console.log(this.props.item);
        return React.DOM.div({className:'ItemForm'},
            React.DOM.div({className:''},
                React.DOM.img({src:this.props.item.imgURL})
                //React.DOM.img({src:this.state.src})
            ),
            React.DOM.div({className:'Field ItemURL'},
                React.DOM.label(null,'URL фото: ',
                    React.DOM.input({type:'text',defaultValue:this.props.item.imgURL,disabled:this.props.lockEdit}),
                    (this.state.lockEdit)?null:React.DOM.input({type:'file',accept:'image/*,image/jpeg',onChange:this.selectFile}),
                ),
                React.DOM.span({className:'ErrorText'},this.state.chImgURL.errText)
            ),

            React.DOM.div({className:'Field Title'},
                React.DOM.label(null,'Название товара:',
                    React.DOM.input({type:'text',defaultValue:this.props.item.title,disabled:this.props.lockEdit,onChange:this.changeTitle})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chTitle.errText)
            ),

            React.DOM.div({className:'Field Description',},
                React.DOM.label(null,'Описание товара: ',
                    React.DOM.textarea({rows:'10',cols:'30',defaultValue:this.props.item.description,disabled:this.props.lockEdit,onChange:this.changeDescription})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chDescription.errText)
            ),

            React.DOM.div({className:'Field Price'},
                React.DOM.label(null,'Цена:',
                    React.DOM.input({type:'text',defaultValue:this.props.item.price,disabled:this.props.lockEdit,onChange:this.changePrice})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chPrice.errText)
            ),

            React.DOM.div({className:'Field Count'},
                React.DOM.label(null,'Количество:',
                    React.DOM.input({type:'number',defaultValue:this.props.item.count,disabled:this.props.lockEdit,onChange:this.changeCount})
                ),
                React.DOM.span({className:'ErrorText'},this.state.chCount.errText)
            ),

            React.DOM.div({className:'Field Buttoms'},
                React.DOM.input({type:'button',value:'Отмена',onClick:this.cancelForm}),
                (this.state.lockEdit)?null:React.DOM.input({type:'button',value:'Сохранить',onClick:this.saveItem}),
            ),
        );
    },
});