import React from "react";
import { CircularProgress } from "@material-ui/core";

export default class Iframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <div className="container rsvp-wrapper">
        {this.state.loading ? (
          <CircularProgress size={180} color="red" />
        ) : null}
        <iframe
          title="Spotify"
          src="https://open.spotify.com/embed/playlist/3PPbbsJhktmX5Cp6syx7gR"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          onLoad={this.hideSpinner}
        />
      </div>
    );
  }
}
