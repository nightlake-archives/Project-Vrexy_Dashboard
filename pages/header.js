/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { DocumentSearchIcon, MenuIcon, XIcon, } from '@heroicons/react/outline'
import DesktopPopover from '../components/desktopPopover'
import MobilePopover from '../components/mobilePopoverPanel'

const docs = []
const resources = []

import { getCookies } from 'cookies-next'


export function LoginButton(loginState, displayState) {
  let displayClass;
  console.log('the', loginState.loginState)

  if (displayState.toString() === 'Mobile') { displayClass = 'w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700' }
  else { displayClass = 'ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'; }

  if (loginState.loginState === true) {
    return (<><a
      href="/dashboard"
      className={displayClass}
    >
      Open Dashboard
    </a></>)
  } else if (loginState.loginState === false) {
    return (<><a
      href={"https://discord.com/oauth2/authorize?client_id=" + process.env.CID + "&redirect_uri=" + process.env.REDIRECT + "&response_type=code&scope=guilds%20identify"}
      className={displayClass}
    >
      Login With Discord
    </a></>)
  }
}

function Header({ ifToken }) {
  return (
    <Popover className="relative bg-white dark:bg-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>

            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              top.gg
            </a>

            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs
            </a>

          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Invite The Bot
            </a>
            <LoginButton loginState={ifToken} />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    About
                  </a>

                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    top.gg
                  </a>

                  <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Docs
                  </a>
                </nav>
              </div>
            </div>


            <div className="py-6 px-5 space-y-6">
              <div>
                <LoginButton loginState={ifToken} displayState={"Mobile"} />
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-zinc-200 mt-1"
                >
                  Invite the bot
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export function getStaticProps() {
  const cookies = getCookies()
  console.log(cookies)
  const ifToken = cookies.token ? true : false;

  console.log('xmd', ifToken)
  return {
    props: {
      ifToken
    }
  }
}

export default Header