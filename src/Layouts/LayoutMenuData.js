import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isAccessGroup, setIsAccessGroup] = useState(false);
  const [isTasks, setIsTasks] = useState(false);
  const [isConfiguration, setIsConfiguration] = useState(false);
  // const [isTask, setIsTask] = useState(false);

  const [isApps, setIsApps] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  // Apps
  const [isEmail, setEmail] = useState(false);
  const [isSubEmail, setSubEmail] = useState(false);
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isCRM, setIsCRM] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [isInvoices, setIsInvoices] = useState(false);
  const [isSupportTickets, setIsSupportTickets] = useState(false);
  const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
  const [isJobs, setIsJobs] = useState(false);
  const [isJobList, setIsJobList] = useState(false);
  const [isCandidateList, setIsCandidateList] = useState(false);

  // Authentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Pages
  const [isProfile, setIsProfile] = useState(false);
  const [isLanding, setIsLanding] = useState(false);

  // Charts
  const [isApex, setIsApex] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");

    if (iscurrentState !== "Reporting") {
      setIsReporting(false);
    }

    if (isUser !== "User") {
      setIsUser(false);
    }
    if (isAccessGroup !== "Access Group") {
      setIsAccessGroup(false);
    }
    if (isTasks !== "Task") {
      setIsTasks(false);
    }
    if (isConfiguration !== "Configuration") {
      setIsConfiguration(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isReporting,
    isAccessGroup,
    isApps,
    isAuth,
    isPages,
    isBaseUi,
    isAdvanceUi,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "reporting",
      label: "Reporting",
      icon: "ri-dashboard-2-line",
      link: "/reporting",
      stateVariables: isReporting,
      click: function (e) {
        setIsReporting((prev) => !prev);
        setIscurrentState("Reporting");
        updateIconSidebar(e);
        e.preventDefault();
      },
      subItems: [
        {
          id: "analytics",
          label: "Analytics",
          link: "/reporting/reporting-analytics",
          parentId: "reporting",
        },
        {
          id: "list",
          label: "List",
          link: "/reporting/reporting-list",
          parentId: "reporting",
        },
      ],
    },
    {
      id: "user",
      label: "User",
      icon: "ri-user-2-fill",
      link: "/user",
      stateVariables: isUser,
      click: function (e) {
        e.preventDefault();
        setIsUser((prev) => !prev);
        setIscurrentState("User");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "users-list",
          label: "Users List",
          link: "/user/user-list",
          parentId: "user",
        },
        {
          id: "access-group",
          label: "Access Group",
          link: "/user/access-group",
          parentId: "user",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setEmail(!isEmail);
          },
          stateVariables: isEmail,
          childItems: [
            {
              id: 1,
              label: "Create Access Group",
              link: "/user/access-group/create-access-group",
              parentId: "user",
            },
            {
              id: 2,
              label: "Assign Access Group",
              link: "/user/access-group/assign-access-group",
              parentId: "user",
            },
          ],
        },
        {
          id: "activity",
          label: "Activity",
          link: "/user/activity",
          parentId: "user",
        },
      ],
    },
    {
      id: "task",
      label: "Task",
      icon: "ri-briefcase-3-line",
      link: "/task",
      stateVariables: isTasks,
      click: function (e) {
        e.preventDefault();
        setIsTasks((prev) => !prev);
        setIscurrentState("Task");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "teams",
          label: "Teams",
          link: "/task/teams",
          parentId: "task",
        },
        {
          id: "task-board",
          label: "Task Board",
          link: "/task/task-board",
          parentId: "task",
        },
        {
          id: "schedule",
          label: "Schedule",
          link: "/task/schedule",
          parentId: "task",
        },
      ],
    },
    {
      id: "configuration",
      label: "Configuration",
      icon: "ri-settings-2-fill",
      link: "/configuration",
      stateVariables: isConfiguration,
      click: function (e) {
        e.preventDefault();
        setIsConfiguration((prev) => !prev);
        setIscurrentState("Configuration");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "notifications",
          label: "Notifications",
          link: "/configuration/notifications",
          parentId: "configuration",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
