import { ReactElement, useEffect, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import Button from "../ui/ButtonOld/button";
import {
  CLOSE_FR,
  CONTACT_US_FR,
  EMAIL_FR,
  FULL_NAME_FR,
  MOBILE_FR,
  SENDING_FR,
  SUBMIT_FR,
  TITLE_QUERY_FR,
  YOUR_MESSAGE_FR,
} from "@/lib/language/fr";
import {
  CLOSE_ENG,
  CONTACT_US_ENG,
  EMAIL_ENG,
  FULL_NAME_ENG,
  MOBILE_ENG,
  SENDING_ENG,
  SUBMIT_ENG,
  TITLE_QUERY_ENG,
  YOUR_MESSAGE_ENG,
} from "@/lib/language/en";
import { useLanguage } from "@/lib/common/useLanguage";

export const QueryForm = ({
  buttonTitle,
}: {
  buttonTitle: string | ReactElement;
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  } as { [key: string]: string });

  const fields = [
    {
      name: "name",
      label: language === "fr" ? FULL_NAME_FR : FULL_NAME_ENG,
      type: "text",
    },
    {
      name: "email",
      label: language === "fr" ? EMAIL_FR : EMAIL_ENG,
      type: "email",
    },
    {
      name: "contact",
      label: language === "fr" ? MOBILE_FR : MOBILE_ENG,
      type: "number",
    },
    {
      name: "message",
      label: language === "fr" ? YOUR_MESSAGE_FR : YOUR_MESSAGE_ENG,
      type: "textarea",
    },
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
      <div>
        <Button
          title={buttonTitle.toString() || "Contact Us"}
          disabled={loading}
          variant="outline"
          size="sm"
          className="gap-2 w-48 h-12 bg-[#6aebd3]"
          onClick={() => setToggleModal(true)}
        >
          {buttonTitle}
        </Button>
      </div>
      <Sheet open={toggleModal} onOpenChange={setToggleModal}>
        <SheetContent
          className="!max-w-[30rem] z-[80] overflow-y-scroll"
          onInteractOutside={() => setToggleModal(false)}
        >
          <SheetHeader>
            <div className="w-full flex justify-end">
              <SheetClose
                asChild
                onClick={() => setToggleModal(false)} // Explicitly toggle state
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
              >
                <button>
                  <Cross2Icon className="h-4 w-4 text-black" />
                  <span className="sr-only">
                    {language === "fr" ? CLOSE_FR : CLOSE_ENG}
                  </span>
                </button>
              </SheetClose>
            </div>
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold">
              {language === "fr" ? CONTACT_US_FR : CONTACT_US_ENG}
            </h2>
            <h3 className="text-gray-500 text-start w-10/12">
              {language === "fr" ? TITLE_QUERY_FR : TITLE_QUERY_ENG}
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
                title={language === "fr" ? SUBMIT_FR : SUBMIT_ENG}
              >
                {loading ? (
                  <>{language === "fr" ? SENDING_FR : SENDING_ENG}</>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
};
