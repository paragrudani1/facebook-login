import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
    this.showHide = this.showHide.bind(this);
  }
  render() {
    return (
      <section id="content">
        <div className="top-content">
          <div className="container">
            <h2>How to Hide And Show Multiple Div in React Js</h2>
          </div>
        </div>
        <div className="container">
          <div>
            <div>
              <h3>First Div Hide Show Toggle</h3>
              <button onClick={this.showHide} className="button-primary btn">
                {this.changeName()}
              </button>
              {this.state.show && (
                <div>
                  <p>first div show</p>
                  <p>text</p>
                </div>
              )}
            </div>
            <div>
              <h3>Second Div Hide Show Toggle</h3>
              <button onClick={this.showHide} className="button-primary btn">
                {this.changeName()}
              </button>
              {this.state.show && (
                <div>
                  <p>second div show</p>
                  <p>text</p>
                </div>
              )}
            </div>
            <div>
              <h3>Third Div Hide Show Toggle</h3>
              <button onClick={this.showHide} className="button-primary btn">
                {this.changeName()}
              </button>
              {this.state.show && (
                <div>
                  <p>third div show</p>
                  <p>text</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
  changeName() {
    let text = "Div ";
    text += this.state.show === true ? "hide" : "show";
    return text;
  }
  showHide() {
    const { show } = this.state;
    this.setState({ show: !show });
  }
}

export default Toggle;
