import Link from 'next/link'
import { BookOpen, Microscope, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-20 md:py-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Learn. Experiment. Discover. Think.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              CONCEPT ACADEMY builds a strong foundation of practical, experimental, and research-based knowledge for students from Class 1 to 12.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We don't teach answers. We teach students how knowledge is created.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup" className="btn-primary text-center">
                Start Learning Free
              </Link>
              <Link href="/about" className="btn-secondary text-center">
                Explore Our Philosophy
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <BookOpen className="text-blue-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Practical Learning</h3>
                  <p className="text-gray-600">Hands-on experiments and real-world applications</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <Microscope className="text-purple-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Research-Based</h3>
                  <p className="text-gray-600">Scientific thinking and evidence-based learning</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-cyan-600">
              <div className="flex items-start gap-4">
                <TrendingUp className="text-cyan-600 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Graphical Understanding</h3>
                  <p className="text-gray-600">Visual explanations for complex concepts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
