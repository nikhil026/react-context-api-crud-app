import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalContext";
import { useHistory, Link } from "react-router-dom";


export const Employee = (route) => {
    const history = useHistory();

    const { employees } = useContext(GlobalContext);

    const [selectedUser, setSeletedUser] = useState({
        id: null,
        name: "",
        designation: "",
        location: "",
        image: ""
    })

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find(emp => emp.id === parseInt(employeeId));
        setSeletedUser(selectedUser);
    }, []);

    return (
        <div class="flex mb-12" style={{marginTop: 20, width: '70%', marginLeft: '15%' }}>
            <div class="w-2/6 bg-gray-100">
                <img src={selectedUser.image} alt="Woman holding a mug" />
            </div>
            <div class="w-4/6 bg-gray-100">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">

                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        {selectedUser.designation}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4" src={selectedUser.image} alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{selectedUser.name}</p>
                        <p className="text-gray-600">{selectedUser.location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

