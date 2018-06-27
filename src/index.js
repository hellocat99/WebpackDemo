import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/index.css';
import { getPeopleCount } from './util/api.js';
import { getPeopleArray } from './util/api';

const tsIcon = require('../images/preference_bg.png');

const activitys = [
    {
        time: '2017.6',
        info: '十渡'
    },
    {
        time: '2017.9',
        info: '古北水镇'
    },
    {
        time: '2016.11',
        info: '水立方'
    },
    {
        time: '2015.9',
        info: '动物园'
    },
    {
        time: '2014.9',
        info: '紫竹院'
    }
]

const cprops = { //定义一个对象
    name: 'cqs',
    age: '25'
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            liked: true
        };
    }
    handleClick() {
        this.setState({ liked: !this.state.liked });
    }
    render() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <div className="bg">
                <h1 className="container"> Hello, world! </h1>
                <section>
                    <p>段落1。</p>
                    <p>段落2。段落2。段落2。段落2。段落2。段落2。段落2。段落2。段落2。段落2。段落2。段落2。</p>
                    <h4>今天出去玩了，玩的很开心</h4>
                    <p onClick={this.handleClick.bind(this)}><span>我 {text} 这次的旅行. </span><span className="link">(点击切换)</span><span>.</span></p>
                    <select>
                        <option value={1}>1亿</option>
                        <option value={2}>2亿</option>
                    </select>
                    <div className="content-timeline">
                        {activitys.map(item => {
                            return (
                                <p><span>{item.time}</span><span className="dot"></span><span>{item.info}</span></p>
                            )
                        })}
                    </div>
                </section>
                <input
                    autocomplete="off"
                    className="needsclick"
                    type="phone"
                    placeholder='美女加下微信呗'
                    maxLength={11}
                />
                <div className="header-info">
                    <div>
                        <h4>参加人数(人)</h4>
                        <p>{getPeopleCount()}</p>
                    </div>
                    <div>
                        <h4>参与同学名单</h4>
                        <p>{getPeopleArray()}</p>
                    </div>
                </div>
                <footer>
                    <p>作者：{this.props.author}</p>
                    <p>&copy;不约</p>
                </footer>
            </div>
        )
    }
}
ReactDom.render(
    <App author="yang***" />,
    document.getElementById('root')
)