import { FormInput } from "../components";
import { Form, Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-5">
        <h1 className="text-4xl font-semibold text-grey15">Contact Us</h1>
        <p className="font-normal text-base text-grey35">
          Welcome to SkillBridge's Contact Page! We're here to assist you with
          any inquiries you may have about our services, pricing plans, or
          anything else you need. Whether you're an individual looking to
          enhance your skills or a business seeking professional development
          solutions, we're eager to help.
        </p>
      </div>
      <div className="w-[100%] h-0.5 bg-gray-300 mt-20"></div>

      <div className="grid grid-cols-3 py-20">
        <Form
          method="post"
          className="col-span-2 w-80 md:w-full lg:w-full p-8 bg-base-100 shadow-lg flex flex-col gap-y-10"
        >
          <div className="grid grid-cols-2 gap-10">
            <FormInput
              type="email"
              label="email"
              name="identifier"
              placeholder="Enter your Email"
            />
            <FormInput
              type="email"
              label="email"
              name="identifier"
              placeholder="Enter your Email"
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <FormInput
              type="email"
              label="email"
              name="identifier"
              placeholder="Enter your Email"
            />
            <FormInput
              type="email"
              label="email"
              name="identifier"
              placeholder="Enter your Email"
            />
          </div>
          <FormInput
            type="email"
            label="email"
            name="identifier"
            placeholder="Enter your Email"
          />
          <textarea
            placeholder="Bio"
            class="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </Form>

        <div className="bg-white px-20 py-10 shadow-lg space-y-10">
          <div className="bg-slate-200 p-3 rounded-md flex flex-col items-center gap-10">
            <MdEmail size={30} />
            <p> support@skillbridge.com </p>
          </div>
          <div className="bg-slate-200 p-3 rounded-md flex flex-col items-center gap-10">
            <FaPhone size={30} />
            <p> +90 929434822 </p>
          </div>
          <div className="bg-slate-200 p-3 rounded-md flex flex-col items-center gap-10">
            <RiMapPin2Fill size={30} />
            <p> SkillBridge HQ, 123 Learning Lane, Education City, EC 45678 </p>
          </div>
          <div className="bg-slate-200 p-3 rounded-md flex flex-col items-center gap-10">
            <MdEmail size={30} />
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
