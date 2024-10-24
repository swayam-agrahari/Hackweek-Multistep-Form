import { useNavigate } from "react-router-dom";
import { FormContext } from "../home";
import React, { useEffect, useState } from "react";

const Skills = () => {
    const navigate = useNavigate();
    const { formData, updateFormData } = React.useContext(FormContext);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState("true");
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://hacktoberfest.swayamagrahari1.workers.dev/')
            .then((res) => res.json())
            .then((data) => {
                setSkills(data.skill);

                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to load skills. Please try again later.');
                setLoading(false);
            });
    }, []);

    const handleSubmit = () => {
        if (formData.skills?.length === 0) {
            setError('Please select at least one skill.');
        } else {
            navigate('/step3');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Select Your Skills</h2>
                {loading && <p className="text-center text-gray-600">Loading...</p>}
                {error && <p className="text-center text-red-600 mb-4">{error}</p>}
                {!loading && skills.length > 0 && (
                    <div className="mb-4">
                        <select
                            multiple
                            className="w-full h-48 px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) =>
                                updateFormData(
                                    'skill',
                                    Array.from(e.target.selectedOptions, (option) => option.value)
                                )
                            }
                        >
                            {skills.map((skill) => (
                                <option key={skill} value={skill} className="py-1">
                                    {skill}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
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

export default Skills;
