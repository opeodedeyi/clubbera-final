"use client"
import { useState } from "react";
import copy from "copy-to-clipboard";
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";
import { FaTwitter, FaFacebook, FaLinkedin, FaCopy } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import style from "./ShareButtons.module.css"

const ShareButtons = ({ url, title }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyLink = () => {
    copy(url);
    setCopySuccess("Link copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  };

  return (
    <div className={style.ShareButtonsContainer}>
      <div className={style.ShareButton}>
          <FaTwitter />
        <TwitterShareButton url={url} title={title}>
          Twitter
        </TwitterShareButton>
      </div>
      <div className={style.ShareButton}>
        <FaFacebook />
        <FacebookShareButton url={url} quote={title}>
          Facebook
        </FacebookShareButton>
      </div>
      <div className={style.ShareButton}>
        <FaLinkedin />
        <LinkedinShareButton url={url} title={title}>
          LinkedIn
        </LinkedinShareButton>
      </div>
      <div className={style.ShareButton}>
        <MdEmail />
        <EmailShareButton
          url={url}
          subject={title}
          body="Check out this link: "
        >
          Email
        </EmailShareButton>
      </div>
      <div className={style.ShareButton}>
        <FaCopy />
        <span onClick={handleCopyLink}>Copy Link</span>
        {copySuccess && <span>{copySuccess}</span>}
      </div>
    </div>
  );
};

export default ShareButtons;
