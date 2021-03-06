import React from 'react';
import { Link } from 'react-router';

class Library extends React.Component {
  constructor(props) {
    super(props);

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.knowtations.length < 24) {
      this.props.requestAllKnowtations();
    }
  }

  render() {
    const { knowtations } = this.props;

    const knowtationItems = knowtations.map( (knowtation, idx) => {
      const author = knowtation.user;

      return (
        <li className='library-list-item' key={ idx }>
          <div
            id={ knowtation.id }
            className='library-list-knowtation-link'
            onMouseEnter={ this.onMouseEnterHandler }
            onMouseLeave={ this.onMouseLeaveHandler }
          >
            <Link to={ `/knowtation/${knowtation.id}` }>
              <img id={ knowtation.id } src={ knowtation.thumbnailUrl } />
              <div
                id={ `library-metadata-${ knowtation.id }` }
                className='hide-metadata'
              >
                <span className='first-row'>{ knowtation.receivedLoops }<i className="material-icons spin">loop</i></span>
                <span className='second-row'>{ knowtation.tags.map( tag => `${tag.name}`).join(' • ') }</span>
              </div>
              <h2>{ knowtation.title }</h2>
            </Link>
          </div>
          <Link to={ `/profile/${author.id}` }>
            <h3>{ author.username }</h3>
          </Link>
        </li>
      );
    });

    return(
      <div className='library-container group'>
          <ul className='library-list'>
            { knowtationItems }
          </ul>
      </div>
    );
  }

  // helpers



  // event handlers

  onMouseEnterHandler(e) {
    const id = e.currentTarget.id;
    const idName = `library-metadata-${ id }`;
    document.getElementById(idName).className = 'show-metadata';
  }

  onMouseLeaveHandler(e) {
    const id = e.currentTarget.id;
    const idName = `library-metadata-${ id }`;
    document.getElementById(idName).className = 'hide-metadata';
  }
}

export default Library;
