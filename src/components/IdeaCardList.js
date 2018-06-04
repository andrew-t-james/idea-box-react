import React from 'react';
import PropTypes from 'prop-types';
import IdeaCard from './IdeaCard';

const IdeaCardList = props => {
  const { ideaList } = props;

  return (
    <section className="card-section">
      {
        ideaList.reverse().map((idea, index) =>
          <IdeaCard
            key={index}
            idea={idea}
          />
        )
      }
    </section>
  );
};

IdeaCardList.propTypes = {
  ideaList: PropTypes.array
};

export default IdeaCardList;