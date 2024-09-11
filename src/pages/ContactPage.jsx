import { FormInput } from "../components";
import { Form, Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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

      <div className="grid lg:grid-cols-3 py-20">
        <Form
          method="post"
          className="lg:col-span-2 w-full md:w-full lg:w-full p-8 bg-base-100 shadow-lg flex flex-col gap-y-10"
        >
          <div className="grid grid-cols-2 gap-10">
            <FormInput
              type="text"
              label="First Name"
              name="identifier"
              placeholder="Enter your First Name"
            />
            <FormInput
              type="text"
              label="Last Name"
              name="identifier"
              placeholder="Enter your Last Name"
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
              type="number"
              label="Phone Number"
              name="identifier"
              placeholder="Enter your Phone Number"
            />
          </div>
          <FormInput
            type="text"
            label="Subject"
            name="identifier"
            placeholder="Enter your Subject"
          />
          <textarea
            placeholder="Message...."
            class="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </Form>

        <div className="bg-white px-20 py-10 space-y-10">
          <div className="bg-slate-100 p-3 rounded-md flex flex-col items-center gap-10">
            <div className="bg-white p-3 rounded-md">
              <MdEmail size={30} />
            </div>
            <p className="text-sm"> support@skillbridge.com </p>
          </div>
          <div className="bg-slate-100 p-3 rounded-md flex flex-col items-center gap-10">
            <div className="bg-white p-3 rounded-md">
              <FaPhone size={30} />
            </div>
            <p className="text-sm"> +90 929434822 </p>
          </div>
          <div className="bg-slate-100 p-3 rounded-md flex flex-col items-center gap-10">
            <div className="bg-white p-3 rounded-md">
              <RiMapPin2Fill size={30} />
            </div>
            <p className="text-sm">
              SkillBridge HQ, 123 Learning Lane, Education City, EC 45678
            </p>
          </div>
          <div className="bg-slate-100 p-3 rounded-md flex flex-col items-center gap-10">
            <div className="flex flex-row gap-5">
              <div className="bg-white p-3 rounded-md">
                <FaFacebook size={30} />
              </div>
              <div className="bg-white p-3 rounded-md">
                <FaLinkedin size={30} />
              </div>
              <div className="bg-white p-3 rounded-md">
                <FaTwitter size={30} />
              </div>
            </div>
            <p className=""> Social Links </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
