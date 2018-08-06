//@flow
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';
import PageThree from './PageThree.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './PractiseThree.css';

export default class Main extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route render={({location})=> console.log(location) ||
            <div>
              <TransitionGroup>
               <CSSTransition
                 timeout={300}
                 classNames='fade'
                 key={location.pathname}
               >
                  <Switch location={location}>
                    <Route path="/PageOne" exact component={PageOne}/>
                    <Route path="/PageTwo" exact component={PageTwo}/>
                    <Route path="/Page/:id" exact component={PageThree}/>
                    <Route path="/PageFour" exact render={()=><p> This is the page No.Three </p>}/>
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          }/>
        </BrowserRouter>
      </div>
    )
  }
}

//再次黑科技： 一般情況下，用map來進行輸出array，但是當輸出是object，用_.map()來進行輸出

//<Route render={() => <div>Not Found</div>} /> 这段话必须放在<switch>序列的的最后面
//因為switch裡面的元素，總是會觸發第一個route
//这个exact，保证路径不会出错，因此必须用！！！！
//黑科技，快看： 本来是路径+component的组合，但是如果不想倒入外部component, 则可以写成上面的形式，即用render
//这里面render的作用和原本的component一样，都是把path 绑定到一个能够显示的页面，区别就是，一个是import进来的
//用component, 一个是自己直接写的，用render !!!!
//注意： 这里如果设 <Route path="/" component={PageOne}/> 那个下一个 <Route path="/PageOne" component={PageOne}/>
//里面就一定包含‘／’里面的内容，并且此时，只能用<div>才好使，如果用<Switch> 则此route无效
//因此，猜测，在<div>中的这些route，内容上面，是会根据路径的名称，而进行叠加的
// thanks god.


//学习的代码：
//
//class Index extends React.Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <BrowserRouter>
//           <Route path="/" component={Home}/>
//         </BrowserRouter>
//       </Provider>
//     )
//   }
// }
//
// class Home extends React.Component {
//   handle = () => {
//     return (<WrappedTest/>);
//   }
//
//   render() {
//     return (
//       <div>
//         <Route path="/home" render={this.handle}/>
//       </div>
//     )
//   }
// }
//
// class Test extends React.Component {
//   componentWillMount() {
//     console.log('Test componentWillMount');
//   }
//
//   render() {
//     return (
//       <div>
//         <Link to="/home/test">show</Link>
//         <Route path="/home/test" render={() => <h3>hi</h3>}/>
//       </div>
//     )
//   }
// }
//
// const WrappedTest = connect()(Test);
//
// ReactDOM.render(<Index/>, document.getElementById('root'));
