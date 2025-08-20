import React, { useState,useRef,useEffect } from "react";
import {
  CheckCircleFilled,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  ShareAltOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import "./App.css";
import "./css/style.scss";
import { AvatarLoader } from "./loaders";
import { useScreenshot } from 'use-react-screenshot'


const tweetFormat = (tweet) => {
  tweet = tweet
    .replace(/@([\w]+)/g, "<span>@$1</span>")
    .replace(/#([\wşçöğüı]+)/gi, "<span>#$1</span>")
    .replace(/(https?:\/\/[\w\.\/]+)/g, "<span>$1</span>");
  return tweet;
};
const formatNumber = (number) => {
  if (!number) {
    number = 0;
  }

  if (number < 1000) {
    return number;
  }
  number /= 1000;
  number = String(number).split(".");

  return (
    number[0] + (number[1] > 100 ? "," + number[1].slice(0, 1) + "B" : "B")
  );
};

function App() {
  const tweetRef = useRef(null)
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);
  const [image, takeScreenshot] = useScreenshot()
  const getImage = () => takeScreenshot(tweetRef.current)

useEffect(() => {
  
  console.log(image)
}, [image])



  const avatarHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };
  return (
    <>
      <div className="tweet-settings">
        <h3>Tweet Ayarları</h3>
        <ul>
          <li>
            <label>Ad Soyad</label>
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label>Kullanıcı Adı</label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li>
            <label>Tweet</label>
            <textarea
              maxLength="290"
              class="textarea"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
          </li>
          <li>
            <label>Avatar</label>
            <input className="input" type="file" onChange={avatarHandle} />
          </li>
          <li>
            <label>Retweet</label>
            <input
              className="input"
              type="number"
              value={retweets}
              onChange={(e) => setRetweets(e.target.value)}
            />
          </li>
          <li>
            <label>Alıntı Tweet</label>
            <input
              className="input"
              type="number"
              value={quoteTweets}
              onChange={(e) => setQuoteTweets(e.target.value)}
            />
          </li>
          <li>
            <label>Beğeni</label>
            <input
              className="input"
              type="number"
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
            />
          </li>
          <button onClick={getImage}> Oluştur</button>
            <div className="download-url">
             {image && (<a href={image} download="tweet.png" >Tweeti İndir</a>)}

            </div>
        </ul>
      </div>
      <div className="tweet-container">
        <div className="tweet" ref={tweetRef}>
          <div className="tweet-author">
            {(avatar && <img src={avatar} />) || <AvatarLoader />}
            <div>
              <div className="name">
                {name || "Ad Soyad"}
                {isVerified && (
                  <CheckCircleFilled
                    style={{
                      alignItems: "center",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <div className="username">@{username || "kullaniciadi"}</div>
            </div>
          </div>
          <div className="tweet-content">
            <p
              dangerouslySetInnerHTML={{
                __html:
                  (tweet && tweetFormat(tweet)) || "Bu alana tweet gelecek",
              }}
            ></p>
          </div>
          <div className="tweet-stats">
            <span>
              <b>{formatNumber(retweets)}</b> Retweet
            </span>
            <span>
              <b>{formatNumber(quoteTweets)} </b> Alıntı Tweetler
            </span>
            <span>
              <b>{formatNumber(likes)}</b> Beğeni
            </span>
          </div>
          <div className="tweet-actions">
            <span className="tweet-icons">
              <MessageOutlined />
            </span>
            <span className="tweet-icons">
              <RetweetOutlined />
            </span>
            <span className="tweet-icons">
              <HeartOutlined />
            </span>
            <span className="tweet-icons">
              <ShareAltOutlined />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
