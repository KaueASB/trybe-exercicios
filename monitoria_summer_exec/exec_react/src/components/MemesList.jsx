import React from "react";
import memes from "../data";
import Meme from "./Meme";

class MemesList extends React.Component {
    render () {
      return (
        memes.map((meme) => <Meme key={ meme.id } meme={ meme } />)
      )
    }
}

export default MemesList;
