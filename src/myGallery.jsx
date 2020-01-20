import React, { Component } from 'react';


class MyGallery extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentImg: 'http://localhost:3001/static/media/1.54badce1.jpeg'
    }
  }
  handleThumbnail = (e) => {
    console.log(e.target.src);
    this.setState({currentImg : e.target.src})
 
  }

  render() {
    return (
      <div>
      <img src={this.state.currentImg} alt='1' width={'400px'} onClick={this.handleThumbnail} />
        <div className="thumbnails">
          <img src={require('./1.jpeg')} alt='1' width={'100px'} onClick={this.handleThumbnail} />
          <img src={require('./2.jpeg')} alt='2' width={'100px'} onClick={this.handleThumbnail} />
          <img src={require('./3.jpeg')} alt='3' width={'100px'} onClick={this.handleThumbnail} />
          <img src={require('./4.jpeg')} alt='4' width={'100px'} onClick={this.handleThumbnail} />
          <img src={require('./5.jpeg')} alt='5' width={'100px'} onClick={this.handleThumbnail} />
        </div>
      </div>
    )
  }
}


export default MyGallery;
