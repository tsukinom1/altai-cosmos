import React from 'react';

const Alert = ({text}) => {
    return (
        <div className="bg-indigo-900 text-center py-4 my-6 lg:px-4">
            <div
                className="mx-auto p-2 items-center text-indigo-100 leading-none lg:rounded-full flex inline-flex"
                role="alert">
                    <span
                        className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">---</span>
                <span className="font-semibold mr-2 text-left flex-auto">{text}</span>
            </div>
        </div>
    );
};

export default Alert;