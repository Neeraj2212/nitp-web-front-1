import React from "react"
import Navlist from "../global/navlist"

const Deansinfo = [
  {
    name: "Prof. S.K. Verma",
    designation: "Deputy Director and Dean, Academic",
    type: "Dean",
  },
  {
    name: "Prof. Om Prakash",
    designation: "Dean, Faculty Welfare",
    type: "Dean",
  },
  {
    name: "Prof. Prakash Chandra",
    designation: "Dean, Student Welfare",
    type: "Dean",
  },
  {
    name: "Prof. Fulena Rajak",
    designation: "Dean, Planning and Development",
    type: "Dean",
  },
  {
    name: "Prof. Lal Bahadur Roy",
    designation: "Dean, Research and consultancy",
    type: "Dean",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Registrar",
  },
]
const BOG = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Chairperson(Actg.) BOG, Ex-Officio Member, NIT Patna",
    type: "chairperson",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Secretary",
  },
  {
    name: "Joint Secretary(Technical) or his/her nominee",
    designation: "Department of Higher Education, MHRD",
    type: "Member",
  },
  {
    name: "JS and Financial Advisor or his/her nominee",
    designation: "Department of Higher Education, MHRD",
    type: "Member",
  },
  {
    name: "Sri Shailendra P. Sinha",
    designation:
      "Managing Director Kalyanpur Cement Ltd.,Maurya Center,1 , Frazer Road, PB No. 89, Patna-800001(Bihar)",
    type: "Member",
  },
  {
    name: "Sri Aditya Prakash Mishra",
    designation: "Former Member, Railway Engineering Board",
    type: "Member",
  },
  {
    name: "Dr. Chandrawati Jee",
    designation:
      "Former Head, P.G. Department of Biotechnology, A.N. College, Patna",
    type: "Member",
  },
  {
    name: "Dr. Narendra Kumar Singh",
    designation:
      "Associate Professor & Head,Department of Physics, S.N. Sinha College, Jehanabad",
    type: "Member",
  },
  {
    name: "Prof. S.K. Verma",
    designation: "Professor, Mechanical Engg. Dept., NIT Patna",
    type: "Member",
  },
  {
    name: "Director IIT Patna",
    designation: "or his nominee not below the rank of professor",
    type: "Member",
  },
]
const BWC = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Director, NIT Patna",
    type: "Ex-Officio Chairperson",
  },
  {
    name: "Director or Deputy Secretary",
    designation: "or his nominee Dealing with NITs in Ministry",
    type: "Ex-Officio Member",
  },
  {
    name: "Director or Deputy Secretary",
    designation: "or his nominee Dealing with Finance of NITs in Ministry",
    type: "Ex-Officio Member",
  },
  {
    name: "Dr. Rajesh Kumar",
    designation: "Professor Department of Civil Engineering IIT BHU",
    type: "Member",
  },
  {
    name: "Sri Ashok Kumar",
    designation:
      "Director (Operation) South Bihar Power Distribution Co. Ltd Patna",
    type: "Member",
  },
  {
    name: "Sri Pawan Kumar",
    designation: `Executive Engineer
Construction Divison-1
BCD, Govt. of Bihar`,
    type: "Member",
  },
  {
    name: `Prof. Fulena Rajak`,
    designation: `Dean (Planning & Development), NIT Patna`,
    type: `Member`,
  },
  {
    name: `Dr. Asit Narayan`,
    designation: `Registrar, NIT Patna`,
    type: `Secretary`,
  },
]

const IDC = [
  {
    name: "Prof. Prakash Chandra",
    designation: "Dean(Student Welfare)",
    type: "Chairman",
  },
  {
    name: "Prof. Vivekanand Singh",
    designation: "Director's Nominee",
    type: "Member",
  },
  {
    name: "Dr. Samrat Mukherjee",
    designation: "Chairman Hostel Management Committee",
    type: "Member",
  },
  {
    name: "",
    designation:
      "Warden of the Hostel of Residence of which the student concerned is a boarder",
    type: "Member",
  },
  {
    name: "Dr. T. Roshni",
    designation: "One faculty nominated by the Senate",
    type: "Member",
  },
  {
    name: "",
    designation: "Students Representative nominated by Dean (Student Welfare)",
    type: "Member",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Member Secretary",
  },
]
const FC = [
  {
    name: "Prof. Pradip Kumar Jain",
    designation: "Director, NIT Patna",
    type: "Chairperson",
  },
  {
    name: "Joint Secretary(Technical) or his/her nominee",
    designation: "Department of Higher Education,MHRD",
    type: "Member",
  },
  {
    name: "JS and FInancial Advisor",
    designation: "Department of Higher Education, MHRD",
    type: "Member",
  },
  {
    name: "Director IIT Patna",
    designation: "or his nominee not below the rank of professor",
    type: "Member",
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Secretary",
  },
]

const director = [
  {
    director: "something",
  },
]

const Senate = [
  {
    name: "Prof. P. K. Jain               \n Director, NIT Patna",
    type: "Ex-Officio Chairman",
  },
  {
    name:
      "Dr. Manoj Kumar             \n             Professor, Architecture Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Fulena Rajak             \n             Professor, Architecture Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Sita Ram Sharma             \n             Professor, Chemistry Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. L. B. Roy             \n             Professor, Civil Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Sanjeev Sinha             \n             Professor, Civil Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Ajay Kumar Sinha             \n             Professor, Civil Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. S. S. Mishra             \n             Professor, Civil Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Vivekanand Singh             \n             Professor, Civil Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Ramesh Kumar             \n             Professor, Electrical Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Sawal Kishore Singh             \n             Mathematics Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. S. K. Verma             \n             Professor, Mechanical Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Om Prakash             \n             Professor, Mechanical Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Ramakar Jha             \n             Professor, Civil Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. Prakash Chandra             \n             Professor, Mechanical Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Dr. A. N. Sinha             \n             Professor, Mechanical Engineering Dept.",
    type: "Member",
  },
  {
    name:
      "Prof. K. P. Singh             \n             Former Director, IIT BHU",
    type: "External Member",
  },
  {
    name:
      "Prof. S. K. Singh             \n             Vice-Chancellor, LNMU, Darbhanga",
    type: "External Member",
  },
  {
    name:
      "Prof. Pushplata Tripathi, Pro-Vice Chancellor,             \n             Guru-Govind Singh Indraprastha University,             \n             New Delhi.",
    type: "External Member",
  },
  {
    name: "Dr. Asit Narayan             \n             Registrar, NIT Patna",
    type: "Ex-Officio Member Secretary",
  },
]

const ServiceUnit = [
  {
    designation: "Personal",
    type: "Registrar",
    name: "Dr. Asit Narayan",
  },
  {
    designation: "Establishment & Administration",
    type: "Deputy Registrar",
    name: "Dr. Asit Narayan",
  },
  {
    designation: "Examinations",
    type: "Prof. In-charge",
    name: "Dr. Abdur Rahman Quaff",
  },
  {
    designation: "Training and Placement",
    type: "Prof. In-charge",
    name: "Dr. Samrat Mukherjee",
  },
  {
    designation: "HMC",
    type: "Chairman",
    name: "Dr. Samrat Mukherjee",
  },
  {
    designation: "Procurement",
    type: "Professor Incharge",
    name: "Prof. Prakash Chandra",
  },
  {
    designation: "TEQIP-III",
    type: "Coordinator",
    name: "Dr. M. P. Singh",
  },
  {
    designation: "Computer Center",
    type: "Prof. In-charge",
    name: "Dr. M. P. Singh",
  },
  {
    designation: "Central Library",
    type: "Prof. In-charge",
    name: "Dr. Anshuman Singh",
  },
  {
    designation: "IT Services",
    type: "Prof. In-charge",
    name: "Dr. Prabhat Kumar",
  },
  {
    designation: "Web Services and MIS",
    type: "Prof. In-charge",
    name: "Dr. Akshay Deepak",
  },
  {
    designation: "Finance & Accounts",
    type: "Deputy Registrar",
    name: "Shri Mani Shankar Singh",
  },
  {
    designation: "R&D",
    type: "Deputy Registrar",
    name: "Sri Sunil Kumar Dwivedi",
  },
  {
    designation: "EMU",
    type: "Prof. In-charge",
    name: "Dr. R. K. Mandal",
  },
  {
    designation: "Examination",
    type: "Deputy Registrar",
    name: "Mrs. Bobby",
  },
  {
    designation: "IT Service",
    type: "Scientific & Technical Officer",
    name: "Dr. Santosh Kumar",
  },
  {
    designation: "Academics & Examination & Scholarship",
    type: "Assistant Registrar",
    name: "Shri Shardul Vikram",
  },
  {
    designation: "Establishment",
    type: "Assistant Registrar",
    name: "Shri Rajesh Kumar",
  },
  {
    designation: "Security & Housekeeping",
    type: "Assistant Registrar",
    name: "Sri J P Sharma",
  },
  {
    designation: "Finance & Accounts",
    type: "Assistant Registrar",
    name: "Sri Sunny Choudhary",
  },
  {
    designation: "Academics",
    type: "Assistant Registrar",
    name: "Sri Abhay Kumar",
  },
  {
    designation: "Student Activity and Sports",
    type: "Officer In-charge",
    name: "Sri Arijit Putatunda",
  },
]

const Admin = [
  {
    url: "/administration",
    title: "Director",
    data: "director",
    content: [],
  },
  {
    url: "/administration",
    title: "Deputy Director",
    data: "deputydirector",
  },
  {
    url: "/administration",
    title: "Deans",
    data: "deans",
    content: Deansinfo,
  },
  {
    url: "/administration",
    title: "Registrar",
    data: "registrar",
    content: [],
  },
  {
    url: "/administration",
    title: "Board of Governors",
    data: "bog",
    content: BOG,
  },
  {
    url: "/administration",
    title: "Senate",
    data: "senate",
    content: Senate,
  },
  {
    url: "/administration",
    title: "Building & Works committee",
    data: "bwc",
    content: BWC,
  },
  {
    url: "/administration",
    title: "Institute Disciplinary committee",
    data: "idc",
    content: IDC,
  },
  {
    url: "/administration",
    title: "Finance committee",
    data: "fc",
    content: FC,
  },
  {
    url: "/administration",
    title: "Service Unit Heads",
    data: "suh",
    content: ServiceUnit,
  },
]

export default Admin
