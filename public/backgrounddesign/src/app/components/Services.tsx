import { 
  TrendingUp, 
  DollarSign, 
  FileText, 
  PieChart, 
  CreditCard, 
  LineChart,
  BookOpen,
  Shield,
  CheckCircle
} from "lucide-react";

export function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-100 via-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">服务项目</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              提供全方位、专业化的金融服务解决方案，满足您的多元化需求
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceDetailCard
              icon={<PieChart className="w-16 h-16 text-amber-700" />}
              title="资产管理"
              description="专业的资产配置与管理服务，帮助您实现财富增值目标"
              features={[
                "个性化资产配置方案",
                "动态风险管理体系",
                "多元化投资组合",
                "定期资产评估报告",
                "专属顾问服务",
                "财富传承规划"
              ]}
            />
            <ServiceDetailCard
              icon={<DollarSign className="w-16 h-16 text-amber-700" />}
              title="融资服务"
              description="灵活的融资方案，快速响应您的资金需求"
              features={[
                "企业融资咨询",
                "项目融资方案",
                "信用贷款服务",
                "抵押贷款业务",
                "供应链金融",
                "过桥资金服务"
              ]}
            />
            <ServiceDetailCard
              icon={<FileText className="w-16 h-16 text-amber-700" />}
              title="咨询顾问"
              description="资深专家团队提供专业咨询，助力财富决策"
              features={[
                "财务规划咨询",
                "投资策略建议",
                "税务筹划服务",
                "法律合规咨询",
                "风险评估分析",
                "市场研究报告"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-[#e8dfd3] to-[#d4c5b3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">其他服务</h2>
            <p className="text-xl text-gray-700">更多专业金融服务选择</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AdditionalServiceCard
              icon={<TrendingUp className="w-12 h-12 text-amber-700" />}
              title="投资理财"
              description="专业的投资建议和理财规划，帮助您实现财务目标"
            />
            <AdditionalServiceCard
              icon={<CreditCard className="w-12 h-12 text-amber-700" />}
              title="信贷服务"
              description="多样化的信贷产品，满足不同场景的资金需求"
            />
            <AdditionalServiceCard
              icon={<LineChart className="w-12 h-12 text-amber-700" />}
              title="市场分析"
              description="深入的市场研究和分析，把握投资机遇"
            />
            <AdditionalServiceCard
              icon={<BookOpen className="w-12 h-12 text-amber-700" />}
              title="财商教育"
              description="定期举办财商培训，提升您的金融知识水平"
            />
            <AdditionalServiceCard
              icon={<Shield className="w-12 h-12 text-amber-700" />}
              title="风险管理"
              description="全面的风险评估和管理方案，保障资产安全"
            />
            <AdditionalServiceCard
              icon={<CheckCircle className="w-12 h-12 text-amber-700" />}
              title="合规审查"
              description="严格的合规审查流程，确保业务合法合规"
            />
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">服务流程</h2>
            <p className="text-xl text-gray-700">简单高效的服务流程，为您节省时间</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep number="01" title="咨询沟通" description="了解您的需求和目标" />
            <ProcessStep number="02" title="方案设计" description="定制专属解决方案" />
            <ProcessStep number="03" title="方案执行" description="高效落实服务方案" />
            <ProcessStep number="04" title="持续跟踪" description="长期跟踪服务效果" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            需要专业的金融服务？
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            立即联系我们，获取个性化的服务方案
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-amber-800 rounded-lg hover:bg-amber-50 transition-all shadow-xl text-lg font-semibold"
          >
            立即咨询
          </a>
        </div>
      </section>
    </div>
  );
}

function ServiceDetailCard({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdditionalServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 text-white text-2xl font-bold rounded-full mb-4">
        {number}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
