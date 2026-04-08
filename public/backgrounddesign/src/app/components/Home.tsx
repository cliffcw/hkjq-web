import { ArrowRight, TrendingUp, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router";
import backgroundImage from "figma:asset/236bf549e23e2b4bf50ea2aa302b40e951178989.png";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(232, 223, 211, 0.7), rgba(232, 223, 211, 0.7)), url(${backgroundImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">
            黑氪金球
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-4 max-w-3xl mx-auto">
            专业金融服务平台
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            为您提供安全、高效、专业的金融解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all shadow-lg hover:shadow-xl"
            >
              了解服务
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-800 border-2 border-amber-700 rounded-lg hover:bg-amber-50 transition-all"
            >
              联系我们
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心优势</h2>
            <p className="text-xl text-gray-600">为什么选择黑氪金球</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Shield className="w-12 h-12 text-amber-700" />}
              title="安全可靠"
              description="多重安全保障机制，确保资金安全"
            />
            <FeatureCard
              icon={<TrendingUp className="w-12 h-12 text-amber-700" />}
              title="稳定收益"
              description="专业团队管理，追求长期稳定回报"
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-amber-700" />}
              title="快速响应"
              description="高效处理流程，快速满足您的需求"
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-amber-700" />}
              title="专业服务"
              description="资深顾问团队，提供一对一专业咨询"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-[#e8dfd3] to-[#d4c5b3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">服务项目</h2>
            <p className="text-xl text-gray-700">全方位金融服务解决方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="资产管理"
              description="专业的资产配置与管理服务，帮助您实现财富增值"
              items={["投资规划", "风险管理", "资产配置", "财富传承"]}
            />
            <ServiceCard
              title="融资服务"
              description="灵活的融资方案，满足不同规模的资金需求"
              items={["企业融资", "项目融资", "信用贷款", "抵押贷款"]}
            />
            <ServiceCard
              title="咨询顾问"
              description="资深金融专家提供专业咨询，助力您的财富决策"
              items={["财务咨询", "投资建议", "税务筹划", "法律咨询"]}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-800 rounded-lg hover:bg-amber-50 transition-all shadow-md hover:shadow-lg border border-amber-700"
            >
              查看全部服务
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            开启您的财富增值之旅
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            立即联系我们，获取专业的金融服务方案
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-amber-800 rounded-lg hover:bg-amber-50 transition-all shadow-xl text-lg font-semibold"
          >
            立即咨询
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl border border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}