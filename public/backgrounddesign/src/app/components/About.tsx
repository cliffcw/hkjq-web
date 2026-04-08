import { Award, Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-100 via-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">关于黑氪金球</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              致力于为客户提供专业、安全、高效的金融服务，成为您值得信赖的财富管理伙伴
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">公司简介</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  黑氪金球成立于多年前，是一家专注于金融服务的专业机构。我们秉承"诚信、专业、创新"的核心价值观，为广大客户提供全方位的金融解决方案。
                </p>
                <p>
                  通过多年的发展，我们已经建立了完善的服务体系和专业的团队，服务范围覆盖资产管理、融资咨询、投资理财等多个领域。
                </p>
                <p>
                  我们始终坚持以客户为中心，用专业的知识和丰富的经验，帮助客户实现财富的保值增值，共创美好未来。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="10+" label="行业经验" />
              <StatCard number="5000+" label="服务客户" />
              <StatCard number="100亿+" label="管理资产" />
              <StatCard number="98%" label="客户满意度" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-[#e8dfd3] to-[#d4c5b3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-xl text-gray-700">我们的信念与承诺</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard
              icon={<Award className="w-12 h-12 text-amber-700" />}
              title="专业"
              description="拥有专业的团队和丰富的行业经验"
            />
            <ValueCard
              icon={<Target className="w-12 h-12 text-amber-700" />}
              title="精准"
              description="精准把握市场脉搏，提供最优方案"
            />
            <ValueCard
              icon={<Eye className="w-12 h-12 text-amber-700" />}
              title="透明"
              description="公开透明的服务流程和收费标准"
            />
            <ValueCard
              icon={<Heart className="w-12 h-12 text-amber-700" />}
              title="诚信"
              description="以诚信为本，建立长期信任关系"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl border border-amber-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                为客户创造长期稳定的财富价值，通过专业的金融服务和创新的解决方案，帮助每一位客户实现财务目标，共同成长，共享成功。
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl border border-amber-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">我们的愿景</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                成为行业领先的综合性金融服务机构，以卓越的专业能力和优质的服务品质，赢得客户的长期信赖，推动金融服务行业的健康发展。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-[#e8dfd3] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">专业团队</h2>
            <p className="text-xl text-gray-700">经验丰富的金融专家为您服务</p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamHighlight
                title="资深顾问"
                description="平均从业经验超过15年"
              />
              <TeamHighlight
                title="专业认证"
                description="持有多项金融专业资格证书"
              />
              <TeamHighlight
                title="持续学习"
                description="定期培训，紧跟行业发展"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-8 rounded-xl text-white text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-amber-100">{label}</div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamHighlight({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h4 className="text-2xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
}