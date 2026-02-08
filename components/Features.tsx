import { BookMarked, Zap, Users, BarChart3, Video, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: BookMarked,
    title: 'Study Materials',
    description: 'Class-wise, subject-wise, and chapter-wise PDFs with concept notes, formulas, and worksheets'
  },
  {
    icon: Zap,
    title: 'Practical & Virtual Labs',
    description: 'Home-based experiments and interactive simulations for hands-on learning'
  },
  {
    icon: BarChart3,
    title: 'Graphical Learning',
    description: 'Visual explanations, interactive graphs, and formula derivations'
  },
  {
    icon: Video,
    title: 'Concept Videos',
    description: 'Short, focused videos as concept triggers, not passive teaching'
  },
  {
    icon: Zap,
    title: 'AI-Powered Tests',
    description: 'Auto-generated test series with instant evaluation and personalized feedback'
  },
  {
    icon: Users,
    title: 'Community Learning',
    description: 'Teachers share expertise, students contribute experiments under guided supervision'
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Core Features</h2>
          <p className="section-subtitle">Everything you need for concept-based learning</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition duration-300 border border-gray-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
