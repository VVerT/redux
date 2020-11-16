import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.props.sendText(e.target.value)
            // Потрібно встановити пакет gh-pages в проект
        // дописати два скрипти
        //  "predeploy": "npm run build",
        //     "deploy": "gh-pages -d build"
        //
        //
        // "homepage": "http://  Загальна назва твого репозиторіюв  мене: wert.github.io/Назва проекту"
        //  Проект має бути уже закомічений в гіт(хоча не знаю чи це впливає, але певно так було в туторіалі).
        // Запускаєш npm run deploy i очікуєш на повідомлення Published.
        // І він готовий на адресі  в "homepage"
    }

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <h1>{this.props.count}</h1>
                <h1>{this.props.textData}</h1>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.props.textData}
                />
            </div>
        );
    }
}

export default Main;