import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const CreateAdvertForm = () => {
  const [message, setMessage] = useState<{ type: string, text: string} | null >(null);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      photo: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string()
        .required("Description is required")
        .min(10, "Must be at least 10 characters"),
      photo: Yup.string().notRequired(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("api/adverts", {
          method: "Post",
          headers: { "Content-Type": "application/json", accept: "*/*" },
          body: JSON.stringify(values),
        });
        if (!response.ok) {
          throw new Error("Failed to create advert");
        }
        setMessage({ type: "success", text: "Created successfully!" });
        resetForm();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setMessage({ type: "error", text: error.message });
      }
    },
  });

  return (
    <div className="mx-auto max-w-sm space-y-6 p-6 rounded-lg border bg-white shadow-sm mt-10">
      <div >
        <h3 className="text-2xl font-bold mb-4">Create your advert</h3>
        <p>Fill out the form to create a new advert</p>
      </div>

      {message && (
        <div
          className={`text-sm p-2 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title">Title:</label>
          <input 
          id="title" 
          type="text"
          className="w-full h-10 px-3 py-2 text-sm border rounded-md cursor-pointer shadow-sm"
           {...formik.getFieldProps("title")}
         />
         </div>
         <div className="space-y-2">
        <label htmlFor="description">Description:</label>
        <input 
        id="description"
        type="text"
        className="w-full h-10 px-3 py-2 text-sm border rounded-md cursor-pointer shadow-sm"
        {...formik.getFieldProps("description")}
        />
         </div>
         <div className="space-y-2">
         <label htmlFor="photo"
         className="w-full h-10 px-3 py-2 text-sm border rounded-md cursor-pointer shadow-sm"
         >Photo:</label>

         </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Create advert
        </button>
      </form>
    </div>
  );
};

export default CreateAdvertForm;
