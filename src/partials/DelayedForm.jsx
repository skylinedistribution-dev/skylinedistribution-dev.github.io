import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useForm, ValidationError } from "@formspree/react";
import Cookies from "js-cookie";

Modal.setAppElement("#root"); // Set the root element for accessibility

function ContactForm({ closeModal }) {
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
        closeModal(); // Close the modal after successful submission
      }, 3000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset, closeModal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="w-full contact text-center" onSubmit={handleSubmit}>
        <h2 className="h2 mb-4">Unlock Exclusive Deals and Updates! </h2>
        <p className="mb-4">
          Join our mailing list to stay ahead with the latest product offerings <br />and special discounts!
        </p>
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
            placeholder="Enter your phone number"
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
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            disabled={state.submitting}
          >
            Sign Up Now
          </button>
        </div>
        <div className="privacy-note">
        

          <div className="flex">
          <strong>Privacy Note: </strong>
          <p className="mb-4"> We respect your privacy. Unsubscribe at any time.</p>
          </div>
          
          
        </div>
      </form>
      {showThankYou && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <p>Thanks for joining!</p>
        </div>
      )}
    </div>
  );
}

function DelayedPopup() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const formCookie = Cookies.get("formShown");

    if (!formCookie) {
      const timer = setTimeout(() => {
        setShowModal(true);
        Cookies.set("formShown", "true", { expires: 1 }); // Cookie expires in 1 day
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="Modal"
        overlayClassName="popup-overlay"
      >
        <button onClick={closeModal} className="close-button">x</button>
        <ContactForm closeModal={closeModal} />
      </Modal>
    </div>
  );
}

function App() {
  return <DelayedPopup />;
}

export default App;