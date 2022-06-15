import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  //console.log("in TweetBox: ", props)
  const handleOnTweetTextChange = (evt) => {
    props.setTweetText(evt.target.value);
  }

  const handleOnSubmit = () => {
    //console.log("in handleOnSubmit: ", newTweet)
    var newTweet = { 
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    }
    props.setTweets([...props.tweets, newTweet])
    props.setTweetText('')
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} disable={((props.tweetText == '' || props.tweetText.length > 140)? true:false)}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span className={(140 - props.tweetText.length < 0)?"red":""}>{(props.tweetText==''? '':140 - props.tweetText.length)}</span>
}

export function TweetSubmitButton(props) {
  /*const disable = (evt) => {
    ((props.tweetText == '' || props.tweetText.length > 140)? true:false)
    console.log(evt);
    return false;
  }*/
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={props.disable}>Tweet</button>
    </div>
  )
}
