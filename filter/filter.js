var FullList = React.createClass({

    displayName: "FullList",

    //Описание React-компонента
    propTypes: {
        fullList: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    // Инициализилуем значения стейтов
    getInitialState: function () {
        return {
            stateFullList: this.props.fullList.slice(),
            stateFullListSort: this.props.fullList.slice().sort(),
            stateInputText: '',
            checkboxStatus: false,
        }
    },

    //функция обработки текста с поля input 
    inputTextChange: function (EO) {
        this.changeStatelist(EO.target.value, this.state.checkboxStatus);
    },

    //функция обработки checkbox
    checkboxСlicked: function (EO) {
        this.changeStatelist(this.state.stateInputText, EO.target.checked);
    },

    //функция сортировки массива с учетом checkboxСlicked, inputTextChange
    changeStatelist: function (inputText, checked) {
        var newStateList = this.props.fullList.filter((v) => v.includes(inputText));//создание нового списка с проверкой на введенные символы

        checked ? newStateList.sort() : null;

        this.setState({ stateFullList: newStateList, stateInputText: inputText, checkboxStatus: checked, });
    },


    //
    render: function () {
        var displayList = this.state.stateFullList.map(function (v) {
            return React.DOM.li({ key: v }, v)
        });

        return React.DOM.div({ className: "FullList" },
            React.DOM.label(null, 'Cортировать',
                React.DOM.input({ type: 'checkbox', onClick: this.checkboxСlicked }, null)),


            React.DOM.input({ className: "text", type: 'text', onChange: this.inputTextChange }, null),

            React.DOM.div({ className: "list" }, displayList)
        );
    }
});