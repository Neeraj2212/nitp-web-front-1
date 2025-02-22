import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Dephomepage from "../../components/departments/dephome"
import {
  routeName,
  title,
  titleDescription,
  about,
  mission,
  activities,
  vision,
  contact,
  datalist,
} from "../../components/departments/hss/hsshome"
const Hss = () => (
  <Layout>
    <SEO title="HSS" />
    <Dephomepage
      routeName={routeName}
      title={title}
      TitleDescription={titleDescription}
      About={about}
      Mission={mission}
      Vision={vision}
      Contact={contact}
      Activities={activities}
      datalist={datalist}
    />
  </Layout>
)

export default Hss
