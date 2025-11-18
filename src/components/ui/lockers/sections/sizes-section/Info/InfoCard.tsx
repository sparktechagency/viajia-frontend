import { FC, ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
}

const InfoCard: FC<InfoCardProps> = ({ title, icon, children, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="bg-[#1C1C1E]  border border-slate-800/50 rounded-lg p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-5 h-5 text-primary">{icon}</div>
        <h3 className="  text-[#F1F1F1] mt-0.5">{title}</h3>
      </div>

      {children}
    </div>
  );
};

export default InfoCard;
