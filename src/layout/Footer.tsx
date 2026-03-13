import { CopyrightOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="border-t border-[#d9e7c8] bg-[#fefffc]/90 px-6 py-4 text-[#6d8060] backdrop-blur-xl">
      <div className="flex flex-col items-center justify-between gap-2 text-sm md:flex-row">
        <p className="inline-flex items-center gap-1.5">
          <CopyrightOutlined className="text-[#4f6841]" />
          <span>{new Date().getFullYear()} Medico. All rights reserved.</span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
