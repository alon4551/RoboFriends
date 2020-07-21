import React,{Component, Fragment} from 'react';
import CardList from '../components/CardList';
import Search from '../components/Search'
import Scroll from  '../components/Scroll';
import tachyons from "tachyons";
import "./App.css";
class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchFiled:'',
            emailSearchFiled:''
        }
    }
    onNameSearchChange=(event)=>{
       this.setState({searchFiled:event.target.value});
    }
    onEmailSearchChange=(event)=>{
        this.setState({emailSearchFiled:event.target.value});
     }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respond=>respond.json())
        .then(users=>this.setState({robots:users}))
    }

    render(){
        const fillterRobots=this.state.robots.filter((robot)=>{
            return (robot.name.toLowerCase().includes(this.state.searchFiled.toLowerCase())&&robot.email.toLowerCase().includes(this.state.emailSearchFiled.toLowerCase()));
        });
        if(this.state.robots.length===0){
            return <h1 className="tc pa2">Loading</h1>
        }
        else{
                return(
                    <Fragment >
                            <div className='tc pa2 '>
                                <h1>
                                    Robo Friends
                                </h1>
                                <div>
                                    <Search event={this.onNameSearchChange} name="Robot Name"/>
                                    <Search event={this.onEmailSearchChange} name="Robot Email"/>
                                </div>
                                <Scroll>
                                <CardList  robots={fillterRobots}/>
                                </Scroll>
                               
                            </div>
                    </Fragment>
            );
                }
    }
}
export default App;