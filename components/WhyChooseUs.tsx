import { CheckCircle } from 'lucide-react'

const reasons = [
  'Concept-first learning, not rote memorization',
  'Practical experiments for every chapter',
  'Graphical explanations for complex ideas',
  'Research-based thinking from school level',
  'Multi-level content review for accuracy',
  'Personalized learning paths with AI',
  'Safe, guided student contributions',
  'Transparent progress tracking for parents',
  'Affordable, accessible education',
  'Teacher empowerment and recognition',
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Why Choose CONCEPT ACADEMY?</h2>
            <p className="section-subtitle">An advanced evolution of concept-based learning</p>
            <p className="text-gray-600 mb-8">
              If Khan Academy explains concepts, CONCEPT ACADEMY helps students discover them through practical experimentation and research-based thinking.
            </p>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
