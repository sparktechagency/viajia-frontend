"use client";
import { roboto } from "@/constants/roboto";
import { Collapse, ConfigProvider } from "antd";

export default function FAQSection({ items, faqTitle }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-4 py-8 pt-8 md:py-12 lg:pb-24">
      <h1 className="section-title text-center mb-10!">
        <span className="text-white">{faqTitle.part1} </span>
        <span className={`${roboto.className} text-primary font-bold`}>
          {faqTitle.part2}
        </span>
      </h1>

      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              colorText: "rgba(255, 255, 255, 0.7)",
            },
          },
        }}
      >
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          ghost
          expandIconPosition="end"
          style={{ backgroundColor: "transparent" }}
          size="large"
          className="custom-faq-collapse"
        />
      </ConfigProvider>

      <style jsx global>{`
        .custom-faq-collapse .ant-collapse-item {
          margin-bottom: 16px !important;
          background-color: #1c1c1e !important;
          border: none !important;
          border-radius: 8px !important;
        }

        .custom-faq-collapse .ant-collapse-header {
          padding: 16px 24px !important;
          background-color: #1c1c1e !important;
          border-radius: 8px !important;
          font-weight: 500 !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 16px !important;
        }

        .custom-faq-collapse .ant-collapse-content {
          background-color: #1c1c1e !important;
          border-top: none !important;
        }

        .custom-faq-collapse .ant-collapse-content-box {
          padding: 0 24px 20px 24px !important;
        }

        .custom-faq-collapse .ant-collapse-expand-icon {
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 14px !important;
        }
      `}</style>
    </div>
  );
}
