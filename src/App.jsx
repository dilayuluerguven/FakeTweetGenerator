import React, { useState } from "react";
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
function App() {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [isVerified, setIsVerified] = useState(false);
  const [tweet, setTweet] = useState();
  const [avatar, setAvatar] = useState();
  const [retweets, setRetweets] = useState(0);
  const [quoteTweets, setQuoteTweets] = useState(0);
  const [likes, setLikes] = useState(0);
  return (
    <>
      <div className="tweet-settings">
        <h3>Tweet Ayarları</h3>
      </div>
      <div className="tweet-container">
        <div className="tweet">
          <div className="tweet-author">
            <img
              src="https://cdn.myikas.com/images/e0f17726-ad7c-4b1a-a568-7bc56544bad8/7d7730b6-6cba-44b8-a6d6-44aa45b9521e/image_1080.jpg"
              alt=""
            />
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
            <p>{tweet || 'Bu alana tweet gelecek'}</p>
          </div>
          <div className="tweet-stats">
            <span>
              <b>24 </b> Retweet
            </span>
            <span>
              <b>53 </b> Alıntı Tweetler
            </span>
            <span>
              <b>782 </b> Beğeni
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
