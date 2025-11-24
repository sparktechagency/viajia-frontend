const HoursList = ({ t }: any) => {
  // console.log(t);
  // const t: any = await getTranslate("hoursSupport");
  return (
    <>
      <p className="text-[#ABABAB] text-sm mb-2">{t?.hoursListNote}</p>

      <div className="space-y-4 text-[#ABABAB] mt-6 ">
        <div className="flex justify-between ">
          <span className="">{t?.mondayFriday}</span>
          <span className="text-[#ABABAB]">{t?.mfTime}</span>
        </div>

        <div className="flex justify-between ">
          <span className="">{t?.saturday}</span>
          <span className="text-[#ABABAB]">{t?.satTime}</span>
        </div>

        <div className="flex justify-between ">
          <span className="">{t?.sundayHolidays}</span>
          <span className="">{t?.closed}</span>
        </div>
      </div>
    </>
  );
};

export default HoursList;
