import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "AIA Indonesia": {
      jobTitle: "IT Support Engineer (Project) @",
      duration: "JAN 2022 - NOV 2022",
      desc: [
       "Prepare for New Employee Onboarding (Laptop Preparation, Create Email, Laptop Handover, and Laptop QC)",
       "In charge of Troubleshooting Issue problem Laptop / Inquiries and Request & Complaints (Email/MS.Office issues, Laptop Service)",
       "Responsible to Office Tools Management (ISP, Router, Access Point, Printer, Telephone, Managing ERP)"
     ]
   },
    "PT. Hacktivate Teknologi Indonesia": {
       jobTitle: "React & React Native FrontEnd Developer Internship (Remote) @",
       duration: "FEB 2022 - JUN 2022",
       desc: [
        "Implement the React framework in creating a Landing Page Website using React.JS in accordance with atomic design rules",
        "Configuring Domain and VPN",
        "Develop mobile-based Hybrid Apps for Android and iOS using React Native",
        "Managing data in the Front End sphere using Redux includes implementing the Next.JSframework concept for server-side needs."
      ]
    },
    "PT. Impactbyte Teknologi Edukasi": {
      jobTitle: "UI/UX Designer Internship (Remote) @",
      duration: "AUG 2021 - DEC 2021",
      desc: [
        "Create a mobile application design for the Jago Last Wish feature related to life insurance products for Bank Jago",
        "Designed, developed, and deployed business intelligence applications",
        "Prepared business models, flowcharts, and diagrams",
        "Executed and validated test cases",
        "Manage project through status meetings, weekly reports, identifying risks, and tracking issues"
      ]
    },
    "PT. Asuransi Jiwa Generali Indonesia": {
      jobTitle: "IT Support Engineer (Project) @",
      duration: "AUG 2021 - DES 2021",
      desc: [
        "Configuring Domain and VPN",
        "Troubleshooting problematic computer systems or network components",
        "Develop user guides, maintenance documents, project documentation, and release documents",
        "Respond to all inquiries and requests in a timely manner"
      ]
    },
     "PT. Bank Tabungan Negara (Persero) Tbk KCP Harapan Indah Bekasi": {
      jobTitle: "IT Support Engineer (Project) @",
      duration: "AUG 2017 - DES 2017",
      desc: [
        "Monitoring and Supporting for production servers and devices.",
        "Perform system, hardware and network maintenance on regularly",
        "Keep system, hardware and network performance, stable and secure",
        "Installation and troubleshooting servers and devices"
      ]
    },
    // NONE: {
    //   jobTitle: "Software Engineering Intern @",
    //   duration: "MAY 2019 - AUG 2019",
    //   desc: [
    //     "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //     "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //     "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //   ]
    // }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function(descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
