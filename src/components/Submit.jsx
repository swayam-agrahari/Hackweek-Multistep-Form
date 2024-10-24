import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Submit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { formData } = location.state || {};



    if (!formData) {
        return (
            <div className="text-center mt-10">
                <h2>No data to display</h2>
                <button onClick={() => navigate('/')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Go back to form    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Portfolio Files</h3>
                        <ul className="text-gray-600">
                            {formData.portfolio.length > 0
                                ? formData.portfolio.map((file, index) => <li key={index}>{file.name}</li>)
                                : 'No files uploaded'}
                        </ul>
                    </div>
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Submission Successful</h2>

                <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Name</h3>
                        <p className="text-gray-600">{formData.name || 'N/A'}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                        <p className="text-gray-600">{formData.email || 'N/A'}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Age</h3>
                        <p className="text-gray-600">{formData.age || 'N/A'}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Gender</h3>
                        <p className="text-gray-600">{formData.gender || 'N/A'}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
                        <p className="text-gray-600">
                            {formData.skills.length > 0
                                ? formData.skills.join(', ')
                                : 'No skills selected'}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-700">Portfolio Files</h3>
                        <ul className="text-gray-600">
                            {formData.portfolio.length > 0
                                ? formData.portfolio.map((file, index) => <li key={index}>{file.name}</li>)
                                : 'No files uploaded'}
                        </ul>
                    </div>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="w-full mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default Submit;
