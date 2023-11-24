import { useRouter } from "next/router";
import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";

const AddUser: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);
  const [submittedValues, setSubmittedValues] = useState({
    email: "",
    name: "",
    title: "",
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);


  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || title === "" || city === "") {
      toast.error("All fields are required");
      setError(true);
    } else if (email.indexOf("@" && "mail.com") === -1) {
      toast.error("@ is missing in the email");
      setError(true);
      if (email === "!#$%^&*()?<>/|{}") {
        toast.error("Not Allowed: !#$%^&*()?<>/|{}");
      }
    } else if (name.length <= 3) {
      toast.error("Add Name Characters More Than 3");
      setError(true);
    } else if (/[!#$%^&*()?<>/|{}]/.test(email)) {
      toast.error("Not Allowed Special Characters: !#$%^&*()?<>/|{}");
      setError(true);
    } else {
      toast.success("User Saved");
      setIsSubmitted(true);
      setError(false); // Reset error state
      setSubmittedValues({
        email,
        name,
        title,
        city,
      });
      // Redirect or do something else
      // router.push("/");
    }
  };

  return (  
    <>
      <h1 className="text-2xl ml-4 font-bold mt-4">Add User</h1>
    <div className="p-10 rounded border border-slate-500 bg-cyan-950 m-4">
      <p className="text-white mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        dolorem vel cupiditate laudantium dicta.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm text-white block mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-black w-full"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm text-white block mb-1 font-medium"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-black w-full"
              placeholder="yourmail@provider.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="job"
              className="text-sm text-white block mb-1 font-medium"
            >
              Job title
            </label>
            <input
              type="text"
              name="job"
              id="job"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-black w-full"
              placeholder="(ex. developer)"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="text-sm text-white block mb-1 font-medium"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-black w-full"
              placeholder="ex. Lahore,Pakistan"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          {Error ? <p className="text-2xl text-red-600">ERROR</p> : ""}
        </div>
        <div className="space-x-4 mt-8">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
            Save
          </button>
          <button
            type="button"
            className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
            Cancel
          </button>
        </div>
      </form>
            {isSubmitted && (
            <div className="p-2 mt-10">
              <p className="text-green-600 text-lg mb-10">Form submitted successfully!</p>
              <div className="flex text-white text-lg gap-10">
              <p>Email: <p>{submittedValues.email}</p></p>
              <p>Name: <p>{submittedValues.name}</p></p>
              <p>Title: <p>{submittedValues.title}</p></p>
              <p>Birthday: <p>{submittedValues.city}</p></p>
              </div>
            </div>
          )}
    </div>
    </>
  );
};

export default AddUser;
