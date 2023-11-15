import React from 'react'
import { AiFillCrown } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
const Groups = () => {
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <h5 className="card-title recent-title">RECENT</h5>

          <div className="recent-jobs">
            <span>
              <AiFillCrown className="recent-icon" />
            </span>
            <span className="card-text">front end developer</span>
          </div>
          <div className="recent-jobs">
            <span>
              <AiFillCrown className="recent-icon" />
            </span>
            <span className="card-text">back end developer</span>
          </div>
          <div className="recent-jobs">
            <span>
              <AiFillCrown className="recent-icon" />
            </span>
            <span className="card-text">front end developer</span>
          </div>
          <div className="recent-jobs">
            <span>
              <AiFillCrown className="recent-icon" />
            </span>
            <span className="card-text">front end developer</span>
          </div>
          <div className="recent-jobs">
            <span>
              <AiFillCrown className="recent-icon" />
            </span>
            <span className="card-text">front end developer</span>
          </div>
          <div className="recent-jobs">
            <span>
              <AiFillCrown className="recent-icon" />
            </span>
            <span className="card-text">front end developer</span>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title recent-title">HASHTAG</h5>

        <div className="recent-jobs">
          <span>
            <FaHashtag className="recent-icon" />
          </span>
          <span className="card-text">front end developer</span>
        </div>

        <div className="recent-jobs">
          <span>
            <FaHashtag className="recent-icon" />
          </span>
          <span className="card-text">front end developer</span>
        </div>
        <div className="recent-jobs">
          <span>
            <FaHashtag className="recent-icon" />
          </span>
          <span className="card-text">front end developer</span>
        </div>
        <a href="#" className='discover-more'>discover more</a>
      </div>
    </>
  );
}

export default Groups
