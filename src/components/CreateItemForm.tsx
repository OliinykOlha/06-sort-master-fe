import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function CreateItemForm({ containerId }: { containerId: string }) {
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null
  );

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z\s']+$/, "Only English letters are allowed")
        .min(3, "Must be at least 3 characters")
        .trim(),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/items", {
          method: "POST",
          headers: { "Content-Type": "application/json", accept: "*/*" },
          body: JSON.stringify({
            name: values.name, 
            containerId,}),
        });

        if (!response.ok) throw new Error("Failed to create item");
        setMessage({
          type: "success",
          text: "Item created successfully!",
        });
        resetForm();
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any ) {
        setMessage({ type: "error", text: error.message });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col mt-4 space-y-2">
        <input
          name="name"
          className="border-2 border-black rounded-full px-3 py-2 text-black font-bold bg-white"
          aria-label="New item name"
          type="text"
          id="item_name"
          placeholder="add new item"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name &&(
         <p className="text-sm text-red-500 font-extrabold font-sans">{formik.errors.name}</p>
        )}
       
      {message && (
        <div
          className={`text-sm p-2 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-700 font-bold"
              : "bg-red-100 text-red-700 font-bold"
          }`}
        >
          {message.text}
        </div>
      )}
        <button
          className="w-fit bg-gray-100 hover:bg-gray-200 text-black px-5 py-2 rounded-full border-2"
          type="submit"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}

export default CreateItemForm;
