import { FC } from "react";
import { GiLockers } from "react-icons/gi";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  delay?: number;
  highlighted?: boolean;
  dayLabel?: string;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  price,
  description,
  delay = 0,
  highlighted = false,
  dayLabel = "/day",
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`bg-[#1C1C1E] backdrop-blur border border-slate-800/50 rounded-lg p-8 py-[60px] 
      hover:border-amber-500/30 transition-colors duration-300  
      ${highlighted ? "md:scale-110" : ""}`}
    >
      <div className="flex justify-center mb-5">
        <GiLockers className="w-10 h-10 text-[#FFCB20]" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl lg:text-2xl font-semibold text-[#F1F1F1] text-center mb-5">
        {title}
      </h3>

      <div className="flex justify-center items-baseline gap-2 mb-2">
        <span className="text-3xl font-medium text-[#00BCD1]">{price}</span>
        <span className="text-[#B8B8B8]">{dayLabel}</span>
      </div>

      <p className="text-[#ABABAB] text-center text-sm">{description}</p>
    </div>
  );
};

export default PricingCard;
