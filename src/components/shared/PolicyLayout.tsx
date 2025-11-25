interface policyPageProps {
  content: string;
  title: string;
}
export default function PolicyLayout({ content, title }: policyPageProps) {
  return (
    <div className="min-h-[calc(100vh-68px)] ">
      <div className="container mx-auto p-4  py-12 lg:py-20">
        {/* Header */}
        <div className=" mt-8 ">
          <h1 className="text-2xl 2xl:text-3xl py-6 rounded-lg font-semibold text-[#F1F1F1] mb-2 bg-transparent">
            {title}
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-transparent rounded-lg shadow-sm border border-[#ABABAB] p-4 md:p-6 text-[#ABABAB] ">
          <div
            className="prose prose-invert max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
