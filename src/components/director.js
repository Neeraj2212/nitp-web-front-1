import React, { useEffect, useState } from "react"
import axios from "axios"
import mail from "./global/img/mail.svg"
import { FacultyProfile } from "./styles/facultyprofile"

const Directorpage = () => {
  const [data, setData] = useState()
  useEffect(() => {
    const url = `${process.env.GATSBY_API_URL}/api/faculty/pkjain@nitp.ac.in`
    axios
      .get(url)
      .then(res => {
        const detail = res.data
        setData({
          profile: detail.profile,
          qualification: detail.education,
        })
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <>
      {data && (
        <FacultyProfile className="facultypage row">
          <div
            className="row rowmarl3"
            style={{ display: "block", width: `100%` }}
          >
            <h1>Our Director</h1>
          </div>
          <div className="faculty-img-row" style={{ position: `relative` }}>
            <div className="faculty-img-wrap">
              <img
                src={
                  data.profile.image != undefined
                    ? `${data.profile.image}`
                    : "/faculty.png"
                }
                className="facultypic"
              />
            </div>
            <a href={`mailto:${data.profile.email}`} target="blank">
              <img
                src={mail}
                className="img-fluid facmail"
                style={{ position: `absolute` }}
              />
            </a>
            <h2>{data.profile.name}</h2>
            <h3>Director</h3>
          </div>

          <div className="faculty-details-row">
            <div className="fac-card" data-aos="">
              <h3>Research Interest:-</h3>
              <p>{data.profile.research_interest}</p>
              <h3>Email:-</h3>
              <p>{data.profile.email}</p>
              <h3>Phone:-</h3>
              <p>{data.profile.ext_no}</p>
            </div>
            {data.qualification && data.qualification.length != 0 ? (
              <div className="fac-card" data-aos="">
                <h3>Educational Qualification</h3>
                <div className="factable">
                  <table>
                    <tr>
                      <td>
                        <h4>Certification</h4>
                      </td>
                      <td>
                        <h4>Institute Name</h4>
                      </td>
                      <td>
                        <h4>Passing Year</h4>
                      </td>
                    </tr>
                    {data.qualification.map(item => {
                      return (
                        <tr>
                          <td>
                            <li>{item.certification}</li>
                          </td>
                          <td>
                            <li>{item.institution}</li>
                          </td>
                          <td>
                            <li>{item.passing_year}</li>
                          </td>
                        </tr>
                      )
                    })}
                  </table>
                </div>
              </div>
            ) : null}
            <h1>What He Says?</h1>
            <div className="fac-card" data-aos="">
              <p id="dir" style={{ textAlign: `justify` }}>
                It is my pleasure to introduce one of the oldest Technological
                Institutes of North India, National Institute of Technology
                Patna, whose history goes back to 1876 when four survey schools
                were established in Dacca, Hoogly, Cuttack and Patna. The
                schools at Hoogly and Cuttack failed but those at Dacca and
                Patna continued to prosper. In 1882, a separate altogether,
                named as Bihar Industrial School, was opened in the premises of
                the survey school in Patna college campus. In July 1886, these
                two separate institutions were merged and given the name of
                Bihar School of Engineering under the leadership of Mr. A
                Ewbank, the then principal of Patna College. Between 1892 and
                1902, a functional building which is at present the main
                administrative building of NIT Patna, was built with Rs.
                100,000/- donation from Nawab Lulf Ali Khan of Patna City. The
                balance amount of Rs. 38,000/- came from the Prince of Wales
                reception fund. Prof. C. R. Walford was the Principal of this
                college from 1900 to 1926. In 1924, the engineering school
                upgraded to Bihar College of Engineering under Patna University.
                In 2004, MHRD, Government of India upgraded Bihar College of
                Engineering to National Institute of Technology Patna and in
                2007 it came under the act ‘NIT Act 2007’and declared Institute
                of National Importance.
                <br />
                <br /> At present NIT Patna is offering undergraduate programs
                (B. Tech & B. Arch) and Post graduate program (M. Tech & MRUP)
                along with Ph.D. Programs. Total number of students is nearly
                3000. The institute has state-of-art laboratories, in each
                department. This great institute has produced large number of
                alumni who served the nation with distinction like Mr. M. B.
                Verma, former Program Director of Prestigious LCA Project of
                DRDO, Dr. Ratan K. Sinha, Chairman, Atomic Energy Commission of
                India, Mr. C. Prasad, Ex. D G CPWD to name a few. The Institute
                has a very active linkage industry from its inception. Different
                PSUs are awarding scholarships to our students. The institute is
                going to sign MoU with FICCI and CII for collaboration soon. All
                our passed out graduates are serving the Indian Industry and
                PSUs with distinction. I wish the Institute all the success.
              </p>
              <h4>Prof. Pradip Kumar Jain Director,</h4>
              <h4>NIT Patna</h4>
            </div>
          </div>
        </FacultyProfile>
      )}
    </>
  )
}

export default Directorpage
