import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import './PageTwo.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../../Containers/BlogContainer/action.js'

class PageTwo extends Component {

  inputItem(field){

    const { meta : {touch, error } } = field;

    //這種寫法的意思是：const {meta} = Field; const {touch, error}= meta;
    //即 從field中提取meta，再從meta中提取touch和error

    return(
      <div className="input-form">
        <lable> {field.a}  : </lable>
        <input
          className='input'
          type='text'
          {...field.input}
        />
        <br/>
        <div style={{color:'red'}}>
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    //this === component
    //values.preventDefault()
    // this.props.history.push('/pageone')
    this.props.createPost(values, ()=>{
      this.props.history.push('/PageOne');
    })
  }

  render(){
    const { handleSubmit } = this.props;
    //this is to prove the values validate
    return(
      <div>
        <p style={{fontSize: 13, color: 'red',}}>
          this is the second page
        </p>
        <button
          className="button-goback"
          onClick={()=> this.props.history.push('/PageOne')}>
          go back
        </button>

        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              a='Title For Post'
              name="title"
              component={this.inputItem}
            />
            <br/>
            <Field
              a='Categories'
              name="categories"
              component={this.inputItem}
            />
            <br/>
            <Field
              a='Post Content'
              name="content"
              component={this.inputItem}
            />
            <br/>
            <button type="submit" className="btn-primary">Submit</button>
            <Link to='/pageone'><button className='button-cancel' type="submit" className="btn-primary">Cancel</button></Link>
          </form>
        </div>
      </div>
    )
  }
}

function validate (values){
  //console.log(values) -> {title: 'asdf', categories: 'asdf', content:'asdf'}
  const errors = {}
  if(!values.title){
    errors.title = "Enter a title";
  }
  if(!values.categories){
    errors.categories = 'Enter some categories';
  }
  if(!values.content){
    errors.content = 'Enter some content please';
  }

  //if errors is empty, the form is fine to submit
  //
  return errors;
}

export default reduxForm({
  validate,
  form: 'PageTwoForm',
})(
  connect(null, { createPost })(PageTwo)
);





//注意，雙打包（reduxForm, connect）方式，一定要把connect放在裡面
//在redux-form中，input只是用來擺樣子的，真正的值
//注意，只有用this.onSubmit.bind(this)才可以成功的讀取到函數，()=>this.function()這個方法無效
//注意，這裡面的validate 要寫在最外面，否則一定會抱錯
//name 是用來連接<Field> 和 function validate 的
//在這裡一定要注意， <Field>中的component裡面一定要用this.funtion這種形式來寫
//如果用()=>this.funtion()這種形式的話，頁面一定會抱錯，原因應尬是redux-form內部
//的參數問題
//心得：history 应该是上面一层默认传递回来的变量
//虽然没有明确写出history在上一个层级中（Router），但是history作为route中的默认3个属性的中的一个（分别是：match，location，history）,
