// import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import ContactData from "./contactData";
import ContentData from "./contentData";
import ServicesData from "./servicesData";
import AdminData from "./adminData";

const MainAdminPage = () => {
  const [route, setRoute] = useState("/content");

  const PageContent = React.memo(() => {
    switch (route) {
      case "/a":
        return <ContentData />;
      case "/b":
        return <AdminData />;
      case "/c":
        return <ServicesData />;
      case "/d":
        return <ContactData />;
      default:
        return <ContentData />;
    }
  }, [route]);

  const HandleRoute = (newRoute) => {
    setRoute(newRoute);
  };

  useEffect(() => {
    // Fetch data only when route changes
    // Update component state based on fetched data
    switch (route) {
      case "/a":
        // Fetch content data and update state with data
        break;
      case "/b":
        // Fetch admin data and update state with data
        break;
      case "/c":
        // Fetch services data and update state with data
        break;
      case "/d":
        // Fetch contact data and update state with data
        break;
      default:
        // Fetch default content data and update state with data
        break;
    }
  }, [route]);

  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-center items-center">
        <nav className="bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 rounded">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <button
              data-testid="flowbite-navbar-toggle"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
            <div
              data-testid="flowbite-navbar-collapse"
              className="w-full md:block md:w-auto hidden"
            >
              <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium cursor-pointer">
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    onClick={() => HandleRoute("/a")}
                  >
                    content data
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    onClick={() => HandleRoute("/d")}
                  >
                    contact data
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    onClick={() => HandleRoute("/c")}
                  >
                    services data
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                    onClick={() => HandleRoute("/b")}
                  >
                    admin data{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* <PageContent /> */}
      {/* <ServicesData /> */}
      {/* <ContactData /> */}
      {/* <AdminData /> */}
      <ContentData />

      {/* <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link onClick={HandleRoute("contents")}>
           <Button>contens</Button>
          </Navbar.Link>
          <Navbar.Link onClick={HandleRoute("contacts")}>
            contact data
          </Navbar.Link>
          <Navbar.Link onClick={HandleRoute("services")}>
            services data
          </Navbar.Link>
          <Navbar.Link onClick={HandleRoute("admin")}>admin data </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      {/* <Nav />  */}
      {/* <Nav /> */}
      {/* <div className="flex flex-col gap-4 justify-center ">
        <h2 className="justify-center items-center font-bold text-2xl">
          Content Data
        </h2>
        <ContentData />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="justify-center items-center font-bold text-2xl">
          Content Data
        </h2>
        <ContentData />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="justify-center items-center font-bold text-2xl">
          Service Data
        </h2>
        <ServicesData />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="justify-center items-center font-bold text-2xl">
          Contact Data
        </h2>
        <ContactData />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="justify-center items-center font-bold text-2xl">
          Admin Data
        </h2>
        <AdminData />
      </div> */}
    </div>
  );
};

export default MainAdminPage;
