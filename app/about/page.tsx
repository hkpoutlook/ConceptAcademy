import { CheckCircle, Target, Lightbulb } from 'lucide-react'

const coreValues = [
  {
    title: 'Integrity in Learning',
    description: 'Only accurate, verified, and reviewed content. No shortcuts or misinformation.'
  },
  {
    title: 'Curiosity & Inquiry',
    description: 'Encourage asking why and how, not just memorizing facts.'
  },
  {
    title: 'Hands-On Learning',
    description: 'Knowledge is strengthened through practical experiments and observation.'
  },
  {
    title: 'Visual & Graphical Thinking',
    description: 'Concepts are visualized to enhance comprehension and retention.'
  },
  {
    title: 'Research & Evidence-Based',
    description: 'Students learn to hypothesize, experiment, and analyze data like real scientists.'
  },
  {
    title: 'Safety & Ethics',
    description: 'All experiments and content are safe, age-appropriate, and ethically guided.'
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About CONCEPT ACADEMY</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            We believe education should build foundations, not just prepare for exams. CONCEPT ACADEMY is dedicated to transforming how students learn through practical, experimental, and research-based knowledge.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower every student with practical, experimental, and research-based knowledge, nurturing curiosity, critical thinking, and lifelong learning beyond rote memorization.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-purple-600" size={32} />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Organize content in a structured format, provide safe practical experiments, integrate AI responsibly, maintain multi-level content review, and enable community collaboration under ethical guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Why We're Different</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Concept-First, Not Exam-First</h3>
                <p className="text-gray-700">We focus on deep understanding and conceptual clarity, which naturally leads to better exam performance.</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Practical Over Passive</h3>
                <p className="text-gray-700">Students don't just watch videos—they experiment, observe, collect data, and draw conclusions like real scientists.</p>
              </div>

              <div className="border-l-4 border-cyan-600 pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Graphical Understanding</h3>
                <p className="text-gray-700">Complex concepts become visual and interactive, making them easier to understand and remember.</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Research-Based Thinking</h3>
                <p className="text-gray-700">We teach students to ask questions, test ideas, and analyze errors—building scientific mindset from school level.</p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Multi-Level Quality Control</h3>
                <p className="text-gray-700">Every piece of content is reviewed by teacher experts, community reviewers, and our academic advisory board.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">An Advanced Evolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            If Khan Academy explains concepts, CONCEPT ACADEMY helps students discover them through practical experimentation and research-based thinking.
          </p>
          <p className="text-lg opacity-90">
            We respect and acknowledge the contribution of platforms like Khan Academy while pursuing a distinct, research-driven and practice-focused learning approach.
          </p>
        </div>
      </section>
    </div>
  )
}
