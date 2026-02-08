import { FileText, Download, Filter } from 'lucide-react'

const materials = [
  { class: 9, subject: 'Physics', chapter: 'Motion', type: 'Concept Notes' },
  { class: 9, subject: 'Physics', chapter: 'Motion', type: 'Formula Sheet' },
  { class: 9, subject: 'Chemistry', chapter: 'Atoms & Molecules', type: 'Concept Notes' },
  { class: 10, subject: 'Mathematics', chapter: 'Quadratic Equations', type: 'Worksheet' },
  { class: 10, subject: 'Biology', chapter: 'Life Processes', type: 'Mind Map' },
  { class: 8, subject: 'Science', chapter: 'Force & Pressure', type: 'Concept Notes' },
]

export default function StudyMaterials() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Study Materials</h1>
          <p className="text-xl text-gray-700">
            Comprehensive PDF library with concept notes, formulas, worksheets, and mind maps organized by class, subject, and chapter.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-6">
            <Filter size={24} className="text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Filter Materials</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>All Classes</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1}>Class {i + 1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>All Types</option>
                <option>Concept Notes</option>
                <option>Formula Sheet</option>
                <option>Worksheet</option>
                <option>Mind Map</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full btn-primary">Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Materials List */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-4">
            {materials.map((material, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Class {material.class} - {material.subject} - {material.chapter}
                    </h3>
                    <p className="text-sm text-gray-600">{material.type}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 btn-primary">
                  <Download size={18} />
                  Download
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Materials</button>
          </div>
        </div>
      </section>

      {/* Material Types Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Types of Study Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Concept Notes', desc: 'Detailed explanations with examples' },
              { title: 'Formula Sheets', desc: 'Quick reference for important formulas' },
              { title: 'Worksheets', desc: 'Practice problems with solutions' },
              { title: 'Mind Maps', desc: 'Visual summaries of chapters' },
            ].map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 text-center">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
