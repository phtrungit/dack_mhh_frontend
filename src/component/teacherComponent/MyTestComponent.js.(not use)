import React, { Component } from 'react';
import '../../styles/navbarStyle.css';

var tabData = [
    { name: 'Toán', isActive: true },
    { name: 'Lý', isActive: false },
    { name: 'Hóa', isActive: false }
];

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
                {this.props.activeTab.name === 'Toán' ?
                    <section className="panel panel-success">
                        <br></br>
                        <br></br>
                        <div className="panel-body">
                            <div class="card">
                                <Table></Table>
                            </div>
                        </div>
                    </section>
                    : null}
                {this.props.activeTab.name === 'Lý' ?
                    <section className="panel panel-warning">
                        <h2 className="panel-heading">Content 2</h2>
                        <p className="panel-body">Atlantic herring jellynose fish Siamese fighting fish pollock: cobbler snakehead sea raven! Freshwater shark sergeant major clingfish sweeper galjoen fish mudfish longjaw mudsucker. Death Valley pupfish pomfret electric ray zingel African glass catfish squawfish yellowtail snapper grunt sculpin.</p>
                        <p className="panel-body">Pike ribbon sawtail fish common tunny, yellowfin grouper pearl perch mooneye three-toothed puffer Bengal danio. Black sea bass turbot, "madtom swallower northern anchovy Red whalefish; Redhorse sucker." Filefish yellow jack Japanese eel longfin smelt stargazer saury yellow weaver flounder white croaker pink salmon. Pacific herring, whiff pink salmon jack wallago! Yellow jack alfonsino pike chubsucker, yellowtail collared dogfish rivuline tailor eelblenny silver carp; smalltooth sawfish--sea chub powen giant gourami. Inconnu false trevally pompano, half-gill roundhead black dragonfish damselfish: king of herring.</p>
                    </section>
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

class MyTestComponent extends React.Component {
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
                <div className ="testHeader">
                    <h1>Khóa học của tôi</h1>
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

export default MyTestComponent;
