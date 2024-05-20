import React from 'react'
import './section2.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Section2 = () => {
  return (
      <div className="welcome-text-and-feature group">
          <p className="text-6">Welcome to the YooPin Services</p>
          <div className="shape-1-copy-2"></div>
          <p className="text-7">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <div className="row-3 group">
            <div className="group-1">
              <img className="write" src="write.png" alt="" width="59" height="59"/>
              <p className="text-8">Feature one</p>
              <p className="text-9">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.</p>
            </div>
            <div className="group-3">
              <img className="simon-says" src="simon_says.png" alt="" width="51" height="58"/>
              <p className="text-12">Feature three</p>
              <p className="text-13">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.</p>
            </div>
            <div className="shape-1-copy"></div>
            <div className="group-2">
              <img className="search-and-thou-shall-find" src="search_and_thou_shall_fin.png" alt="" width="59" height="59"/>
              <p className="text-10">Feature two</p>
              <p className="text-11">Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.Donec id elit non mi porta gravida at eget metus.</p>
            </div>
            <div className="shape-1"></div>
          </div>
        </div>
  )
}

export default Section2
