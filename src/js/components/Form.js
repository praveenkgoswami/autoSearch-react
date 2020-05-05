import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { debounceHelper } from "../../helper";

//Auto Search with bind
class Form extends Component {
  constructor() {
    super();
    this.callApi = null;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.callFetchApi = this.callFetchApi.bind(this);
    this.state = {
      inputValue: "",
      dataList: []
    }
  }
  

  onChangeHandler(inputValue){  
    this.setState({inputValue}, () => {
      this.callApi && clearTimeout(this.callApi);
      this.callApi = debounceHelper(this.callFetchApi, 1000)
    });
  }

  callFetchApi(){
    const { inputValue } = this.state;
    inputValue && (
      fetch(`https://github-trending-api.now.sh/repositories?language=${inputValue}`)
      .then(response => {
        return response.json();
      })
      .then(dataList => {
        console.log("response data=====", dataList);
        this.setState({dataList}); 
      })
      .catch(err => {
        console.log("=====", err);
      })
    )    
  }

  render(){
    const {inputValue, dataList} = this.state;
    return(
      <>
        <h2>Auto Search</h2>
        <div className="form-group">
          <input 
            name="search" 
            type="text"
            value={inputValue}
            onChange={(e)=>this.onChangeHandler(e.target.value)}
          />
        </div>
        <Link to={"/pagination"}>Go to Pagination</Link>
        {
            dataList && dataList.length ? (
              <div className="data-list">
                <ul>
                  {
                    dataList.map((obj, i) => {
                      return (
                        <li key={`list-${i}`}>
                          <h3>
                            {obj.author}
                          </h3>
                          <h4>
                            {obj.name}
                          </h4>
                          <h4>
                            {obj.avatar}
                          </h4>
                          <p>
                            {obj.description}
                          </p>
                        </li>
                      )                      
                    })
                  }
                </ul>
              </div>
            ) : <></>
          }    
      </>
    )
  }
}

export default withRouter(Form);