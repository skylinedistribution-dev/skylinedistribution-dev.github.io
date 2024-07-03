import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xgvweogg");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    number: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowThankYou(true);
      const timer = setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          company: "",
          number: "",
        });
        reset();
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="relative" id="connect-with-us">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-24 sm:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="h2">Request our catalog</h2>
        </div>

        <div className="pt-12 md:pt-20">
          <div className="flex flex-row justify-center items-center pb-8">
            <form className="w-full contact" onSubmit={handleSubmit}>
              <div className="flex form-item mb-4">
                <div className="fname mr-2">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="Enter your first name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                  <ValidationError
                    prefix="First Name"
                    field="first_name"
                    errors={state.errors}
                  />
                </div>
                <div className="fname">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="last_name"
                    type="text"
                    name="last_name"
                    placeholder="Enter your last name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                  <ValidationError
                    prefix="Last Name"
                    field="last_name"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="form-item mb-4">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              
              <div className="form-item mb-4">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Enter your company name"
                  value={formData.company}
                  onChange={handleChange}
                />
                <ValidationError
                  prefix="company"
                  field="company"
                  errors={state.errors}
                />
              </div>

              <div className="form-item mb-4">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter Your Phone"
                  value={formData.number}
                  onChange={handleChange}
                />
                <ValidationError
                  prefix="Number"
                  field="number"
                  errors={state.errors}
                />
              </div>
              
              <div className="form-item mb-4">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showThankYou && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <p>Thanks for joining!</p>
        </div>
      )}
    </section>
  );
}

function App() {
  return <ContactForm />;
}

export default App;