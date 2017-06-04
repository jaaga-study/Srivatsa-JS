import React, { Component } from 'react';

class Gallery extends React.Component{
  render() {
    let alternate = 'https://c1.staticflickr.com/9/8078/8314929977_28fd740070_b.jpg';

    return(
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a key={index} className="book" href={infoLink} target="_blank">
              <img
                src={imageLinks != undefined ? imageLinks.thumbnail : alternate}
                alt="book image"
                className="book-img"
              />
            <div className="book-text">
              {title}
            </div>
          </a>
          )
        })}
      </div>
    )
  }
}

export default Gallery;
