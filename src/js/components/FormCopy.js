import React, { Component } from "react";
import {debounceHelper} from "../../helper";

//Auto Search with FAT Arrow function
class FormCopy extends Component {

  callApi = null;

  state = {
    value: "",
    data: [],
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({value}, () => {
      this.callApi && clearTimeout(this.callApi);
      this.callApi = debounceHelper(this.callFetchApi, 1000);
    });
  };

  callFetchApi = () => {
    const { value } = this.state;
    fetch(`https://github-trending-api.now.sh/repositories?language=${value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({data})
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const {value, data} = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
            // pattern= "[A-Z]{5}[0-9]{4}[A-Z]{1}"
            // placeholder="ABCDE1234F"
            // title="Please provide valid Format, i.e., ABCDE1234F"
          />
        </form>
        
          {
            data && data.length ? (
              <div className="data-list">
                <ul>
                  {
                    data.map((obj, i) => {
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
    );
  }
}

export default FormCopy;