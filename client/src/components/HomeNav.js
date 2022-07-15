/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomeNav({ handleLogout }) {
  const [navigation, setNavigation] = useState([
    { name: "Discover", href: "#", current: true },
    { name: "Gallery", href: "#", current: false },
    { name: "Update Account", href: "#", current: false },
    { name: "Logout", href: "#", current: false },
  ]);

  const history = useHistory();

  function handleNav(item) {
    const updatedNavigation = navigation.map((navigationItem) => {
      if (navigationItem.name === item.name) {
        navigationItem.current = true;
      } else {
        navigationItem.current = false;
      }
      return navigationItem;
    });

    setNavigation(updatedNavigation);

    if (item.name === "Logout") {
      handleLogout({});
      history.push(`/`);
    } else if (item.name === "Update Account") {
      history.push(`/home/updateaccount`);
    } else {
      history.push(`/home/${item.name.toLowerCase()}`);
    }
  }
  return (
    <Disclosure as="nav" className="bg-gray-400 rounded-b-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Art_Institute_of_Chicago_logo.svg/1200px-Art_Institute_of_Chicago_logo.svg.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Art_Institute_of_Chicago_logo.svg/1200px-Art_Institute_of_Chicago_logo.svg.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav(item);
                        }}
                        // href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-orange-700 text-white"
                            : "text-white hover:bg-orange-400 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-semibold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
