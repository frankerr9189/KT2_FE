import React, { Component } from 'react';
import 'whatwg-fetch';
import {API} from "./config";


class stripeAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setupBegan: false,
      isLoadingFieldsNeeded: true,
      error: null,
    };

    this.fetchFieldsNeeded = this.fetchFieldsNeeded.bind(this);
    this.onClickBeginSetup = this.onClickBeginSetup.bind(this);
    this.onStartAccountSetup = this.onStartAccountSetup.bind(this);
  }

  componentWillMount(){
      this.fetchFieldsNeeded();
  }

  fetchFieldsNeeded() {
    fetch(`${API}/stripe/account/get`, 
    { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(json => {
        const {
            success,
            message,
            setupBegan
        } = json;

        if (success){
            this.setState({
                setupBegan,
                isLoadingFieldsNeeded: false,
            });
        } else {
            this.setState({
                error: message,
                isLoadingFieldsNeeded: false,
            });
        }
      });
  }

  onStartAccountSetup() {
      this.setState({
          isLoadingFieldsNeeded: true,
      });
    fetch(`${API}/stripe/account/setup`, 
    { 
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        countryCode: 'US',
    }),
    })
      .then(res => res.json())
      .then(json => {
        const {
            success,
            message,
        } = json;

        if (success){
            this.fetchFieldsNeeded();
        } else {
            this.setState({
                error: message,
                isLoadingFieldsNeeded: false,
            });
        }
      });
  }

  onClickBeginSetup(){
      console.log("onClickBeginSetup");
      this.onStartAccountSetup();
  }

  render() {
      const {
          isLoadingFieldsNeeded,
          setupBegan,
          error,
      } = this.state;

      if(isLoadingFieldsNeeded){
          return(
              <p>Loading...</p>
          );
      }

      if (!setupBegan){
          return(
            <div>
                {
                    (error) ? (
                        <p>{error}</p>
                    ) : (null)
                }
                <button onClick={this.onClickBeginSetup}>
                    Begin Setup
                </button>
                <p>By clicking setup you agree to the TOS for Stripe and us.</p>
            </div>
          );
      }

    return (
      <div>
          {
                    (error) ? (
                        <p>{error}</p>
                    ) : (null)
                }
          <p>Start adding Stripe elements</p>
      </div>
    );
  }
}

export default stripeAccount;
