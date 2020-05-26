import React from 'react';
import logo from './../logo.svg'
import { Link, useHistory } from 'react-router-dom';

export const Heading = () => {

    const history = useHistory();

    const onEditClickNav = () => {
        
        let Id = prompt('Pass Employee Id');
        
        if(Id != null && parseInt(Id)){
            history.push(`/edit/${Id}`)
        }
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img alt="React Context APIs" src={logo} style={{ height: 50, width: 50 }} />
                <span className="font-semibold text-xl tracking-tight">
                    <Link to="/">
                        React Context API
                            </Link></span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Employees List
                            </Link>

                    <Link to="/add" href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">

                        Add
                            </Link>

                    <a onClick={onEditClickNav} href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Edit
                    </a>
                </div>
            </div>
        </nav>
    )
}