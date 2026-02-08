import Link from 'next/link'
import { BookOpen } from 'lucide-react'

const classes = ['Play Group', 'Nursery', 'KG', ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)]

export default function Classes() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Play Group to Class 12</h1>
          <p className="text-xl text-gray-700">
            Comprehensive learning materials for every stage, from Play Group through Class 12, covering all subjects with practical experiments and research-based approach.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {classes.map((className, index) => (
              <Link
                key={index}
                href={`/classes/${className.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition duration-300 text-center cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h3 className="font-bold text-2xl text-gray-900 group-hover:text-blue-600 transition">
                    {className}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {className === 'Play Group' ? 'Pre-K' : className === 'Nursery' ? 'Early Learning' : className === 'KG' ? 'Kindergarten' : className.includes('Class') && parseInt(className) <= 5 ? 'Primary' : className.includes('Class') && parseInt(className) <= 8 ? 'Middle' : 'Secondary'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">What Each Class Includes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Study Materials', desc: 'Concept notes, formulas, worksheets' },
              { title: 'Practical Labs', desc: 'Home experiments & simulations' },
              { title: 'Graphical Learning', desc: 'Visual explanations & graphs' },
              { title: 'Test Series', desc: 'Chapter & full-length tests' },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
