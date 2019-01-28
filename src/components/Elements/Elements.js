import React, { Component } from 'react';

class Elements extends Component {
  state = {
    imgUrl: '',
  }

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  render() {
    return (
      <div className="component">
        <h1>Elements</h1>
        <h2>Replaced Elements (img & input)</h2>
        <div className="lecture">
          <p className="explanation">The replaced elements are those where the element's content is replace by something that is not directly represented by document content.</p>
          <div className="example">
            <div className="interaction">
              <span>{'<img src="'}</span>
              <input
                value={this.state.imgUrl}
                onChange={this.onChangeHandler}
                type="text"
                name="imgUrl"
              />
              <span>{'" alt="broken-msg">'}</span>
            </div>
            <div className="display">
              {this.state.imgUrl &&
                <img src={this.state.imgUrl} alt="broken-msg" />
              }
            </div>
          </div>
        </div>
        <h2>No Replaced Elements</h2>
      </div>
    );
  }
}

export default Elements;

