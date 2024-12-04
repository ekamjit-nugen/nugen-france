"use client";
import axios from "axios";
import { ReactElement, useState } from "react";
// import { Button } from "../ui";
// import { Cross2Icon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetClose,
  SheetFooter,
} from "../ui/sheet";
import Button from "../ui/ButtonNugen/butoon";
import { useToast } from "../ui/use-toast";
// import Loading2 from "../icons/Loading2";

export const QueryForm = ({
  buttonTitle,
}: {
  buttonTitle: string | ReactElement;
}) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmitFunction = async (e: any) => {
    e.preventDefault();
    const target = e.target;
    const userData = {
      name: target.name.value.trim(),
      email: target.email.value.trim(),
      contact: target.number.value.trim(),
      message: target.message.value.trim(),
    };
    try {
      setLoading(true);
      const response: any = await axios.post("/api", userData);
      if (response.status === 200) {
        toast({
          title: response.data.title,
          description: response.data.message,
        });
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast({
        title: error.response.data.error.title,
        description: error.response.data.error.message,
      });
    }
    setToggleModal((prev) => !prev);
  };

  const handleTrigger = () => {
    setToggleModal((prev) => !prev);
  };

  return (
    <Sheet open={toggleModal}>
      <SheetTrigger className="md:block mr-auto">
        <Button
          title={buttonTitle.toString()}
          className="gap-2"
          onClick={handleTrigger}
        />
      </SheetTrigger>
      <SheetContent
        // hideCloseButton
        className="!max-w-[50rem] z-[80] overflow-y-scroll"
        onInteractOutside={handleTrigger}
      >
        <SheetHeader>
          <div className="w-full flex justify-end">
            <SheetClose
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
              onClick={handleTrigger}
            >
              {/* <Cross2Icon className="h-4 w-4" /> */}
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
          <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-start text-foreground">
            Contact Us
          </h2>
          <h3 className="text-foreground/50 text-start w-10/12">
            For any kind of Query fill the form and we will reach you within in
            1-2 working days.
          </h3>
        </SheetHeader>
        <SheetDescription>
          <div className="w-full mt-6">
            <form
              action="#"
              className="grid grid-cols-6 justify-center gap-4"
              onSubmit={handleSubmitFunction}
            >
              <div className="flex flex-col col-span-6 text-justify">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-foreground after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-input text-gray-900 dark:text-white text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="flex flex-col col-span-6 text-justify">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-foreground after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-input text-gray-900 dark:text-white text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="flex flex-col col-span-6 text-justify">
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-foreground after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Mobile No
                </label>
                <input
                  type="text"
                  id="number"
                  className="shadow-sm bg-input text-gray-900 dark:text-white text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Your Mobile No"
                  required
                />
              </div>
              <div className="flex flex-col col-span-6 text-justify">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-foreground after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  className="shadow-sm bg-input text-gray-900 dark:text-white text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Leave a comment..."
                  required
                />
              </div>
              <Button
                type="submit"
                // variant="outline"
                title={loading ? "Sending..." : "Send Message"}
                className={`gap-2 transform duration-500 col-span-6 mt-6 ${
                  !loading ? "" : "bg-primary text-black"
                }`}
                disabled={loading}
              >
                {/* {loading && <Loading2 className="mr-2 h-4 w-4 animate-spin" />} */}
              </Button>
            </form>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
