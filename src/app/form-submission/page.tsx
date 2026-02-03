"use client";

import { FormSubmit } from "../../../actions/FormSubmit";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { SignupResolver, SignupType } from "@/types/SignupTypes";
import "./_components/style.css";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import BackgroundVideo from "./_components/BackgroundVideo";
import ShowUsers from "./_components/ShowUsers";
import ReCAPTCHA from 'react-google-recaptcha'

const FormSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPasssword, setShowPassword] = useState(false);
  const snippets = "Snippets";
  const [showTable, setShowTable] = useState(false);
  const reCaptcha = useRef<any>(null);

  // const [data, setData] = useState({
  //   fname: "",
  //   address: "",
  //   english: "",
  //   maths: "",
  //   password: "",
  // });

  useEffect(() => {
    const isUserSignup = () => {
      const getuser = localStorage.getItem("userdetails");
      if (getuser) {
        setShowTable(true);
      }
    };
    isUserSignup();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: SignupResolver,
    defaultValues: {
      fname: "utkarsh",
      address: "ludhiana",
      english: 20,
      maths: 10,
      password: "123456",
      email: "utkarshsingh132002@gmail.com",
    },
  });

  const AllFieldsStr = [
    watch("fname"),
    watch("address"),
    watch("email"),
    watch("password"),
  ];

  // const isAllFieldFilled =
  //   data.fname.length > 0 &&
  //   data.address.length > 0 &&
  //   data.english.length > 0 &&
  //   data.maths.length > 0 &&
  //   data.password.length > 0;

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   console.log(isAllFieldFilled);
  //   console.log(name, value);
  //   setData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const SignupSubmit = async (data: SignupType) => {
    const reCaptchaValue = reCaptcha.current.getValue();
    if(!reCaptchaValue){
      toast.warning("Please verify the reCaptcha!", {
        position: "bottom-right"
      });
      return;
    }
    console.log("Re captcha value is: ", reCaptchaValue)
    setIsLoading(true);
    try {
      const res = await FormSubmit(data);
      if (res.status === false) {
        throw new Error(res.message);
      }
      reset();
      console.log(res);
      if (!res || !res.data) {
        throw new Error("Data not found");
      }

      localStorage.setItem("userdetails", res.data);
      toast.success("Form submitted successfully", {
        position: "bottom-right",
      });
      setShowTable(true);
    } catch (error) {
      const message =
        error && error instanceof Error
          ? error.message
          : "Something went wrong, Please try again!";
      console.log(message);
      toast.error(message, {
        position: "bottom-right",
      });
    } finally {
      setIsLoading(false);
    }
  };



  if (showTable) {
    return <ShowUsers />;
  }
  return (
      <div className="min-h-screen h-screen max-h-fit">
        
        <ToastContainer />
        <BackgroundVideo />
        <div className="flex flex-col xl:flex-row h-full">
          <div className="hidden w-[50%] h-full bg-black xl:flex justify-center items-center">
            <div className="text-[#1d4150] font-bold  ease-in-out transition-all hover:cursor-pointer  outline-none duration-300 flex flex-col group">
              <span
                className="font-bold
      bg-linear-to-r from-amber-500 select-none to-pink-600
      bg-clip-text text-transparent text-[150px] uppercase flex"
              >
                {[...snippets].map((char: string, index: number) => (
                  <div
                    key={index}
                    className="hover:text-amber-600 transition-all duration-300 hover:animate-pulse ease-in-out"
                  >
                    {char}
                  </div>
                ))}
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <motion.div className="p-8 space-y-6 w-[70%]  border-2 border-black xl:border-gray-200 overflow-y-scroll scrollbarhidden  rounded-md hover:rounded-3xl hover:shadow-3xl shadow-xl  bg-transparent">
              <h1 className="text-4xl uppercase tracking-wider font-bold flex justify-center underline">
                Let&#x275C;s Go
              </h1>
              <form onSubmit={handleSubmit(SignupSubmit)} autoComplete="off">
                <div className="flex flex-col gap-y-5">
                  <div className="grid grid-cols-2 space-x-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm truncate font-semibold text-gray-700">
                        Enter your Name
                      </label>
                      <input
                        type="text"
                        {...register("fname")}
                        placeholder="John Wick"
                        autoComplete="jhgsshj"
                        className="w-full rounded-lg border border-black xl:border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      {errors.fname?.message && (
                        <div className="text-red-500">
                          {errors.fname.message}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm truncate font-semibold text-gray-700">
                        Enter your Email
                      </label>
                      <input
                        type="text"
                        {...register("email")}
                        autoComplete="jhghj"
                        placeholder="e.g. johnwick@gmail.com"
                        className="w-full rounded-lg border border-black xl:border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      {errors.email?.message && (
                        <div className="text-red-500">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Enter your Home Address
                    </label>
                    <input
                      type="text"
                      {...register("address")}
                      autoComplete="jhghjkjshj"
                      placeholder="Street A12, Nyc"
                      className="w-full rounded-lg border border-black xl:border-gray-300 px-4 py-3 focus:outline-none  focus:ring-2 focus:ring-black"
                    />
                    {errors.address?.message && (
                      <div className="text-red-500">
                        {errors.address.message}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 space-x-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Enter your English marks
                      </label>
                      <input
                        type="number"
                        {...register("english")}
                        placeholder="English marks"
                        className="w-full rounded-lg border border-black xl:border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      {errors.english?.message && (
                        <div className="text-red-500">
                          {errors.english.message}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Enter your Maths marks
                      </label>
                      <input
                        type="number"
                        {...register("maths")}
                        placeholder="Maths marks"
                        className="w-full rounded-lg border border-black xl:border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      {errors.maths?.message && (
                        <div className="text-red-500 ">
                          {errors.maths.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mb-4">
                    <label className="text-sm font-semibold text-gray-700">
                      Enter your Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPasssword ? "text" : "password"}
                        {...register("password")}
                        placeholder="87@utk"
                        className="w-full rounded-lg border border-black xl:border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                      />
                      <div
                        className="absolute top-1/4 right-4 text-gray-500 hover:cursor-pointer"
                        onClick={() => setShowPassword(!showPasssword)}
                      >
                        {!showPasssword ? <Eye /> : <EyeOff />}
                      </div>
                    </div>
                    {errors.password?.message && (
                      <div className="text-red-500">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                </div>

                 <ReCAPTCHA ref={reCaptcha} sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string} />
                <button
                  type="submit"
                  disabled={
                    isLoading ||
                    AllFieldsStr[0].length <= 0 ||
                    AllFieldsStr[1].length <= 0 ||
                    AllFieldsStr[2].length <= 0 ||
                    AllFieldsStr[2].length <= 0
                  }
                  className={`w-full select-none mt-4 text-white py-3 rounded-lg font-semibold tracking-wide   transition-all ${isLoading || AllFieldsStr[0].length <= 0 || AllFieldsStr[1].length <= 0 || AllFieldsStr[2].length <= 0 || AllFieldsStr[3].length <= 0 ? "bg-gray-700 cursor-not-allowed" : "bg-black hover:cursor-pointer"}`}
                >
                  {isLoading ? (
                    <div className="flex justify-center gap-x-3 items-center opacity-70">
                      <span className="">
                        {isLoading && (
                          <Loader2 className="w-6 h-6 animate-spin text-white" />
                        )}
                      </span>
                      <span>Please Wait...</span>
                    </div>
                  ) : (
                    <span>Create Account</span>
                  )}
                </button>
              </form>

              <div className="flex justify-center">
                <span className="font-medium flex items-center gap-x-2">
                  Already have an account?{" "}
                  <span className="text-blue-500 hover:underline duration-300 ease-in-out transition-all hover:cursor-pointer font-medium">
                    Sign in
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default FormSubmission;
