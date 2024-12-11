import { ReactElement, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import Button from "../ui/ButtonOld/button";

export const QueryForm = ({
  buttonTitle,
}: {
  buttonTitle: string | ReactElement;
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  } as { [key: string]: string });

  const fields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "contact", label: "Mobile No", type: "number" },
    { name: "message", label: "Your Message", type: "textarea" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log(formData);

      setLoading(false);
      setToggleModal(false);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Sheet open={toggleModal}>
        <div>
          <Button
            title={buttonTitle.toString() || "Contact Us"}
            disabled={loading}
            variant="outline"
            size="sm"
            className="gap-2 bg-[#6aebd3]"
            onClick={() => setToggleModal(true)}
          >
            {buttonTitle}
          </Button>
        </div>
        <SheetContent
          className="!max-w-[50rem] z-[80] overflow-y-scroll"
          onInteractOutside={() => setToggleModal(false)}
        >
          <SheetHeader>
            <div className="w-full flex justify-end">
              <SheetClose
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
                onClick={() => setToggleModal(false)}
              >
                <Cross2Icon className="h-4 w-4 text-black" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold">
              Contact Us
            </h2>
            <h3 className="text-gray-500 text-start w-10/12">
              For any kind of query, fill the form and we will reach you within
              1-2 working days.
            </h3>
          </SheetHeader>
          <SheetDescription>
            <form
              className="grid grid-cols-6 gap-4 mt-6 pb-20"
              onSubmit={handleSubmit}
            >
              {fields.map(({ name, label, type }) => (
                <div
                  className="flex flex-col col-span-6 text-justify"
                  key={name + label}
                >
                  <label
                    htmlFor={name}
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    {label} <span className="text-red-500">*</span>
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={name}
                      name={name}
                      rows={8}
                      className="shadow-sm bg-input text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder={`Your ${label.toLowerCase()}`}
                      value={formData[name]}
                      onChange={handleInputChange}
                      required
                    />
                  ) : (
                    <input
                      id={name}
                      name={name}
                      type={type}
                      className="shadow-sm bg-input text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder={`Your ${label.toLowerCase()}`}
                      value={formData[name]}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                </div>
              ))}
              <Button
                type="submit"
                variant="outline"
                className={`gap-2 col-span-6 mt-6 ${
                  loading ? "bg-primary text-black" : ""
                }`}
                disabled={loading}
                title={"Submit"}
              >
                {loading ? <>Sending...</> : "Send Message"}
              </Button>
            </form>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};
