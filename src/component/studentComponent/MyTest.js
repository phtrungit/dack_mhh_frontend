import React, { Component } from 'react';
import '../../styles/studentListExam.css';

var tabData = [
    { name: 'Toán', isActive: true },
    { name: 'Lý', isActive: false },
    { name: 'Hóa', isActive: false },
    { name: 'Sinh', isActive: false },
    { name: 'Văn', isActive: false },
    { name: 'Sử', isActive: false },
    { name: 'Địa', isActive: false },
    { name: 'Tiếng Anh', isActive: false }
];

var infoUser = {
    name: 'Nguyễn Trung Tài',
    phone: '0374229190',
    email: 'tainguyen197.ntt@gmail.com'
};



class Tabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs nav-justified">
                {tabData.map(function (tab) {
                    return (
                        <Tab data={tab} isActive={this.props.activeTab === tab} handleClick={this.props.changeTab.bind(this, tab)} />
                    );
                }.bind(this))}
            </ul>
        );
    }
};
class Tab extends React.Component {
    render() {
        return (
            <li onClick={this.props.handleClick} className={this.props.isActive ? "nav-item nav-link active" : "nav-item nav-link "}>
                <a href="#">{this.props.data.name}</a>
            </li>
        );
    }
};

class Table extends React.Component {
    render() {
        return (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                {this.props.activeTab.name === 'Lý' ?

                    <div className="imgEmtyTest">
                        <div>
                            <img src={require('../../images/emptytest.gif')}></img>
                        </div>
                        <div>Bạn chưa có đề thi nào!
                            </div>
                    </div>
                    : null}
                {this.props.activeTab.name === 'Toán' ?
                    <div>
                        <div className="row ">
                            <div className="testinfo">
                                <img className="imgtestinfo" src={require('../../images/course_1.jpg')} alt="https://unsplash.com/@kellybrito" />
                                <div className=" text-center">
                                    <div className=""><a href="courses.html">A complete guide to design</a></div>
                                    <div className="">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src={require('../../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                                    </div>
                                    <div className="">Michael Smith, <span>Author</span></div>
                                    <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                                </div>
                            </div>
                            <div className="testinfo">
                                <img className="imgtestinfo" src={require('../../images/course_1.jpg')} alt="https://unsplash.com/@kellybrito" />
                                <div className=" text-center">
                                    <div className=""><a href="courses.html">A complete guide to design</a></div>
                                    <div className="">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src={require('../../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                                    </div>
                                    <div className="">Michael Smith, <span>Author</span></div>
                                    <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                                </div>
                            </div>
                            <div className="testinfo">
                                <img className="imgtestinfo" src={require('../../images/course_1.jpg')} alt="https://unsplash.com/@kellybrito" />
                                <div className=" text-center">
                                    <div className=""><a href="courses.html">A complete guide to design</a></div>
                                    <div className="">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src={require('../../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                                    </div>
                                    <div className="">Michael Smith, <span>Author</span></div>
                                    <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                                </div>
                            </div>
                             <div className="testinfo">
                                <img className="imgtestinfo" src={require('../../images/course_1.jpg')} alt="https://unsplash.com/@kellybrito" />
                                <div className=" text-center">
                                    <div className=""><a href="courses.html">A complete guide to design</a></div>
                                    <div className="">Adobe Guide, Layes, Smart Objects etc...</div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="course_author_image">
                                        <img src={require('../../images/author.jpg')} alt="https://unsplash.com/@mehdizadeh" />
                                    </div>
                                    <div className="">Michael Smith, <span>Author</span></div>
                                    <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    : null}
                {this.props.activeTab.name === 'Hóa' ?
                    <section className="panel panel-danger">
                        <h2 className="panel-heading">Content 3</h2>
                        <p className="panel-body">Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</p>
                        <p className="panel-body">Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli arugula.</p>
                    </section>
                    : null}
            </div>
        );
    }
};

class MyTest extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { activeTab: tabData[0] };
        this.handleClick = this.handleClick.bind(this);
    }

    getInitialState() {
        return {
            activeTab: tabData[0]
        }
    }
    handleClick(tab) {
        this.setState({ activeTab: tab });
    }
    componentDidMount() {
        this.getInitialState();
    }
    render() {
        return (
            <div>
                <div className="">

                    <nav className="navbar navbar-expand-sm bg-dark justify-content-left">
                        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                            <a class="navbar-brand" href="#">Trang chủ</a>
                        </nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Thư viện</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bài thi</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link 3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link 4</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Đăng xuất</a>
                            </li>
                        </ul>
                        <div className="navbarMenu" >
                            <form className="form-inline" action="/action_page.php">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                                <button class="btn btn-success" type="submit">Search</button>

                            </form>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="avatar">
                        <img className="avatarcircle" src={require('../../images/teacher_3.jpg')}></img>
                    </div>
                    <div className="infoUser">
                        <div>
                            {infoUser.name}
                        </div>

                        <div>
                            {infoUser.email}
                        </div>
                    </div>
                    <div className="testHeader">
                        <div>Khóa học của tôi</div>
                    </div>
                    <div>
                        <Tabs activeTab={this.state.activeTab} changeTab={this.handleClick} />

                        <Content activeTab={this.state.activeTab} />

                    </div>
                </div>
            </div>
        );
    }
}

export default MyTest;
