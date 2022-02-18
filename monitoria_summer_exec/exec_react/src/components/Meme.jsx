import React from "react";

class Meme extends React.Component {
  render() {
    const { meme: { id, name, url, box_count  } } = this.props;
    return (
      <section>
        <li>{ id }</li>
        <li>{ name }</li>
        <li>{ box_count }</li>
        <img src={ url } alt={ name } width='400px'/>
      </section>
    )
  }
}

export default Meme;
