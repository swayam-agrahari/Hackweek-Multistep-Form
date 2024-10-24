import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../home";

const PortfolioUpload = () => {
    const navigate = useNavigate();
    const { formData, updateFormData } = React.useContext(FormContext);
    const [error, setError] = useState('');
    const [fileNames, setFileNames] = useState([]);

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const validFiles = files.filter((file) => file.size <= 2 * 1024 * 1024); // Max 2MB per file
        if (validFiles.length !== files.length) {
            setError('Some files were too large. Max file size is 2MB.');
        } else {
            setError('');
            const names = validFiles.map(file => file.name);
            setFileNames(names);
            updateFormData('portfolio', names);
        }
    };

    const handleSubmit = () => {
        if (formData.portfolio.length === 0) {
            setError('Please upload at least one file.');
        } else {
            navigate('/review');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Upload Your Portfolio</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="file_input">
                        Choose files (Max 2MB each)
                    </label>
                    <input
                        type="file"
                        id="file_input"
                        multiple
                        onChange={handleFileUpload}
                        className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                    />
                </div>
                {fileNames.length > 0 && (
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold mb-2 text-gray-700">Selected Files:</h3>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                            {fileNames.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PortfolioUpload;