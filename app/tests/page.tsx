import { Zap, BarChart3, Clock } from 'lucide-react'

const testSeries = [
  { title: 'Chapter Tests', desc: 'Quick tests for each chapter', count: '120+' },
  { title: 'Unit Tests', desc: 'Comprehensive unit assessments', count: '45+' },
  { title: 'Full-Length Tests', desc: 'Complete syllabus mock exams', count: '24+' },
  { title: 'AI-Generated Tests', desc: 'Personalized adaptive tests', count: 'Unlimited' },
]

export default function Tests() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Test Series & Assessment</h1>
          <p className="text-xl text-gray-700">
            Comprehensive test series with instant evaluation, detailed feedback, and AI-powered personalized assessments.
          </p>
        </div>
      </section>

      {/* Test Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testSeries.map((test, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{test.count}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{test.title}</h3>
                <p className="text-gray-600 text-sm">{test.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Test Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Instant Evaluation</h3>
              <p className="text-gray-600">
                Get immediate results for MCQs and AI-assisted evaluation for descriptive answers with detailed explanations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-purple-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Detailed analysis of strengths, weaknesses, concept gaps, and personalized study recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-cyan-600" size={24} />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">Adaptive Difficulty</h3>
              <p className="text-gray-600">
                AI adjusts test difficulty based on your performance for optimal learning progression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Question Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Question Types Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {['MCQ', 'Numerical', 'Short Answer', 'Long Answer', 'Case-Based'].map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Testing Your Knowledge</h2>
          <p className="text-lg mb-8 opacity-90">
            Take your first test and see how well you understand the concepts.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
            Take a Free Test
          </button>
        </div>
      </section>
    </div>
  )
}
