import Link from 'next/link'
import { BookOpen, Microscope, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Learn. Experiment. Discover. Think.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              CONCEPT ACADEMY builds a strong foundation of practical, experimental, and research-based knowledge for students from Play Group to Class 12.
            </p>
            
            <p className="text-lg text-gray-600 mb-12 italic">
              We don't teach answers. We teach students how knowledge is created.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/signup" className="btn-primary text-center text-lg py-3 px-8">
                Start Learning Free
              </Link>
              <Link href="/about" className="btn-secondary text-center text-lg py-3 px-8">
                Explore Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Features */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Practical Learning */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border-2 border-blue-200 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                <Microscope className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Practical Learning</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Hands-on experiments and real-world applications
              </p>
            </div>

            {/* Research-Based */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border-2 border-purple-200 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Research-Based</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Scientific thinking and evidence-based learning
              </p>
            </div>

            {/* Graphical Understanding */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl border-2 border-cyan-200 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Graphical Understanding</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Visual explanations for complex concepts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
