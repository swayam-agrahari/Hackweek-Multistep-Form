import { useNavigate } from "react-router-dom";
import { FormContext } from "../home";
import React from "react";

const Review = () => {
    const navigate = useNavigate();
    const { formData } = React.useContext(FormContext);

    //error cannot get formdata here 
    const handleSubmit = () => {
        navigate('/submit', { state: formData });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Review & Submit</h2>
                <div className="mb-6 bg-gray-50 p-4 rounded-md">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Form Data:</h3>
                    <pre className="text-sm text-gray-600 whitespace-pre-wrap break-words">
                        {JSON.parse(formData, null, 2)}
                    </pre>
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Review;