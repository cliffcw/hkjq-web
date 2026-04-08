import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("感谢您的咨询！我们会尽快与您联系。");
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-100 via-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">联系我们</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              期待与您的沟通，为您提供专业的金融服务解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      电话 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="请输入联系电话"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="请输入电子邮箱"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    咨询主题 *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  >
                    <option value="">请选择咨询主题</option>
                    <option value="asset">资产管理</option>
                    <option value="financing">融资服务</option>
                    <option value="consulting">咨询顾问</option>
                    <option value="investment">投资理财</option>
                    <option value="other">其他咨询</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    留言内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="请详细描述您的需求..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-800 text-white py-4 px-6 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all shadow-lg hover:shadow-xl flex items-center justify-center font-semibold text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  发送消息
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">联系方式</h2>
              <div className="space-y-6">
                <ContactInfoCard
                  icon={<Phone className="w-6 h-6 text-amber-700" />}
                  title="联系电话"
                  content="400-888-8888"
                  subContent="服务热线 (工作日 9:00-18:00)"
                />
                <ContactInfoCard
                  icon={<Mail className="w-6 h-6 text-amber-700" />}
                  title="电子邮箱"
                  content="contact@hkjq001.com"
                  subContent="我们会在24小时内回复您"
                />
                <ContactInfoCard
                  icon={<MapPin className="w-6 h-6 text-amber-700" />}
                  title="公司地址"
                  content="中国香港中环金融街88号"
                  subContent="黑氪金球大厦15楼"
                />
                <ContactInfoCard
                  icon={<Clock className="w-6 h-6 text-amber-700" />}
                  title="营业时间"
                  content="周一至周五 9:00 - 18:00"
                  subContent="周六 10:00 - 16:00 (周日休息)"
                />
                <ContactInfoCard
                  icon={<MessageSquare className="w-6 h-6 text-amber-700" />}
                  title="在线客服"
                  content="即时通讯咨询"
                  subContent="点击右下角图标开始对话"
                />
              </div>

              {/* Quick Links */}
              <div className="mt-10 p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">快速链接</h3>
                <div className="space-y-2">
                  <a href="/services" className="block text-amber-700 hover:text-amber-900 transition-colors">
                    → 查看全部服务
                  </a>
                  <a href="/about" className="block text-amber-700 hover:text-amber-900 transition-colors">
                    → 了解我们
                  </a>
                  <a href="/" className="block text-amber-700 hover:text-amber-900 transition-colors">
                    → 返回首页
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-[#e8dfd3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">我们的位置</h2>
            <p className="text-xl text-gray-700">欢迎预约来访</p>
          </div>

          {/* Placeholder for map */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-700 mx-auto mb-4" />
                <p className="text-xl text-gray-700 font-semibold">中国香港中环金融街88号</p>
                <p className="text-gray-600 mt-2">黑氪金球大厦15楼</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">常见问题</h2>
            <p className="text-xl text-gray-700">快速找到您需要的答案</p>
          </div>

          <div className="space-y-6">
            <FAQItem
              question="如何预约咨询服务？"
              answer="您可以通过填写上方表单、拨打我们的服务热线或发送邮件预约咨询服务。我们的专业顾问会在24小时内与您取得联系。"
            />
            <FAQItem
              question="咨询服务是否收费？"
              answer="首次咨询完全免费。我们的顾问会详细了解您的需求，并提供初步建议。具体服务项目的收费标准会在咨询过程中详细说明。"
            />
            <FAQItem
              question="服务范围覆盖哪些地区？"
              answer="我们的服务覆盖全国主要城市，并在香港设有总部。具体服务地区和方式可在咨询时详细沟通。"
            />
            <FAQItem
              question="如何保证资金安全？"
              answer="我们采用多重安全保障机制，所有业务严格遵守相关法律法规，并由专业团队进行风险管理。客户资金安全是我们的首要责任。"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoCard({
  icon,
  title,
  content,
  subContent,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  subContent: string;
}) {
  return (
    <div className="flex items-start p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-200 hover:shadow-md transition-all">
      <div className="flex-shrink-0 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-amber-700 font-medium">{content}</p>
        <p className="text-sm text-gray-600 mt-1">{subContent}</p>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white hover:bg-amber-50 transition-colors flex items-center justify-between"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className="text-amber-700 text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-amber-50/50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}