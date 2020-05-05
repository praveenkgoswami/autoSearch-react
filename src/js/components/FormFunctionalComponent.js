import React from 'react';
import { withRouter, Link } from "react-router-dom";
import { debounceHelper } from "../../helper";

//Auto Search with functional Component
function onChangeHandler(inputValue){  
  let callApi = null;
  callApi && clearTimeout(callApi);
    callApi = debounceHelper(callFetchApi, 1000)
  /* this.setState({inputValue}, () => {
    callApi && clearTimeout(callApi);
    callApi = debounceHelper(callFetchApi, 1000)
  }); */
}

function callFetchApi(){
  // const { inputValue } = this.state;
  let inputValue = "a";
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


function FunctionalComponent() {
  const [inputValue, setValue] = useState(0);
  // const {inputValue, dataList} = this.state;
    return(
      <>
        <h2>Functional Component Search</h2>
        <div className="form-group">
          <input 
            name="search" 
            type="text"
            value=""
            onChange={(e) => onChangeHandler(e.target.value)}
          />
        </div>
        <Link to={"/pagination"}>Go to Pagination</Link>
        {/* {
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
          } */}    
      </>
    )
}

export default withRouter(FunctionalComponent);