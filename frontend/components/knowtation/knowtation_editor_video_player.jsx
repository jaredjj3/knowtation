import React from 'react';
import ReactYouTube from 'react-youtube';

class KnowtationEditorVideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.onReadyHandler = this.onReadyHandler.bind(this);
    this.onPlayHandler = this.onPlayHandler.bind(this);
    this._updateTimer = this._updateTimer.bind(this);
  }

  render() {
    const { knowtation } = this.props;
    return (
      <ReactYouTube
        id='video-player'
        className='knowtation-editor-video-player'
        videoId={ knowtation.videoUrl }
        onReady={ this.onReadyHandler }
        onPlay={ this.onPlayHandler }
        onPause={ this.onPauseHandler }
        />
    );
  }

  // helpers

  _updateTimer() {
    const { updateTime, knowtation } = this.props;
    const { videoElement } = knowtation;
    const currentTime = videoElement.getCurrentTime();
    updateTime(currentTime);
    requestAnimationFrame(this._updateTimer);
  }

  // event handler

  onReadyHandler(e) {
    const { setElement, toggleModal } = this.props;
    const video = e.target;
    setElement(video, 'video');
    toggleModal('loading');
  }

  onPlayHandler(e) {
    const { setDuration } = this.props;
    window.videoTimer = requestAnimationFrame(this._updateTimer);
    setDuration(e.target.getDuration());
  }

  onPauseHandler(e) {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
  }

  onEndHandler(e) {
    if (window.videoTimer) {
      cancelAnimationFrame(window.videoTimer);
    }
  }
}

export default KnowtationEditorVideoPlayer;
