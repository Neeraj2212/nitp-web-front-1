import axios from "axios"
import React, { useEffect, useState } from "react"
import Newscard from "./home/newscard"
import Importantlink from "./home/importantlink"
import Notice from "./home/notice"
import Eventcard from "./home/eventcard"
import { Nitpbackimg } from "./home/nitpimg"
import { Link } from "gatsby"
import Innovation from "./home/Innovation"
import GalleryComp from "./home/gallery"
import Video from "./home/video"
import { HomeStyle } from "./styles/home"

const Home = () => {
  const [events, setEvents] = useState()
  const [notices, setNotices] = useState()
  const [news, setNews] = useState()

  useEffect(() => {
    let eventsUrl = `${process.env.GATSBY_API_URL}/api/events/active`
    let noticesUrl = `${process.env.GATSBY_API_URL}/api/notice/active`
    let newsUrl = `${process.env.GATSBY_API_URL}/api/news/all`
    axios
      .get(eventsUrl)
      .then(res => {
        setEvents(res.data)
      })
      .catch(e => {
        console.log(e)
      })
    axios
      .get(noticesUrl)
      .then(res => {
        setNotices(res.data)
      })
      .catch(e => {
        console.log(e)
      })
    axios
      .get(newsUrl)
      .then(res => {
        setNews(res.data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const link = k => {
    k = k.substr(0, k.length - 18)
    k = k.substr(32, k.length)
    return k
  }

  return (
    <HomeStyle>
      <div>
        <div className="bgimgwrap">
          <Nitpbackimg />
        </div>
      </div>
      <div className="row tablinkcover">
        <div className="col-4 tablink">
          <a href="#notice">Notice</a>
        </div>
        <div className="col-4 tablink">
          <a href="#events">Events</a>
        </div>
        <div className="col-4 tablink">
          <a href="#news">News</a>
        </div>
      </div>
      <Importantlink />
      <div id="notice-event">
        <div id="notice">
          <div
            // data-aos="zoom-in"
            // data-aos-duration="200"
            className="notice-head"
          >
            Notice
            <Link id="notice-head-p" className="home_heading-p" to="/notice">
              View all
            </Link>
          </div>
          <div className="notice-row" >
            {notices &&
              notices.map(notice => {
                if (notice.title != "" && notice.important != true) {
                  return (
                    <Notice
                      detail={notice.title}
                      time={notice.openDate}
                      key={notice.id}
                      attachments={notice.attachments}
                      imp={notice.important}
                      link={
                        notice.notice_link && JSON.parse(notice.notice_link).url
                          ? JSON.parse(notice.notice_link).url
                          : ""
                      }
                    />
                  )
                }
              })}
          </div>
        </div>
        <div id="events">
          <div
            // data-aos="zoom-in"
            // data-aos-duration="200"
            className="event-head"
          >
            Events
            <Link id="event-head-p"  to="/event">
              View all
            </Link>
          </div>
          <div className="event-row">
            {events &&
              events.map((event, index) => {
                const date = new Date(event.openDate)
                const day = date.getDate()
                const month = date.getMonth() + 1
                const year = date.getFullYear()
                const cdate = new Date(event.closeDate)
                const cday = cdate.getDate()
                const cmonth = cdate.getMonth() + 1
                const cyear = cdate.getFullYear()
                const monthname = date
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase()
                if (event.title != "") {
                  return (
                    <Eventcard
                      key={index}
                      detail={event.title}
                      time={`${day}-${month}-${year} - ${cday}-${cmonth}-${cyear}`}
                      date={day}
                      month={monthname}
                      attachments={event.attachments}
                      location={event.venue.substring(0, 60)}
                      link={
                        event.attachments.length != 0
                          ? event.attachments[0].url
                          : ""
                      }
                    />
                  )
                }
              })}
          </div>
        </div>
        <div id="notice">
          <div
            // data-aos="zoom-in"
            // data-aos-duration="200"
            className="notice-head"
          >
            Announcements
            <Link id="notice-head-p"  to="/notice">
              View all
            </Link>
          </div>
          <div className="notice-row" >
            {notices &&
              notices.map(notice => {
                if (notice.title != "" && notice.important == true) {
                  return (
                    <Notice
                      detail={notice.title}
                      time={notice.openDate}
                      key={notice.id}
                      attachments={notice.attachments}
                      imp={notice.important}
                      link={
                        notice.notice_link && JSON.parse(notice.notice_link).url
                          ? JSON.parse(notice.notice_link).url
                          : ""
                      }
                    />
                  )
                }
              })}
          </div>
        </div>
      </div>
      <Innovation />
      <div id="news">
        <div
          data-aos="zoom-in"
          data-aos-duration="200"
          className="news-head"
          id="news"
        >
          News
          <Link id="news-head-p"  to="/news">
            View all
          </Link>
        </div>

        <div className="news-row">
          <div className="news-viewbox" data-aos="fade-left" data-aos-duration="200">
            {news &&
              news.map(news => {
                Date.prototype.formatDDMMYYYY = function(){
                  return this.getDate() + 
                  "/" +  (this.getMonth()+1) +
                  "/" +  this.getFullYear();
              }
              
                const newtime = new Date().getTime()

                var d = Math.round((newtime - news.openDate) / 3600000)
                if(d > 24*7){
                  d = new Date(news.openDate);
                  d = d.formatDDMMYYYY();
                }else if (d > 24) {
                  d = `${Math.round(d / 24)} days ago`
                } else if (d < 1) {
                  d = `Just now`
                }  else {
                  d = `${d} hours ago`
                }
                var desc = String(news.description).substr(0, 170)
                if (news.title != "" && news.image[0]) {
                  return (
                    <Newscard
                      url={link(news.image[0].url)}
                      id={news.id}
                      time={d}
                      key={news.id}
                      head={`${news.title.slice(0, 92)}...`}
                      detail={desc.slice(0, 200)}
                    />
                  )
                }
              })}
          </div>
        </div>
      </div>
      <GalleryComp />

      {/* <Video /> */}
    </HomeStyle>
  )
}

export default Home
