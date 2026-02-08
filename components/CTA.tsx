import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Build Your Foundation?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students discovering knowledge through practical learning, experimentation, and research.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200 text-center"
          >
            Start Free Today
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-200 text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
