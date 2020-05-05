import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Pagination extends Component {
    state = {
        data: [],
    }

    componentDidMount(){
        this.callFetchApi();
    }

    callFetchApi = () => {
        fetch(`https://github-trending-api.now.sh/repositories?language=${"c"}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);
            this.setState({data})
          })
          .catch(err => {
            console.log(err);
          });
      };

    render() {
        const { data } = this.state;
        return (
            <>
                {
                    data && data.length ? (
                    <div className="warpper">
                        <table className="table border">
                            <tbody>
                                {
                                    data.map((obj, i) => {
                                    return (
                                        <tr key={`list-${i}`}>
                                        <td>
                                            {obj.author}
                                        </td>
                                        <td>
                                            {obj.name}
                                        </td>
                                        <td>
                                            {obj.avatar}
                                        </td>
                                        <td>
                                            {obj.description}
                                        </td>
                                        </tr>
                                        
                                    )                      
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    ) : <></>
                }
                <div className="pagination-wrapper">
                    Pagination
                </div>
                <Link to={"/"}>Go to Home</Link>
            </>
        )
    }
}

export default withRouter(Pagination);