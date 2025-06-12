import {footerImages} from '../assets/ImgImports'
import Card from './Card';

const {logo , mail , location , phone , facebook , twitter , linkedin} = footerImages
const Footer = () => {
  return (
    <Card className="flex flex-col items-center mb-[50px] px-4 sm:px-6 lg:px-[113px] pb-10 pt-[60px] lg:pt-20 xl:pt-24 mx-4 sm:mx-6 lg:mx-[50px]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 w-full">
        <div className="flex flex-col gap-[50px] items-start max-w-[228px]">
          <div className="flex flex-col gap-5">
            <img src={logo} alt="Logo" />
            <p className="font-medium text-base sm:text-lg">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          </div>
          <div className="flex flex-col gap-[15px]">
            <div className="flex items-center gap-[10px] font-medium text-sm">
              <img src={mail} alt="mail" />hello@littlelearners.com
            </div>
            <div className="flex items-center gap-[10px] font-medium text-sm">
              <img src={phone} alt="phone" />+91 91813 23 2309
            </div>
            <div className="flex items-center gap-[10px] font-medium text-sm">
              <img src={location} alt="location" />Somewhere in the World
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] w-full">
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-base sm:text-lg">Home</h1>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Features</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Our Testimonials</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">FAQ</a>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-base sm:text-lg">About Us</h1>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Our Mission</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Our Vission</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Awards and Recognitions</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">History</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Teachers</a>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-base sm:text-lg">Academics</h1>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Special Features</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Gallery</a>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="font-semibold text-base sm:text-lg">Contact Us</h1>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Information</a>
            <a href="#" className="font-medium text-sm text-mygray hover:underline">Map & Direction</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full mt-[60px]">
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 border-t-2 border-b-2 border-mygray gap-5">
          <div className="flex flex-wrap justify-center sm:justify-start">
            <a href="#" className="text-xs text-mygray border-r-2 border-mygray px-4 hover:underline">Terms of Service</a>
            <a href="#" className="text-xs text-mygray border-r-2 border-mygray px-4 hover:underline">Privacy Policy</a>
            <a href="#" className="text-xs text-mygray px-4 hover:underline">Cookie Policy</a>
          </div>
          <div className="flex gap-[10px]">
            <a href="#"><img src={facebook} alt="facebook" /></a>
            <a href="#"><img src={twitter} alt="twitter" /></a>
            <a href="#"><img src={linkedin} alt="linkedin" /></a>
          </div>
        </div>
        <div className="text-center text-xs text-[#666]">Copyright © [2023] Little Learners Academy. All rights reserved.</div>
      </div>
    </Card>
  );
};

export default Footer;
