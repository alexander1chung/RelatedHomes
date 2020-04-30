import React, { Component } from 'react';
import Axios from 'axios';
import OneHome from './OneHome';
import { AllHouses, AllHousesWrapper } from './Styles';

class RelatedHomes extends Component {
  constructor(props) {
    super(props);
    let relativeProperties;
    this.state = {
      relativeProperties,
      loading: !relativeProperties,
      original: window.location.href.split('/')[3],
    };

  }

  componentDidMount() {
    const { relativeProperties, original } = this.state;
    if (!relativeProperties) {
      Axios.get(`/relatedProperties/${original}`)
        .then((response) => {
          this.setState({
            relativeProperties: response.data,
            loading: false,
          });
        });
    }
  }

  render() {
    const { relativeProperties, original, loading } = this.state;
        if (loading === true && original !== '') {
          return <div>loading</div>
        }
    return ((original !== '') ?
      <div>
        <h4>More Places to Stay</h4>
        <AllHouses>
          <AllHousesWrapper>
          {
            (relativeProperties.length !== 0 ) ? relativeProperties.map((property) => <OneHome home={property} />)
            : (<div>There seems to be no related homes</div>)
          }
          </AllHousesWrapper>
        </AllHouses>
      </div> : <div>...</div>
    )
  }
}
export default RelatedHomes;
