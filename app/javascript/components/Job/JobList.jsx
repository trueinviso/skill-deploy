import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import JobListItem from "./JobListItem";
import heyfamFetch from "../../helpers/heyfamFetch";

const FAVORITE_JOBS_API = "/api/v1/favorite_jobs";

class JobList extends PureComponent {
  static propTypes = {
    initialJobs: PropTypes.arrayOf(PropTypes.object),
    favorites: PropTypes.array,
    filters: PropTypes.object,
    className: PropTypes.string
  };

  static defaultProps = {
    favorites: []
  };

  state = {
    jobs: this.props.initialJobs,
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
    heyfamFetch(`${FAVORITE_JOBS_API}/${job_id}`, {}, options)
      .then((favorite) => {
        this.setState(prev => {
          return {
            favorites: prev.favorites.filter((fav, _) => fav !== favorite.job_id),
            isFetching: false
          };
        });
      });
  }

  createFavorite = job_id => {
    const options = { method: "POST" };
    heyfamFetch(FAVORITE_JOBS_API, JSON.stringify({ id: job_id }), options)
      .then((favorite) => {
        this.setState(prev => {
          return {
            favorites: [...prev.favorites, favorite.job_id],
            isFetching: false
          };
        });
      });
  }

  render() {
    const { jobs, favorites } = this.state;
    const { className } = this.props;

    return (
      <ul className={className}>
        {jobs.map(job => (
          <JobListItem
            key={job.id}
            liked={favorites.includes(job.id)}
            toggleFavorite={this.toggleFavorite}
            {...job}
          />
        ))}
      </ul>
    );
  }
}

export default JobList;
