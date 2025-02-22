import React, { useEffect, useState } from "react"
import axios from "axios"
import mail from "./img/mail.svg"
import Layout from "../layout"
import { FacultyProfile } from "../styles/facultyprofile"

const Facultyprofile = ({ url }) => {
  const [data, setData] = useState()
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        const detail = res.data
        setData({
          profile: detail.profile,
          subjects: detail.subjects_teaching,
          memberships: detail.memberships,
          qualification: detail.education,
          currResponsibility: detail.curr_admin_responsibility,
          pastResponsibility: detail.past_admin_responsibility,
          patents:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "patent"
            ),
          books:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "book"
            ),
          journals: detail.journals,
          conferences:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "conference"
            ),
          article:
            detail.publications != undefined &&
            JSON.parse(detail.publications[0].publications).filter(
              x => x.type === "article"
            ),
          projects: detail.project,
          services: detail.professional_service,
          workExperience: detail.work_experience,
          phdCandidates: detail.phd_candidates,
        })
      })
      .catch(e => {
        console.log(e)
      })
  }, []) // because of "data", it was sending the requests again and again


  document.addEventListener("scroll", e => {
    let scrolled = document.scrollingElement.scrollTop
    if (scrolled >= 120) {
      if (screen.width > 768) {
        document.querySelector(".faculty-img-row").style.marginTop = "-4vh"
      }
    }else{
      document.querySelector(".faculty-img-row").style.marginTop = "3vh"
    }
})


  return (
    <>
      {data && (
        <Layout department={data.profile.department}>
          <FacultyProfile className="row">
            <div className="faculty-img-row">
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
                <img src={mail} className="img-fluid facmail" />
              </a>
              <h2>{data.profile.name}</h2>
              <h3>{data.profile.designation}</h3>
              {data.profile.cv && (
                <button className="cv-btn" onClick={(e)=>{window.open("https://drive.google.com/uc?export=download&id=" + data.profile.cv.split('id=').pop())}}>Download CV</button>
              )}
            </div>

            <div className="faculty-details-row">
              <h1>Profile</h1>
              <div className="fac-card" data-aos="fade-up">
                <h3>Research Interest:-</h3>
                <p>{data.profile.research_interest}</p>
                <h3>Email:-</h3>
                <p>{data.profile.email}</p>
                <h3>Phone:-</h3>
                <p>{data.profile.ext_no}</p>
              </div>

              {data.subjects && data.subjects.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Subjects</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Subject Code</h4>
                        </th>
                        <th>
                          <h4>Subject Name</h4>
                        </th>
                        <th>
                          <h4>Session</h4>
                        </th>
                        <th>
                          <h4>Year</h4>
                        </th>
                      </tr> */}
                      {data.subjects.map(item => {
                        return (
                          <p>{item.code}{" "}{item.name}{" "}{item.start?item.start:""}{" "}{item.end?item.end:""}</p>
                          // <p>{item.code}{" "}{item.name}{" "}{item.start}{" "}{new Date(item.end).getFullYear()}</p>
                          // <tr>
                          //   <td>
                          //     <p>{item.code}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.name}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.start}</p>
                          //   </td>
                          //   <td>
                          //     <p>{new Date(item.end).getFullYear()}</p>
                          //   </td>
                          // </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.memberships && data.memberships.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Memberships & Society</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Membership Id</h4>
                        </th>
                        <th>
                          <h4>Membership Society</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr> */}
                      {data.memberships.map(item => {
                        return (
                          <p>{item.membership_id}{" "}{item.membership_society}{" "}{item.start!=null | item.end!=null?` [ ${item.start?item.start:""} ${item.start!=null & item.end!=null?" | ":""} ${item.end?item.end:""} ] `:""}</p>
                          // <p>{item.membership_id}{" "}{item.membership_society}{" "}{` [${new Date(item.start).getMonth() + 1} -
                          // ${new Date(item.start).getFullYear()} / ${new Date(item.end).getMonth() + 1} -
                          // ${new Date(item.end).getFullYear()}]`}</p>
                          // <tr>
                          //   <td>
                          //     <p>{item.membership_id}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.membership_society}</p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.start).getMonth() + 1} /{" "}
                          //       {new Date(item.start).getFullYear()}
                          //     </p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.end).getMonth() + 1} /{" "}
                          //       {new Date(item.end).getFullYear()}
                          //     </p>
                          //   </td>
                          // </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.qualification && data.qualification.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Educational Qualification</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Certification</h4>
                        </th>
                        <th>
                          <h4>Institute Name</h4>
                        </th>
                        <th>
                          <h4>Passing Year</h4>
                        </th>
                      </tr> */}
                      {data.qualification.map(item => {
                        return (
                          <p>{item.certification}{" "}{item.institution?item.institution:""}{" "}{item.passing_year?item.passing_year:""}</p>
                          // <tr>
                          //   <td>
                          //     <p>{item.certification}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.institution}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.passing_year}</p>
                          //   </td>
                          // </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.article && data.article.length != 0 && (
                <>
                  <div className="fac-card" data-aos="fade-up">
                    <h3>Articles</h3>
                    {data.article.map(item => (
                      <p style={{ maxWidth: `1000px` }}>
                        <li>{`${item.authors}, "${item.title}", ${item.journal_name} (${item.year})`}</li>
                      </p>
                    ))}
                  </div>
                </>
              )}
              {data.conferences && data.conferences.length != 0 && (
                <>
                  <div className="fac-card" data-aos="fade-up">
                    <h3>Conferences</h3>
                    {data.conferences.map(item => (
                      <p style={{ maxWidth: `1000px` }}>
                        <li>{`${item.authors}, "${item.title}", ${item.booktitle},${item.citation_key} (${item.year})`}</li>
                      </p>
                    ))}
                  </div>
                </>
              )}

              {data.books && data.books.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Books</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Authors</h4>
                        </th>
                        <th>
                          <h4>Editors</h4>
                        </th>
                        <th>
                          <h4>Publisher</h4>
                        </th>
                        <th>
                          <h4>Year</h4>
                        </th>
                        <th>
                          <h4>Citation</h4>
                        </th>
                      </tr>
                      {data.books.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.title}</p>
                            </td>
                            <td>
                              <p>{item.authors}</p>
                            </td>
                            <td>
                              <p>{item.editors}</p>
                            </td>
                            <td>
                              <p>{item.publisher}</p>
                            </td>
                            <td>
                              <p>{item.year}</p>
                            </td>
                            <td>
                              <p>{item.citation_key}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.patents && data.patents.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Patents</h3>
                  <div className="factable">
                    <table>
                      <tr>
                        <th>
                          <h4>Year</h4>
                        </th>
                        <th>
                          <h4>Year Filed</h4>
                        </th>
                        <th>
                          <h4>Nationality</h4>
                        </th>
                        <th>
                          <h4>Number</h4>
                        </th>
                        <th>
                          <h4>Citation Key</h4>
                        </th>
                      </tr>
                      {data.patents.map(item => {
                        return (
                          <tr>
                            <td>
                              <p>{item.year}</p>
                            </td>
                            <td>
                              <p>{item.yearfiled}</p>
                            </td>
                            <td>
                              <p>{item.nationality}</p>
                            </td>
                            <td>
                              <p>{item.number}</p>
                            </td>
                            <td>
                              <p>{item.citation_key}</p>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.currResponsibility && data.currResponsibility.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Current Administrative Responsibility</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Post</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                      </tr> */}
                      {data.currResponsibility.map(item => {
                        return (
                          <p>{item.curr_responsibility}{" "}{item.start?`[ ${item.start} ]`:""}</p>
                          // <p>{item.curr_responsibility}{" "}[{new Date(item.start).getMonth() + 1}-{" "}{new Date(item.start).getFullYear()}]</p>
                          // <tr>
                          //   <td>
                          //     <p>{item.curr_responsibility}</p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.start).getMonth() + 1} /{" "}
                          //       {new Date(item.start).getFullYear()}
                          //     </p>
                          //   </td>
                          // </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.pastResponsibility && data.pastResponsibility.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Past Administrative Responsibility</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Post</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr> */}
                      {data.pastResponsibility.map(item => {
                        return (
                          <p>{item.past_responsibility}{" "}[ {item.start?item.start:""} {item.start!=null & item.end!=null?"|":""} {item.end?item.end:""} ]</p>
                          // <p>{item.past_responsibility}{" "}[{new Date(item.start).getMonth() + 1} -{" "}
                          //       {new Date(item.start).getFullYear()} / {new Date(item.end).getMonth() + 1}-{" "}
                          //       {new Date(item.end).getFullYear()}]</p>
                          // <tr> 
                          //    <td>
                          //     <p>{item.past_responsibility}</p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.start).getMonth() + 1} /{" "}
                          //       {new Date(item.start).getFullYear()}
                          //     </p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.end).getMonth() + 1} /{" "}
                          //       {new Date(item.end).getFullYear()}
                          //     </p>
                          //   </td>
                          // </tr> 
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.workExperience && data.workExperience.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Work Experiences</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Designation</h4>
                        </th>
                        <th>
                          <h4>Institute/Company</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr> */}
                      {data.workExperience.map(item => {
                        return (
                          <p>{item.work_experiences}{" "}{item.institute}{" "}[{item.start?item.start:""} {item.start!=null & item.end!=null?"|":""} {item.end?item.end:""} ]</p>
                          // <p>{item.work_experiences}{" "}{item.institute}{" "}[{new Date(item.start).getMonth() + 1} -{" "}{new Date(item.start).getFullYear()} / {new Date(item.end).getMonth() + 1} -{" "}{new Date(item.end).getFullYear()}]</p>
                          // <tr>
                          //   <td>
                          //     <p>{item.work_experiences}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.institute}</p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.start).getMonth() + 1} /{" "}
                          //       {new Date(item.start).getFullYear()}
                          //     </p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.end).getMonth() + 1} /{" "}
                          //       {new Date(item.end).getFullYear()}
                          //     </p>
                          //   </td>
                          // </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.services && data.services.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Professional Services</h3>
                  {data.services.map(item => {
                    return <><p><li>{item.services}</li></p></>
                  })}
                </div>
              )}
              {/* {data.projects && data.projects.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Projects</h3>
                  {data.projects.map(item => {
                    return <li>{item.project}</li>
                  })}
                </div>
              ) } */}

              {data.projects && data.projects.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Projects</h3>
                  <div className="factable">
                    <table>
                      {/* <tr>
                        <th>
                          <h4>Title</h4>
                        </th>
                        <th>
                          <h4>Sponsoring Agency</h4>
                        </th>
                        <th>
                          <h4>Amount</h4>
                        </th>
                        <th>
                          <h4>Start-Date</h4>
                        </th>
                        <th>
                          <h4>End-Date</h4>
                        </th>
                      </tr> */}
                      {data.projects.map(item => {
                        return (
                          <p>{item.project}{" "}{item.sponsor?item.sponsor:""}{" "}{item.amount?item.amount:""}{" "}{item.start!=null | item.end!=null ?`[${item.start?item.start:""} ${item.start!=null & item.end!=null?"|":""} ${item.end?item.end:""}]`:""}</p>
                          // <p>{item.project}{" "}{item.sponsor}{" "}{item.amount}{" "}[{new Date(item.start).getMonth() + 1} -{" "}{new Date(item.start).getFullYear()} / {new Date(item.end).getMonth() + 1} -{" "}{new Date(item.end).getFullYear()}]</p>
                          // <tr>
                          //   <td>
                          //     <p>{item.project}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.sponsor}</p>
                          //   </td>
                          //   <td>
                          //     <p>{item.amount}</p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.start).getMonth() + 1} /{" "}
                          //       {new Date(item.start).getFullYear()}
                          //     </p>
                          //   </td>
                          //   <td>
                          //     <p>
                          //       {new Date(item.end).getMonth() + 1} /{" "}
                          //       {new Date(item.end).getFullYear()}
                          //     </p>
                          //   </td>
                          // </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
              )}

              {data.phdCandidates && data.phdCandidates.length != 0 && (
                <div className="fac-card" data-aos="fade-up">
                  <h3>Phd Candidates</h3>
                  <div className="factable">
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <h4>Student Name</h4>
                          </th>
                          <th>
                            <h4>Thesis Topic</h4>
                          </th>
                          <th>
                            <h4>Start Year</h4>
                          </th>
                          <th>
                            <h4>Completion Year</h4>
                          </th>
                        </tr>
                        {data.phdCandidates.map((item,index) => {
                          return (
                            <tr>
                              <td>
                                {index+1}{`)`} {item.phd_student_name}
                              </td>
                              <td>
                                <p>{item.thesis_topic}</p>
                              </td>
                              <td>
                                <p>{item.start_year}</p>
                              </td>
                              <td>
                                <p>{item.completion_year}</p>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </FacultyProfile>
        </Layout>
      )}
    </>
  )
}

export default Facultyprofile
