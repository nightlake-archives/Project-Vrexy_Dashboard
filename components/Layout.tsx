import React, { ReactNode, useEffect, useState, Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Popover, Transition } from '@headlessui/react';
import {
	BookmarkAltIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorClickIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

type Props = {
	children?: ReactNode
	title?: string
}

const docs = [
	{
		name: 'h',
		description: 'best letter',
		href: '/docs/h',
		icon: PlayIcon
	}
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}


const Layout = ({ children, title }: Props) => {
	const [id, setID] = useState('oops');
	const [uri, setURI] = useState('oops');

	useEffect(() => {
		async function run() {
			const env = await import('../env.json');
			setID(env.id);
			setURI(env.uri);
		}
		run();
	})

	return (<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header>
			<Popover className="relative bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
						{/* Logo */}
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<a href="#">
								<span className="sr-only">Workflow</span>
								<img
									className="h-8 w-auto sm:h-10"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
									alt=""
								/>
							</a>
						</div>
						{/* Screenreader menu tooltip*/}
						<div className="-mr-2 -my-2 md:hidden">
							<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
								<span className="sr-only">Open menu</span>
								<MenuIcon className="h-6 w-6" aria-hidden="true" />
							</Popover.Button>
						</div>
						<Popover.Group as="nav" className="hidden md:flex space-x-10">
							<Popover className="relative">
								{({ open }) => (
									<>
										<Popover.Button
											className={classNames(
												open ? 'text-gray-900' : 'text-gray-500',
												'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
											)}
										>
											<span>Docs</span>
											<ChevronDownIcon
												className={classNames(
													open ? 'text-gray-600' : 'text-gray-400',
													'ml-2 h-5 w-5 group-hover:text-gray-500'
												)}
												aria-hidden="true"
											/>
										</Popover.Button>

										<Transition
											as={Fragment}
											enter="transition ease-out duration-200"
											enterFrom="opacity-0 translate-y-1"
											enterTo="opacity-100 translate-y-0"
											leave="transition ease-in duration-150"
											leaveFrom="opacity-100 translate-y-0"
											leaveTo="opacity-0 translate-y-1"
										>
											<Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
												<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
													<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
														{docs.map((item) => (
															<a
																key={item.name}
																href={item.href}
																className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
															>
																<item.icon className="flex-shrink-0 h-6 w-6 text-amber-600" aria-hidden="true" />
																<div className="ml-4">
																	<p className="text-base font-medium text-gray-900">{item.name}</p>
																	<p className="mt-1 text-sm text-gray-500">{item.description}</p>
																</div>
															</a>
														))}
													</div>
												</div>
											</Popover.Panel>
										</Transition>
									</>
								)}
							</Popover>
							<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
								About
							</a>

							<a href="https://top.gg/bot/636991807862997000/vote" className="text-base font-medium text-gray-500 hover:text-gray-900">
								top.gg
							</a>
						</Popover.Group>
						{/* Buttons */}
						<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
							<a
								href="#"
								className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
							>
								Authorize with Discord
							</a>
						</div>
					</div>
				</div>
				{/* Mobile Menu */}
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
										<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500">
											<span className="sr-only">Close menu</span>
											<XIcon className="h-6 w-6" aria-hidden="true" />
										</Popover.Button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-8">
										{docs.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
											>
												<item.icon className="flex-shrink-0 h-6 w-6 text-amber-600" aria-hidden="true" />
												<span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
											</a>
										))}
									</nav>
								</div>
							</div>
							<div className="py-6 px-5 space-y-6">
								<div className="grid grid-cols-2 gap-y-4 gap-x-8">
									<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
										About
									</a>

									<a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
										top.gg
									</a>
								</div>
								<div>
									<a
										href={`https://discord.com/api/oauth2/authorize?client_id=${id}&redirect_uri=${uri}&response_type=code&scope=guilds%20identify`}
										className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700"
									>
										Authorize with Discord
									</a>
								</div>
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</header>
		{children}
	</div>)
}

export default Layout