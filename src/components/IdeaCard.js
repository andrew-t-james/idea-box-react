import React from 'react';

import upvoteSVG from '../img/upvote.svg';
import upvoteHoverSVG from '../img/upvote-hover.svg';
import downVoteSVG from '../img/downvote.svg';
import downVoteHoverSVG from '../img/downvote-hover.svg';
import deleteSVG from '../img/delete.svg';
import deleteHoverSVG from '../img/delete-hover.svg';

const IdeaCard = (props) => {
  const { title, body } = props.idea;

  return (
    <article
      className="card-section-card"
      id=""
    >
      <header
        className="card-section-card-header"
      >
        <h2
          className="card-section-card-header-heading"
        >{title}
        </h2>
        <span className="card-section-buttons">
          <img
            src={deleteSVG}
            alt="Remove Idea Item"
            className="card-section-button-initial-state"
          />
          <img
            src={deleteHoverSVG}
            alt="Remove Idea Item"
            className="card-section-button-read-state delete-button"
          />
        </span>
      </header>
      <p
        className="card-section-card-copy"
      >{body}
      </p>
      <nav className="card-section-nav-buttons">
        <span className="card-section-buttons">
          <img
            src={upvoteSVG}
            alt="Remove Idea Item"
            className="card-section-button-initial-state"
          />
          <img
            src={upvoteHoverSVG}
            alt="Remove Idea Item"
            className="card-section-button-read-state upvote-button"
          />
        </span>
        <span className="card-section-buttons">
          <img src={downVoteSVG}
            alt="Remove Idea Item"
            className="card-section-button-initial-state"
          />
          <img
            src={downVoteHoverSVG}
            alt="Remove Idea Item"
            className="card-section-button-read-state downvote-button"
          />
        </span>
        <aside className="card-section-card-quality">quality :
          <span className="card-section-card-quality-status"></span>
        </aside>
      </nav>
    </article>
  );
};

export default IdeaCard;