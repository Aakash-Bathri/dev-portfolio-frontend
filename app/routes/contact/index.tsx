import { sub } from "framer-motion/client";
import type { Route } from "./+types";
// import { Form } from "react-router";

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const subject = formData.get("subject") as string;
//   const message = formData.get("message") as string;

//   const error: Record<string, string> = {};

//   if (!name) error.name = "Name is required";
//   if (!email) {
//     error.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     error.email = "Invalid Email format";
//   }
//   if (!subject) error.subject = "Subject is required";
//   if (!message) error.message = "Message is required";

//   if (Object.keys(error).length > 0) {
//     return { error };
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };
//   return { message: "Form submitted Successfully", data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  // const error = actionData?.error || {};

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl text-white mb-8 text-center font-bold">
        📬 Contact Me
      </h2>

      {/* {actionData?.message ? (
        <p className="p-4 mb-4 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md">
          {actionData.message}
        </p>
      ) : null} */}

      <form
        action="https://formspree.io/f/mbdlrzwl"
        method="post"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {/* {error.name && (
            <p className="text-red-400 text-sm mt-1 ">{error.name}</p>
          )} */}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {/* {error.email && (
            <p className="text-red-400 text-sm mt-1 ">{error.email}</p>
          )} */}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {/* {error.subject && (
            <p className="text-red-400 text-sm mt-1 ">{error.subject}</p>
          )} */}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          {/* {error.message && (
            <p className="text-red-400 text-sm mt-1 ">{error.message}</p>
          )} */}
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
