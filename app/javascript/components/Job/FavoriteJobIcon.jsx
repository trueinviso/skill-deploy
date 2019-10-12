import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import activeIcon from "./../../../assets/font/icon/save-active.svg";
import inactiveIcon from "./../../../assets/font/icon/save-inactive.svg";
import heyfamFetch from "../../helpers/heyfamFetch";

const FAVORITE_JOBS_API = "/api/v1/favorite_jobs";

class FavoriteJobIcon extends PureComponent {
  static propTypes = {
    favorites: PropTypes.array,
    job_id: PropTypes.number
  };

  state = {
    favorites: this.props.favorites,
    isFetching: false
  };

  toggleFavorite = (event, job_id) => {
    event.preventDefault();

    if (this.state.isFetching) return;
    this.setState({ isFetching: true });

    this.state.favorites.includes(job_id) ?
      this.removeFavorite(job_id) :
      this.createFavorite(job_id);
  }

  removeFavorite = job_id => {
    const options = { method: "DELETE" };
    const url = `${FAVORITE_JOBS_API}/${job_id}`;
    const body = {};
    this.updateFavorite(url, body, options, this.removeCallback);
  }

  removeCallback = (favorite) => {
    this.setState(prev => {
      return {
        favorites: prev.favorites.filter((fav, _) => fav !== favorite.job_id),
        isFetching: false
      }
    });
  }

  createFavorite = job_id => {
    const options = { method: "POST" };
    const url = `${FAVORITE_JOBS_API}`;
    const body = JSON.stringify({ id: job_id });
    this.updateFavorite(url, body, options, this.createCallback);
  }

  createCallback = (favorite) => {
    this.setState(prev => {
      return {
        favorites: [...prev.favorites, favorite.job_id],
        isFetching: false
      }
    });
  }

  updateFavorite = (url, body, options, callback) => {
    heyfamFetch(url, body, options).then(callback)
  }

  render() {
    const { favorites } = this.state;
    const { job_id } = this.props;

    return (
      <div className="job-card__favorite-icon">
        <button onClick={(e)=>this.toggleFavorite(e, job_id)}>
          <img src={favorites.includes(job_id) ? activeIcon : inactiveIcon} alt="favorite-icon" />
        </button>
      </div>
    );
  }
}

export default FavoriteJobIcon;
