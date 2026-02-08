import Link from 'next/link'
import { BookOpen, Beaker, Calculator, Globe, Code } from 'lucide-react'

const subjects = [
  {
    name: 'Mathematics',
    icon: Calculator,
    description: 'Graphical reasoning, geometry, data analysis, and problem-solving',
    color: 'from-blue-600 to-blue-400'
  },
  {
    name: 'Physics',
    icon: Beaker,
    description: 'Motion, force, electricity, optics, and real-world applications',
    color: 'from-purple-600 to-purple-400'
  },
  {
    name: 'Chemistry',
    icon: Beaker,
    description: 'Reactions, solutions, acids/bases, and molecular understanding',
    color: 'from-green-600 to-green-400'
  },
  {
    name: 'Biology',
    icon: Beaker,
    description: 'Life processes, environment, growth, and living systems',
    color: 'from-emerald-600 to-emerald-400'
  },
  {
    name: 'English',
    icon: BookOpen,
    description: 'Language skills, literature, comprehension, and communication',
    color: 'from-orange-600 to-orange-400'
  },
  {
    name: 'Hindi',
    icon: BookOpen,
    description: 'Language proficiency, grammar, literature, and cultural understanding',
    color: 'from-red-600 to-red-400'
  },
  {
    name: 'Social Science',
    icon: Globe,
    description: 'Geography, history, economics, and civic understanding',
    color: 'from-cyan-600 to-cyan-400'
  },
  {
    name: 'Computer Science',
    icon: Code,
    description: 'Logic, algorithms, programming, and computational thinking',
    color: 'from-indigo-600 to-indigo-400'
  },
]

export default function Subjects() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All Subjects</h1>
          <p className="text-xl text-gray-700">
            Comprehensive coverage of all major subjects with practical, graphical, and research-based learning approaches.
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <Link key={index} href={`/subjects/${subject.name.toLowerCase()}`}>
                  <div className="group h-full bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition duration-300 cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${subject.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {subject.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {subject.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Subject Features */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Learning Approach for Each Subject</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Science Subjects</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Concept-based explanations</li>
                <li>✓ Home-based experiments</li>
                <li>✓ Virtual simulations</li>
                <li>✓ Data collection & analysis</li>
                <li>✓ Graphical representations</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Mathematics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Graphical reasoning</li>
                <li>✓ Problem-solving strategies</li>
                <li>✓ Real-world applications</li>
                <li>✓ Visual proofs</li>
                <li>✓ Pattern recognition</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Language & Social</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Conceptual understanding</li>
                <li>✓ Critical thinking</li>
                <li>✓ Research projects</li>
                <li>✓ Real-world connections</li>
                <li>✓ Practical applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
