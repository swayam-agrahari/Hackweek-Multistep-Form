import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import Skills from "./components/Skills";
import PortfolioUpload from "./components/PortfolioUpload";
import Review from "./components/Review";
import Submit from "./components/Submit";
import PersonolInfo from "./components/PersonolInfo";

const initialData = {
    name: "",
    email: "",
    age: "",
    gender: "",
    skills: [],
    portfolio: [],
};

export const FormContext = React.createContext();

const MultiStepForm = () => {
    const [formData, setFormData] = useState(() => {
        const savedData = JSON.parse(localStorage.getItem("formData"));
        return savedData || initialData;
    });

    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    const updateFormData = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <Router>
            <FormContext.Provider value={{ formData, updateFormData }}>
                <Routes>
                    <Route path="/step1" element={<PersonolInfo />} />
                    <Route path="/step2" element={<Skills />} />
                    <Route path="/step3" element={<PortfolioUpload />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/submit" element={<Submit />} />
                    <Route path="/" element={<Start />} />
                </Routes>
            </FormContext.Provider>
        </Router>
    );
};

const Start = () => (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-gray-500 text-white ">
        <h1 className="text-4xl p-8">Multi-Step Form</h1>
        <Link to="/step1" className="text-2xl p-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Start</Link>
    </div>
);







export default MultiStepForm;
